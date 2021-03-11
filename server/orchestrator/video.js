import config from "../../config";
const { Op } = require("sequelize");
import { Sequelize, database, models } from "services/sequelize";
import { sendEmail } from "services/nodemailer";
import { presignedPutObject, checkObjectExists, deleteObject } from "services/s3";

import { variableExists } from "shared/utilities/filters";
import { t } from "shared/translations/i18n";
import { EMAIL_TYPE, LANGUAGE_CODES, SIGNED_URL_EXPIRY_TIME, ACL_POLICIES } from "shared/constants";
import { ServerResponseError } from "utilities/errors/serverResponseError";

export function loadVideos(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
			// Load client for authenticated user
			const user = await models().user.findOne({ where: { id: authenticatedUser.userId, active: true } });
			//  console.log(user);	
			const video = await models().video.findAll({ where: { userId_FK: user.id } });
			return video;
		}
		catch (error) {
			console.error(error);
		}

	});
}

export function loadSingleVideo(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
			// Load client for authenticated user
			const user = await models().user.findOne({ where: { id: authenticatedUser.userId, active: true } });
			//  console.log(user);	
			const videoId = authenticatedUser.videoId;
			const video = await models().video.findAll({ where: { userId_FK: user.id } });
			const singleVideo = await models().video.findAll({ where: { [Op.and]: [
		      { userId_FK: user.id },
		      { id: videoId }] } });
			return singleVideo;
		}
		catch (error) {
			console.error(error);
		}

	});
}



export function createVideo(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function (transaction) {
		try {
			//Create video for authenticated User
			// const user = await models().user.findOne({where :{id:authenticatedUser.userId, active:true}});
			// console.log(requestProperties);
			const videoObj = {
				title: requestProperties.title,
				description: requestProperties.description,
				thumbnail: requestProperties.thumbnail,
				textScript: requestProperties.textScript,
				videoURL: requestProperties.videoURL,
				userId_FK: requestProperties.userId_FK
			}
			console.log(videoObj);
			const videoInstance = await models().video.create(videoObj, { transaction: transaction });
			return videoInstance;
		}
		catch (error) {
			console.error(error);
			 return error;
		}
	});
}


export function deleteVideo(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function (transaction) {
		try {
			//Create video for authenticated User
			// const user = await models().user.findOne({where :{id:authenticatedUser.userId, active:true}});
			// console.log(requestProperties);
			
			const videoInstance = await models().video.destroy({ where: { id:requestProperties.videoId } }, { transaction: transaction });
			return videoInstance;
		}
		catch (error) {
			console.error(error);
			return error;
		}
	});
}
