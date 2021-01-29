import fetch from "common/fetch";

export function createAudio(body){
	return fetch.perform("/api/v1.0/audio",{
		method:"POST",
		body: JSON.stringify(body)
	});
}


