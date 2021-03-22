import { database, models } from "services/sequelize";
import { t } from "shared/translations/i18n";
import { ServerResponseError } from "utilities/errors/serverResponseError";
import { PAYMENT_CURRENCY, PAYMENT_INTERVALS } from "shared/constants";
import { variableExists } from "shared/utilities/filters";
import Razorpay from 'razorpay';
const crypto = require("crypto");


require("dotenv").config();

const razorpay_key_id = process.env.RAZORPAY_KEY_ID;
const razorpay_key_secret = process.env.RAZORPAY_KEY_SECRET;


// Load client subscription details
export function loadClientSubscriptionDetails(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
			// Create a response object
			const response = { status: 200, message: t("label.success", { lng: browserLng }) };

			// Return the response object
			return response;
		} catch (error) {
			throw error;
		}
	});
}

// Load list of available subscriptions
export function loadAvailableSubscriptions(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
			// Filter subscriptions based on parameters
			const filterAttributes = { newSubscriptionsAllowed: true, active: true };

			// Filter by currency
			if (variableExists(requestProperties.currency)) {
				filterAttributes.currency = PAYMENT_CURRENCY[requestProperties.currency.toUpperCase()] || null;
			}

			// Filter by payment interval
			if (variableExists(requestProperties.interval)) {
				filterAttributes.billingInterval = PAYMENT_INTERVALS[requestProperties.interval.toUpperCase()] || null;
			}

			// Load a list of available stripe plans
			const loadPlans = await models().plans.findAll(
				{
					where: filterAttributes,
					attributes: { exclude: ["name", "description", "stripeProductId", "createdAt", "updatedAt", "newSubscriptionsAllowed", "active"] }
				},
				{ transaction: transaction }
			);

			// Throw an error if no stripe plans are available
			if (loadPlans === null) {
				throw new ServerResponseError(500, t("error.somethingWentWrong", { lng: browserLng }), null);
			}

			const plans = JSON.parse(JSON.stringify(loadPlans));

			// Create a response object
			const response = { status: 200, message: t("label.success", { lng: browserLng }), subscriptions: plans };

			// Return the response object
			return response;
		} catch (error) {
			throw error;
		}
	});
}

// Load list of available subscriptions
export function createSubscription(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
/*			// Filter subscriptions based on parameters
			const filterAttributes = { newSubscriptionsAllowed: true, active: true };


			// Filter by payment interval
			if (variableExists(requestProperties.interval)) {
				filterAttributes.billingInterval = PAYMENT_INTERVALS[requestProperties.interval.toUpperCase()] || null;
			}*/
			/*console.log(requestProperties);*/
			const userId_FK = requestProperties.userId_FK
			// Load a list of available subscriptions for particular userid
			const loadSubscription = await models().subscriptions.findOne(
				{
					where: { userId_FK :userId_FK}
					//attributes: { exclude: ["name", "description", "stripeProductId", "createdAt", "updatedAt", "newSubscriptionsAllowed", "active"] }
				},
				{ transaction: transaction }
			);

			//get parameters ready to create a subcription whatever the case maybe. 

			//now create this subscription by doing the post call to the end point 
			var instance = new Razorpay({
			  key_id: razorpay_key_id,
			  key_secret: razorpay_key_secret
			});

			const pars = {
				plan_id : "plan_GnsLLScpZakuEA",
				total_count : 12,
			}
			/*console.log("loadSubscription is ", loadSubscription);*/
			// Throw an error if no stripe plans are available
			if (loadSubscription === null) {
				const sub = await instance.subscriptions.create(pars);
				console.log("sub is",sub.short_url);
				const subscriptionObj = {
					subscriptionId : sub.id,
					planId:sub.plan_id,
					status : sub.status,
					subscriptionLink: sub.short_url,
					createdAt: sub.created_at,
					active: 0,
					userId_FK: userId_FK
				}
				const subcriptionCreated = await models().subscriptions.create(subscriptionObj, { transaction: transaction });
				
/*				if(subscriptionCreated)*/
				// Create a response object


				//now that we have subscription Id, we need to create an order that
				//will be shown to the user.
				console.log("json is",subscriptionObj);


				const response = { status: 200, message: t("label.success", { lng: browserLng}),
				subscriptionObj};
				return response;
				/*throw new ServerResponseError(500, t("error.somethingWentWrong", { lng: browserLng }), null);*/
			}
			else{
				console.log("else statement");
				const sub = await instance.subscriptions.create(pars);
				console.log("sub else is",sub);
				
			}
			// Return the response object
			/*return response;*/
		} catch (error) {
			throw error;
		}
	});
}


// Load list of available subscriptions
export function verifyTransaction(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
/*			// Filter subscriptions based on parameters
			const filterAttributes = { newSubscriptionsAllowed: true, active: true };


			// Filter by payment interval
			if (variableExists(requestProperties.interval)) {
				filterAttributes.billingInterval = PAYMENT_INTERVALS[requestProperties.interval.toUpperCase()] || null;
			}*/
			/*console.log(requestProperties);*/
			console.log("aa bhi rha hai ?,",requestProperties.razorpay_signature);

			const db_subscriptionId = requestProperties.db_subscriptionId
			const razorpay_payment_id = requestProperties.razorpay_payment_id
			const razorpay_subscription_id = requestProperties.razorpay_subscription_id
			const razorpay_signature = requestProperties.razorpay_signature


			var hmac = crypto.createHmac('sha256', razorpay_key_secret);
			var data = hmac.update(razorpay_payment_id + "|" + db_subscriptionId );

			var generatedSignature = data.digest('hex');


			let isSignatureValid = generatedSignature == razorpay_signature;

			console.log("isSignatureValid",isSignatureValid);
			
		} catch (error) {
			throw error;
		}
	});
}