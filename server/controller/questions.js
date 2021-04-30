import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import {
	loadQuestions
} from "../orchestrator/questions";

module.exports=function(router){
	router.get("/api/v1.0/questions",
		restrict({
			registered:false,
			unregistered:true
		}),
		function(req,res,next){
			
            // const browserLng = browserResponseLng(req);
            
			loadQuestions(null,null,null)
				.then(
					result=>{
                        console.log(result);
						return res.status(200).send(result);
					},
					error=>{
						return next(error);
					}
				);
		});
};