import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import { ROLE_TYPE, FEATURES } from "shared/constants";

import { loadClientSubscriptionDetails, loadAvailableSubscriptions,createSubscription,verifyTransaction } from "../orchestrator/billing";

module.exports = function(router) {
	// Load client subscription details
	router.get(
		"/api/v1.0/billing/client-subscription-details",
		restrict({
			registered: true,
			unregistered: true,
			hasAnyRole: [ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE],
			hasAllFeatures: [FEATURES.BILLING]
		}),
		function(req, res, next) {
			// Load browser language from header
			const browserLng = browserResponseLng(req);

			// Retrieve client subscription details and return response
			loadClientSubscriptionDetails(null, null, browserLng).then(
				result => {
					return res.status(200).send(result);
				},
				error => {
					return next(error);
				}
			);
		}
	);

	// Load List of available subscriptions
	router.get(
		"/api/v1.0/billing/available-subscriptions",
		restrict({
			registered: true,
			unregistered: true,
			hasAnyRole: [ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE],
			hasAllFeatures: [FEATURES.BILLING]
		}),
		function(req, res, next) {
			// Load browser language from header
			const browserLng = browserResponseLng(req);

			// Check for Query strings
			const requestProperties = { currency: req.query.currency, interval: req.query.interval };

			// Retrieve client subscription details and return response
			loadAvailableSubscriptions(requestProperties, null, browserLng).then(
				result => {
					return res.status(200).send(result);
				},
				error => {
					return next(error);
				}
			);
		}
	);


	// create subscription for user with particular plan
	router.post(
		"/api/v1.0/billing/createSubscription",
		restrict({
			registered: true,
			unregistered: true,
			hasAnyRole: [ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE],
			hasAllFeatures: [FEATURES.BILLING]
		}),
		function(req, res, next) {
			// Load browser language from header
			const browserLng = browserResponseLng(req);
			// Check for Query strings
			const requestProperties = { userId_FK:req.body.userId_FK, planId: req.body.planId, totalCount: req.body.totalCount };

			// Retrieve client subscription details and return response
			createSubscription(requestProperties, null, browserLng).then(
				result => {
					return res.status(200).send(result);

				},
				error => {
					return next(error);
				}
			);
		}
	);


	router.post(
		"/api/v1.0/billing/verifyTransaction",
		restrict({
			registered: true,
			unregistered: true,
			hasAnyRole: [ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE],
			hasAllFeatures: [FEATURES.BILLING]
		}),
		function(req, res, next) {
			// Load browser language from header
			const browserLng = browserResponseLng(req);
			// Check for Query strings
			const requestProperties = { 
				razorpay_payment_id:req.body.razorpay_payment_id, 
				razorpay_subscription_id: req.body.razorpay_subscription_id,
				razorpay_signature: req.body.razorpay_signature,
				db_subscriptionId: req.body.db_subscriptionId };

			// Retrieve client subscription details and return response
			verifyTransaction(requestProperties, null, browserLng).then(
				result => {
					return res.status(200).send(result);
					
				},
				error => {
					return next(error);
				}
			);
		}
	);
};
