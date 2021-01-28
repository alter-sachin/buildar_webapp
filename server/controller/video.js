import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import { ServerResponseError } from "utilities/errors/serverResponseError";

import { variableExists, keyNameCorrect, removeUniqueProperties } from "shared/utilities/filters";
import validate from "shared/validation/validate";
import { t } from "shared/translations/i18n";
import { updateUserProfile, verifyEmail, changeSavedLanguage, changeUserPassword } from "shared/validation/profile";

import {
	loadVideo
} from "../orchestrator/video";

module.exports= function(router){
	router.get("/api/v1.0/video",
		restrict({
			registered:false,
			unregistered:true
		}),
		function(req,res,next){
            
			// console.log(req)
			// const browserLng = browserResponseLng(req);

			const authenticatedUser = {
				userId:1,
				
			};

			loadVideo(null, authenticatedUser, null)
				.then(
					result=>{
						
						 console.log(result)
							return res.status(200).send(result);
						
					},
					error =>{
						return next(error);
					}
            	);
			// return res.status(200).send("success");
		});

	router.post("/api/v1.0/video",
		restrict({
			registered:false,
			unregistered:true
		}),
		function(req,res,next){
            
			// console.log(req)
			// const browserLng = browserResponseLng(req);

			const authenticatedUser = {
				userId:1,
				
			};
			console.log(req.body)
			//first create the audio using our endpoint 35.232.47.147:8008/audio/
			const audioInputs ={
				speakerId:req.body.speakerId,
				textScript: req.body.textScript
			}

			



			loadVideo(null, authenticatedUser, null)
				.then(
					result=>{
						
						 console.log(result)
							return res.status(200).send(result);
						
					},
					error =>{
						return next(error);
					}
            	);
			// return res.status(200).send("success");
		});


};