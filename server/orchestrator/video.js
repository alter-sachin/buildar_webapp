import config from "../../config";

import { Sequelize, database, models } from "services/sequelize";
import { sendEmail } from "services/nodemailer";
import { presignedPutObject, checkObjectExists, deleteObject } from "services/s3";

import { variableExists } from "shared/utilities/filters";
import { t } from "shared/translations/i18n";
import { EMAIL_TYPE, LANGUAGE_CODES, SIGNED_URL_EXPIRY_TIME, ACL_POLICIES } from "shared/constants";
import { ServerResponseError } from "utilities/errors/serverResponseError";

export function loadVideo(requestProperties, authenticatedUser, browserLng){
	return database().transaction(async function(transaction){
		try {
			// Load client for authenticated user
			const user = await models().user.findOne({ where: { id: authenticatedUser.userId,  active: true } });
			//  console.log(user);	
			const video = await models().video.findAll({where:{userId_FK:user.id}});
			return video;
		}
		catch(error){
			console.error(error);
		}
		// Throw an error if the client does not exist
		// if (client === null) {
		// 	throw new ServerResponseError(403, t("validation.loadUserPropertiesFailed", { lng: browserLng }), { client: [t("validation.loadClientFailed", { lng: browserLng })] });
		// }

		// // Load user properties for authenticated user
		// const user = await models().user.findOne({ where: { id: authenticatedUser.userId, clientId: client.get("id"), active: true } }, { transaction: transaction });
			
		// // Throw an error if the user does not exist
		// if (user === null) {
		// 	throw new ServerResponseError(403, t("validation.loadUserPropertiesFailed", { lng: browserLng }), { user: [t("validation.loadUserPropertiesFailed", { lng: browserLng })] });
		// }
        
    
	});
}