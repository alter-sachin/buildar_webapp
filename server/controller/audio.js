import config from "../../config";


import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import { ServerResponseError } from "utilities/errors/serverResponseError";
import { variableExists, keyNameCorrect, removeUniqueProperties } from "shared/utilities/filters";
import validate from "shared/validation/validate";
import { t } from "shared/translations/i18n";
import { updateUserProfile, verifyEmail, changeSavedLanguage, changeUserPassword } from "shared/validation/profile";
const request = require("request");


module.exports= function(router){
	router.post("/api/v1.0/audio",
		restrict({
			registered:false,
			unregistered:true
		}),
		function(req,res,next){
            
			// console.log(req)
			// const browserLng = browserResponseLng(req);

			// const authenticatedUser = {
			// 	userId:1,
				
			// };
			// console.log(req.body.speakerId);
			// console.log(req.body.textScript);
			
			//first create the audio using our endpoint 35.232.47.147:8008/audio/
			const audioInputs ={
				
				speakerId:req.body.speakerId,
				textScript: req.body.textScript,
				speed:req.body.speed
			};

			// the actual post call to the FASTAPI endpoint

		
			request.post(
				{
					url: "http://35.232.47.147:8008/audio"
					,
					json: audioInputs,

					headers:{
						"Content-type":"application/json"
					}
				},
				(err,{body}) =>{
					console.log(body)
					res.send(body);
				}


			);

		});
};