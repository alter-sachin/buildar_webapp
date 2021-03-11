import fetch from "common/fetch";

export function loadPersonalVideo(){
	return fetch.perform("/api/v1.0/videos",{
		method:"GET",
		
	});
}
export function createPersonalVideo(body){
	return fetch.perform("/api/v1.0/video",{
		method:"POST",
		body:JSON.stringify({
			title:body.title,
			description:body.description,
			thumbnail:body.thumbnail,
			textScript:body.textScript,
			userId_FK:body.userId
		})
		
	});
}
export function deletePersonalVideo(body){
	return fetch.perform("/api/v1.0/video",{
		method:"PATCH",
		body:JSON.stringify({
			videoId:body.videoId
		})
		
	});
}
export function loadActor(){
	return fetch.perform("/api/v1.0/actor",{
		method:"GET",
		
	});
}

