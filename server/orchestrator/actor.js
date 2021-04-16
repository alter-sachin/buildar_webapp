import { Sequelize, database, models } from "services/sequelize";


export function loadActor(requestProperties, authenticatedUser,browserLng){
	return database().transaction(async function(transaction){
		try{
           
			const actor = await models().actor.findAll({transaction:transaction});
           
            return actor;
		}
		catch(error){
			console.log(error);
		}
	}
	);
}