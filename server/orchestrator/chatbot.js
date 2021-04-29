import { Sequelize, database, models } from "services/sequelize";
import { sendEmailChatbot } from "services/nodemailer";
import { presignedPutObject, checkObjectExists, deleteObject } from "services/s3";

import { variableExists } from "shared/utilities/filters";
import { t } from "shared/translations/i18n";
import { EMAIL_TYPE, LANGUAGE_CODES, SIGNED_URL_EXPIRY_TIME, ACL_POLICIES } from "shared/constants";
import { ServerResponseError } from "utilities/errors/serverResponseError";

export function saveEmail(requestProperties, authenticatedUser, browserLng) {
	return database().transaction(async function(transaction) {
		try {
			// Load client for authenticated user
			const userDetails = await models().chatbot.create(authenticatedUser, {transaction:transaction});
			//  console.log(user);
			// console.log(userDetails.email);
			sendEmailChatbot(userDetails.email);
			return userDetails;
		
		}
		catch (error) {
			console.error(error);
		}

	});
}


