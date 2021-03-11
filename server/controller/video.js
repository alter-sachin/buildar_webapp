import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import { ServerResponseError } from "utilities/errors/serverResponseError";

import { variableExists, keyNameCorrect, removeUniqueProperties } from "shared/utilities/filters";
import validate from "shared/validation/validate";
import { t } from "shared/translations/i18n";
import { updateUserProfile, verifyEmail, changeSavedLanguage, changeUserPassword } from "shared/validation/profile";

import {
	createVideo,
	loadVideo,
	deleteVideo
} from "../orchestrator/video";

const request = require("request");


module.exports = function(router) {
	router.get("/api/v1.0/video",
		restrict({
			registered: false,
			unregistered: true
		}),
		function(req, res, next) {

			const authenticatedUser = {
				userId: 1,

			};

			loadVideo(null, authenticatedUser, null)
				.then(
					result => {

						// eslint-disable-next-line no-console
						console.log(result);
						return res.status(200).send(result);

					},
					error => {
						return next(error);
					}
				);

		});



	router.post("/api/v1.0/video",
		restrict({
			registered: false,
			unregistered: true

		}),
		function(req, res, next) {

			//  console.log(req.body.title);
			// const browserLng = browserResponseLng(req);
			const requestProperties = {
				title: req.body.title,
				description: req.body.description,
				thumbnail: req.body.thumbnail,
				videoURL: req.body.videoUrl,
				textScript: req.body.textScript,
				userId_FK: req.body.userId_FK
			};
			
					

			createVideo(requestProperties, null, null)
				.then(
					result => {
						// console.log(result);
						return res.send(result);
					},
					error => {
						return res.send(error);
					}
				);
		});

	router.patch("/api/v1.0/video",
		restrict({
			registered: false,
			unregistered: true

		}),
		function(req, res, next) {

			// console.log(req.body)
			const browserLng = browserResponseLng(req);
			const requestProperties = {
				videoId: req.body.videoId
			};

			// console.log(requestProperties);
			deleteVideo(requestProperties, null, browserLng)
				.then(
					result => {
						if (result === 1) {
							return res.status(200).send(`Video Deleted with id ${requestProperties.videoId}`);
						}
						else {
							return res.status(200).send("Video data does not exist in database.");
						}
					},
					error => {
						return res.send(error);
					}
				);
		});
};








