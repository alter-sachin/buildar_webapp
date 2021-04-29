import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import { ServerResponseError } from "utilities/errors/serverResponseError";

import { variableExists, keyNameCorrect, removeUniqueProperties } from "shared/utilities/filters";
import validate from "shared/validation/validate";
import { t } from "shared/translations/i18n";
import { updateUserProfile, verifyEmail, changeSavedLanguage, changeUserPassword } from "shared/validation/profile";

import {
	saveEmail
} from "../orchestrator/chatbot";

const request = require("request");


module.exports = function(router) {
	
	router.post("/api/v1.0/chatbot",
		restrict({
			registered: false,
			unregistered: true
		}),
		function({body:{name,email}}, res, next) {
			console.log("inside controller",);
			const authenticatedUser = {
                name:name,
				email:email
			};

			saveEmail(null, authenticatedUser, null)
				.then(
					result => {

						// eslint-disable-next-line no-console
						//console.log("video is returned?",result);
						return res.status(200).send(result);

					},
					error => {
						return next(error);
					}
				);

		});






};








