import { database,models } from "services/sequelize";
import redis from "services/redis";
import jwt from "jsonwebtoken";
import moment from "moment";
import bcrypt from "bcrypt";
import { variableExists } from "shared/utilities/filters";
import { ServerResponseError } from "utilities/errors/serverResponseError";
import { t } from "shared/translations/i18n";
import { SUBSCRIPTION_TYPE, ROLE_TYPE, EMAIL_TYPE, BILLING_CYCLE } from "shared/constants";
import { sendEmail } from "services/nodemailer";
import generateUserEmailValidationCode from "../orchestrator/authentication";

let uuidv1 = require("uuid/v1");
let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;
let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
let config = require("../../config");
let GoogleStrategy = require("passport-google-oauth20").Strategy;
function initialize(app) {
	app.use(passport.initialize());


	// Local Authentication Strategy (Workspace Name, Username & Password)
	passport.use(
		new LocalStrategy(
			{
				usernameField: "emailAddress",
				passwordField: "password",
				passReqToCallback: true
			},
			function(req, u, p, done) {
				if (req.body == null) {
					return done(null, false);
				} else {
					LocalStrategyLoadUser(req.body.workspaceURL, req.body.emailAddress, req.body.password)
						.then(result => {
							return done(null, result);
						})
						.catch(error => {
							return done(null, error);
						});
				}
			}
		)
	);

	// JSON Web Token Authentication Strategy
	passport.use(
		new JwtStrategy(
			{
				jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
				secretOrKey: config.authentication.jwtSecret
			},
			function(payload, done) {
				if (payload == null) {
					return done(null, false);
				} else {
					JWTStrategyLoadUser(payload.sessionId, payload.workspaceURL, payload.clientId, payload.userId)
						.then(result => {
							return done(null, result);
						})
						.catch(error => {
							return done(null, error);
						});
				}
			}
		)
	);

	passport.serializeUser(function(user, done) {
		done(null, user.userId);
	});
	passport.deserializeUser(function(user,done){
		done(null,user.userId);
	});
	
	passport.use(new GoogleStrategy({
		clientID: "976971922840-p9eobg6v863nppicf7vsatfup1q82qjt.apps.googleusercontent.com",
		clientSecret: "-Xwi9od0l9INQAa2y3ClbQGK",
		callbackURL: "http://localhost:3000/api/v1.0/google/callback"
	},
	function(accessToken, refreshToken, profile, cb) {
		// Register user here
		console.log("yessir");
		console.log(profile);
		cb(null,profile);
		// // cb(err, profilel)
		// let workspaceNumber = Math.floor((Math.random() * 10000) + 1);
		// let workspaceName = profile.name.givenName;
		// let workspaceUrl = workspaceName + workspaceUrl;
		// googleStrategyCreateUser(profile, workspaceUrl);
	}
	));
}

async function googleStrategyCreateUser(profile, workspaceURL) {
	return database().transaction(async function(transaction){
		try{
			const client = await models().client.findOne({ where: { workspaceURL: workspaceURL, active: true } }, { transaction: transaction });

			if (client !== null) {
				throw new ServerResponseError(403, t("validation.clientInvalidProperties", { lng: browserLng }), { workspaceURL: [t("validation.registeredWorkspaceURL", { lng: browserLng })] });
			}
		
			const clientObject = {
				name: workspaceURL,
				workspaceURL: workspaceURL,
				subscriptionId: SUBSCRIPTION_TYPE.TRIAL,
			};
		
			// Calculate start time of new client account
			const startDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
		
			// Add time to clientObject
			clientObject.subscriptionStartDate = startDate;
		
			// If stripe enabled we need to create a trial end time
			if (config.stripe.enabled) {
				const endDate = moment(startDate, "YYYY-MM-DD HH:mm:ss").add(BILLING_CYCLE.TRIAL, "days");
				// Add subscription end date to the client object
				clientObject.subscriptionEndDate = endDate;
			}
		
			// Save client object to database
			const clientInstance = await models().client.create(clientObject, { transaction: transaction });
		
			// Encrypt and salt user password
			const password = await bcrypt.hash(profile.id, 10);
		
			const userInstance = await models().user.create(
				{
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					clientId: clientInstance.get("id"),
					emailAddress: profile.emails[0].value,
					password: password,
				},
				{ transaction: transaction }
			);
			await models().userRoles.create(
				{
					userId:userInstance.get("id"),
					roleId:ROLE_TYPE.OWNER,
					active:true
				},
				{transaction:transaction}
			);
			const validationCode = await generateUserEmailValidationCode(userInstance.get("id"), clientInstance.get("id"), transaction);

			// Build email params object
			const emailParams = {
				firstName: userInstance.get("firstName"),
				workspaceName: clientInstance.get("workspaceName"),
				workspaceURL: `${config.build.protocol}://${clientInstance.get("workspaceURL")}.${config.build.domainPath}/`,
				validationLink: `${config.build.protocol}://${clientInstance.get("workspaceURL")}.${config.build.domainPath}/verify#code=${validationCode}`
			};

			// Send welcome email to user
			sendEmail(EMAIL_TYPE.CLIENT_WELCOME, userInstance.get("language"), userInstance.get("emailAddress"), emailParams, clientInstance.get("id"), userInstance.get("id"));

			// Create a response object
			const response = { status: 200, message: t("label.success", { lng: browserLng }) };

			// Return the response object
			return response;
		}
		
	
		catch(error){
			throw error;
		}
	
	// console.log("signed in");
	});
}
async function LocalStrategyLoadUser(workspaceURL, emailAddress, password) {
	// Load a client using a workspaceURL
	const client = await models().client.findOne({ where: { workspaceURL: workspaceURL, active: true } });

	// Load user based on provided values
	const user = await models().user.findOne({ where: { clientId: client.get("id"), emailAddress: emailAddress, active: true } });

	// Return false if client or user could not be loaded
	if (client === null || user === null) {
		return false;
	}

	// Validate the supplied user password
	const valid = await bcrypt.compare(password, user.get("password"));
	if (valid === false) {
		return false;
	}

	// Generate a unique session id to store in the redis db and compare with the active token
	const sessionId = await uuidv1();

	// Create the JSON Web Token for the User
	const token = await jwt.sign(
		{
			sessionId: sessionId,
			userId: user.get("id"),
			clientId: client.get("id"),
			workspaceURL: client.get("workspaceURL")
		},
		config.authentication.jwtSecret,
		{
			expiresIn: config.authentication.expiry
		}
	);

	// Send new token to redis store
	if (config.redis.enabled) {
		await redis.set(sessionId, new Date().getTime().toString(), config.redis.keyExpiry);
	}

	return {
		userId: user.get("id"),
		clientId: client.get("id"),
		workspaceURL: client.get("workspaceURL"),
		token: token
	};
}

async function JWTStrategyLoadUser(sessionId, workspaceURL, clientId, userId) {
	// Connect to redis and check if there is an active session for the provided key
	if (config.redis.enabled) {
		const activeSession = await redis.get(sessionId);
		if (!variableExists(activeSession)) {
			return false;
		}
	}

	// Load a client using a workspaceURL
	const client = await models().client.findOne({ where: { id: clientId, workspaceURL: workspaceURL, active: true } });

	// Load user for the session
	const user = await models().user.findOne({ where: { id: userId, clientId: client.get("id"), active: true } });

	// Return false if client or user could not be loaded
	if (client === null || user === null) {
		return false;
	}

	// Determine if client subscription is active
	let subscriptionActive = true;
	const endDate = client.get("subscriptionEndDate");
	if (endDate !== null) {
		if (moment(endDate).diff(moment(new Date()), "minutes") <= 0) {
			subscriptionActive = false;
		}
	}

	// Load client features
	let features = await models().subscriptionFeatures.findAll({ where: { subscriptionId: client.get("subscriptionId") } });
	features = features && features.length > 0 && features.map(result => result.get("featureId"));

	// Load user roles
	let roles = await models().userRoles.findAll({ where: { userId: user.get("id") } });
	roles = roles && roles.length > 0 && roles.map(result => result.get("roleId"));

	return {
		sessionId: sessionId,
		userId: user.get("id"),
		clientId: client.get("id"),
		workspaceURL: client.get("workspaceURL"),
		subscriptionActive: subscriptionActive,
		features: features,
		roles: roles,
		emailVerified: String(user.get("emailVerified")) === "true"
	};
}

function perform() {
	return passport;
}

module.exports = {
	initialize: initialize,
	perform: perform
};
