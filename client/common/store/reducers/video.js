import { fromJS } from "immutable";
import { REDUX_STATE } from "shared/constants";

import {loadActor,
	loadPersonalVideo,
	createPersonalVideo,
	deletePersonalVideo} from "client/api/video.js";
	
import { UPDATE_PROFILE_PENDING } from "./profile";

export const VIDEO = "video";

export const LOAD_VIDEO_PENDING = VIDEO +"/LOAD_VIDEO_PENDING";
export const LOAD_VIDEO_FULFILLED = VIDEO +"/LOAD_VIDEO_FULFILLED";
export const LOAD_VIDEO_REJECTED = VIDEO +"/LOAD_VIDEO_REJECTED";

export const CREATE_VIDEO_PENDING = VIDEO +"/CREATE_VIDEO_PENDING";
export const CREATE_VIDEO_FULFILLED = VIDEO + "/CREATE_VIDEO_FULFILLED";
export const CREATE_VIDEO_REJECTED = VIDEO + "/CREATE_VIDEO_REJECTED";

export const DELETE_VIDEO_PENDING = VIDEO +"/DELETE_VIDEO_PENDING";
export const DELETE_VIDEO_FULFILLED = VIDEO +"/DELETE_VIDEO_FULFILLED";
export const DELETE_VIDEO_REJECTED = VIDEO +"/DELETE_VIDEO_REJECTED";

export const LOAD_ACTOR_PENDING = VIDEO + "/LOAD_ACTOR_PENDING";
export const LOAD_ACTOR_FULFILLED = VIDEO + "/LOAD_ACTOR_FULFILLED";
export const LOAD_ACTOR_REJECTED = VIDEO + "/LOAD_ACTOR_REJECTED";

const DEFAULT_STATE = fromJS({});

export default function video(state = DEFAULT_STATE, action){
	switch(action.type){
		case LOAD_VIDEO_PENDING:
			return state.setIn(["loadVideo","status"], REDUX_STATE.PENDING);
		case LOAD_VIDEO_FULFILLED:
			return state.set("loadVideo",
				fromJS({
					status:REDUX_STATE.FULFILLED,
					payload:action.payload
				})
			);
    
		case LOAD_VIDEO_REJECTED:
			return state.set(
				"loadVideo",
				fromJS({
					status:REDUX_STATE.REJECTED,
					payload:{},
					error:action.payload
				})
			);
		case CREATE_VIDEO_PENDING:
			return state.setIn(["createVideo","status"], REDUX_STATE.PENDING);
		case CREATE_VIDEO_FULFILLED:
			return state.set(
				"createVideo",
				fromJS({
					status:REDUX_STATE.FULFILLED,
					payload:action.payload
				})
			);
		case CREATE_VIDEO_REJECTED:
			return state.set(
				"createVideo",
				fromJS({
					status:CREATE_VIDEO_REJECTED,
					payload:{},
					error:action.payload
				})
			);
		case DELETE_VIDEO_PENDING:
			return state.setIn(["deleteVideo","status"], REDUX_STATE.PENDING);
		case DELETE_VIDEO_FULFILLED:
			return state.set(
				"deleteVideo",
				fromJS({
					status:REDUX_STATE.FULFILLED,
					payload:action.payload
				})
			);
		case DELETE_VIDEO_REJECTED:
			return state.set(
				"deleteVideo",
				fromJS({
					status:REDUX_STATE.REJECTED,
					payload:{},
					error:action.payload
				})
			);
		case LOAD_ACTOR_PENDING:
			return state.setIn(["loadActor","status"],REDUX_STATE.PENDING);
		case LOAD_ACTOR_FULFILLED:
			return state.set(
				"loadActor",
				fromJS({
					status: REDUX_STATE.FULFILLED,
					payload:action.payload
				})
			);
		case LOAD_ACTOR_REJECTED:
			return state(
				"loadActor",
				fromJS({
					status:REDUX_STATE.REJECTED,
					payload:{},
					error:action.payload
				})
			);
		default:
			return state;
	}
} 

export function loadVideo(){
	return dispatch =>{
		dispatch({
			type:LOAD_VIDEO_PENDING
		});

		return loadPersonalVideo().then(
			result => {
				return dispatch({
					type: LOAD_VIDEO_FULFILLED,
					payload:result
				});
			},
			error =>
				dispatch({
					type: LOAD_VIDEO_REJECTED,
					payload: error
				})
		);
	};
}

export function createVideo(body){
	return dispatch =>{
		dispatch({
			type: UPDATE_PROFILE_PENDING,
		});
        
		return createPersonalVideo(body).then(
			result => {
				return dispatch({
					type : CREATE_VIDEO_FULFILLED,
					payload:result
				});
			},
			error =>
				dispatch({
					type:CREATE_VIDEO_REJECTED,
					payload:error
				})
		);
	};
}

export function deleteVideo(){
	return dispatch =>{
		dispatch({
			type: DELETE_VIDEO_PENDING,
		});

		return deletePersonalVideo().then(
			result => {
				return dispatch({
					type: DELETE_VIDEO_FULFILLED,
					payload: result
				});
			},
			error => {
				dispatch({
					type: DELETE_VIDEO_REJECTED,
					payload:error
				});
			}
		);
	};
}

export function loadVideoActor(){
	return dispatch => {
		dispatch({
			type : LOAD_ACTOR_PENDING
		});
		return loadActor().then(
			result => {
				return dispatch({
					type : LOAD_ACTOR_FULFILLED,
					payload:result
				});
			},
			error =>
				dispatch({
					type : LOAD_ACTOR_REJECTED,
					payload: error
				})
		);
	};
}