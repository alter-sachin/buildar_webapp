import validate from "validate.JS";
import passport from "../services/passport";
import { register, login } from "shared/validation/authentication";
import { t } from "shared/translations/i18n";
import { ServerResponseError } from "utilities/errors/serverResponseError";
import { validateWorkspaceURL, registerNewClient, authenticateWithToken, authenticateWithoutToken, loadUser } from "../orchestrator/authentication";

module.exports = function(router) {
	// Validate Workspace URL
	router.get("/internal/validate_workspace_url/", function(req, res, next) {
		// Get workspaceURL name from header
		const workspaceURL = req.headers["workspaceurl"] ? req.headers["workspaceurl"] : "";

		// Validate header item exists
		if (workspaceURL === null || workspaceURL === "") {
			const error = new ServerResponseError(403, t("validation.clientInvalidProperties"), { workspaceURL: [t("validation.emptyWorkspaceURL")] });
			return next(error);
		}

		// Validate workspaceURL and return response
		validateWorkspaceURL(workspaceURL).then(
			result => {
				return res.status(200).send(result);
			},
			error => {
				return next(error);
			}
		);
	});

	// Register New Client Account
	router.post("/internal/register", function(req, res, next) {
		// Store received object properties
		const body = {
			workspaceURL: req.body.workspaceURL,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			emailAddress: req.body.emailAddress,
			password: req.body.password,
			privacyConsent: req.body.privacyConsent
		};

		// Validate properties in received object
		const valid = validate(body, register);
		if (valid != null) {
			const errorMsg = new ServerResponseError(403, t("validation.clientInvalidProperties"), valid);
			return next(errorMsg);
		}

		// Register new client and return response
		registerNewClient(body).then(
			result => {
				return res.status(200).send(result);
			},
			error => {
				return next(error);
			}
		);
	});

	// Login to user account
	router.post("/internal/login", function(req, res, next) {
		// Authenticate with token if authToken exists
		if (req.body.authToken != null && req.body.authToken === true) {
			authenticateWithToken(req, res, next);
			return;
		}

		// Authenticate with user properties sent in body
		const body = {
			workspaceURL: req.body.workspaceURL,
			emailAddress: req.body.emailAddress,
			password: req.body.password,
			keepSignedIn: req.body.keepSignedIn
		};

		// Validate properties in received object
		const valid = validate(body, login);
		if (valid != null) {
			const errorMsg = new ServerResponseError(403, t("validation.userInvalidProperties"), valid);
			return next(errorMsg);
		}

		// Authenticate without token
		authenticateWithoutToken(body).then(
			result => {
				return res.status(200).send(result);
			},
			error => {
				return next(error);
			}
		);
	});

	// Load user properties
	router.get("/internal/load_user/", passport.perform().authenticate("jwt"), function(req, res, next) {
		loadUser(req.user).then(
			result => {
				return res.status(200).send(result);
			},
			error => {
				return next(error);
			}
		);
	});
};