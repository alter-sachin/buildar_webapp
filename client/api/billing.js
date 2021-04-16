import fetch from "common/fetch";
import { generateQueryStringURL } from "shared/utilities/queryStrings";

// Load Client Subscription Details
export function clientSubscriptionDetails() {
	return fetch.perform("/api/v1.0/billing/client-subscription-details", {
		method: "GET"
	});
}

// Load List of available subscriptions
export function availableSubscriptions(parameters = {}) {
	return fetch.perform(generateQueryStringURL("/api/v1.0/billing/available-subscriptions", parameters), {
		method: "GET"
	});
}

// Load List of available subscriptions
// Account Registration
export function createSubscription(parameters = {}) {
	return fetch.perform("/api/v1.0/billing/createSubscription", {
		method: "POST",
		body: JSON.stringify({
			userId_FK: parameters.userId_FK,
			total_count: paramaters.total_count
		})
	});
}


