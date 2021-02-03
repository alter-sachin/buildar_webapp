import { Sequelize, database, models } from "services/sequelize";


export function loadActor(requestProperties, authenticatedUser,browserLng){
	return database().transaction(async function(transaction){
		try{
            console.log(requestProperties)
			const actor = await models().actor.findOne({ where : { actorId: requestProperties.actorId } },{transaction:transaction});
            console.log(actor);
            return actor;
		}
		catch(error){
			console.log(error);
		}
	}
	);
}