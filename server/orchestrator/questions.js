import { Sequelize, database, models } from "services/sequelize";


export function loadQuestions(requestProperties, authenticatedUser,browserLng){
	return database().transaction(async function(transaction){
		try{
           	console.log("before Orchestrator",models().questions.questionId);
           	const qid = 1;
			const questions = await models().questions.findAll({ where: { questionId: qid } });
           	console.log("inside Orchestrator",questions);
            return questions;
		}
		catch(error){
			console.log(error);
		}
	}
	);
}