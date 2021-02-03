import restrict from "utilities/restrictRoutes";
import browserResponseLng from "utilities/browserResponseLng";
import {
	loadActor
} from "../orchestrator/actor";

module.exports=function(router){
	router.get("/api/v1.0/actor",
		restrict({
			registered:false,
			unregistered:true
		}),
		function(req,res,next){
			const requestProperties={
				actorId:1,
			};
            // const browserLng = browserResponseLng(req);
             console.log(requestProperties);
			loadActor(requestProperties,null,null)
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