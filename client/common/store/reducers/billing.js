import { fromJS } from "immutable";
import { REDUX_STATE } from "shared/constants";
import { clientSubscriptionDetails, availableSubscriptions,createSubscription } from "client/api/billing.js";

export const BILLING = "billing";

export const LOAD_CLIENT_SUBSCRIPTION_DETAILS_PENDING = BILLING + "/LOAD_CLIENT_SUBSCRIPTION_DETAILS_PENDING";
export const LOAD_CLIENT_SUBSCRIPTION_DETAILS_FULFILLED = BILLING + "/LOAD_CLIENT_SUBSCRIPTION_DETAILS_FULFILLED";
export const LOAD_CLIENT_SUBSCRIPTION_DETAILS_REJECTED = BILLING + "/LOAD_CLIENT_SUBSCRIPTION_DETAILS_REJECTED";

export const LOAD_SUBSCRIPTION_LIST_PENDING = BILLING + "/LOAD_SUBSCRIPTION_LIST_PENDING";
export const LOAD_SUBSCRIPTION_LIST_FULFILLED = BILLING + "/LOAD_SUBSCRIPTION_LIST_FULFILLED";
export const LOAD_SUBSCRIPTION_LIST_REJECTED = BILLING + "/LOAD_SUBSCRIPTION_LIST_REJECTED";

export const CREATE_SUBSCRIPTION_PENDING = BILLING + "/CREATE_SUBSCRIPTION_PENDING";
export const CREATE_SUBSCRIPTION_FULFILLED = BILLING + "/CREATE_SUBSCRIPTION_FULFILLED";
export const CREATE_SUBSCRIPTION_REJECTED = BILLING + "/CREATE_SUBSCRIPTION_REJECTED";




const DEFAULT_STATE = fromJS({});

export default function billing(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_PENDING:
			return state.setIn(["subscriptionDetails", "status"], REDUX_STATE.PENDING);
		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_FULFILLED:
			return state.setIn(["subscriptionDetails", "status"], REDUX_STATE.FULFILLED);
		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_REJECTED:
			return state.set(
				"subscriptionDetails",
				fromJS({
					status: REDUX_STATE.REJECTED,
					payload: {},
					error: action.payload
				})
			);
		case LOAD_SUBSCRIPTION_LIST_PENDING:
			return state.setIn(["subscriptionList", "status"], REDUX_STATE.PENDING);
		case LOAD_SUBSCRIPTION_LIST_FULFILLED:
			return state.set(
				"subscriptionList",
				fromJS({
					status: REDUX_STATE.FULFILLED,
					payload: action.payload.subscriptions
				})
			);
		case LOAD_SUBSCRIPTION_LIST_REJECTED:
			return state.set(
				"subscriptionList",
				fromJS({
					status: REDUX_STATE.REJECTED,
					payload: {},
					error: action.payload
				})
			);

		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_PENDING:
			return state.setIn(["createSubscription", "status"], REDUX_STATE.PENDING);
		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_FULFILLED:
			return state.setIn(["createSubscription", "status"], REDUX_STATE.FULFILLED);
		case LOAD_CLIENT_SUBSCRIPTION_DETAILS_REJECTED:
			return state.set(
				"createSubscription",
				fromJS({
					status: REDUX_STATE.REJECTED,
					payload: {},
					error: action.payload
				})
			);
		default:
			return state;
	}
}

export function loadSubscriptionDetails() {
	return dispatch => {
		dispatch({
			type: LOAD_CLIENT_SUBSCRIPTION_DETAILS_PENDING
		});

		return clientSubscriptionDetails().then(
			result => {
				return dispatch({
					type: LOAD_CLIENT_SUBSCRIPTION_DETAILS_FULFILLED,
					payload: result
				});
			},
			error =>
				dispatch({
					type: LOAD_CLIENT_SUBSCRIPTION_DETAILS_REJECTED,
					payload: error
				})
		);
	};
}

export function loadSubscriptionList(parameters) {
	return dispatch => {
		dispatch({
			type: LOAD_SUBSCRIPTION_LIST_PENDING
		});

		return availableSubscriptions(parameters).then(
			result => {
				return dispatch({
					type: LOAD_SUBSCRIPTION_LIST_FULFILLED,
					payload: result
				});
			},
			error =>
				dispatch({
					type: LOAD_SUBSCRIPTION_LIST_REJECTED,
					payload: error
				})
		);
	};
}
export function createUserSubscription(parameters) {
	return dispatch => {
		dispatch({
			type: CREATE_SUBSCRIPTION_PENDING
		});

		return createSubscription(parameters).then(
			result => {
				return dispatch({
					type: CREATE_SUBSCRIPTION_FULFILLED,
					payload: result
				});
			},
			error =>
				dispatch({
					type: CREATE_SUBSCRIPTION_REJECTED,
					payload: error
				})
		);
	};
}