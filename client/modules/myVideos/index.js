import axios from "axios";
import React, { Component } from "react";

class MyVideo extends Component{

    state={
    	videoList : [],
    	loading:true
    }
    componentDidMount(){
    	axios
    		.get("api/v1.0/video")
    		.then(({data})=>{
    			console.log(data);
    			this.setState({videoList:data, loading:false});
    		});
    }
    render(){
    	if(this.state.loading){
    		return(
    			<div>
    				<h1>Loading...</h1>
    			</div>
    		);
    	}
    	else{
    	const {videoList} = this.state; 
    	return(
    		<div>
    			<h1>My Videos</h1>
    			<div style={{display:"flex", flexDirection:"row"}}>
    				{videoList.map((video,index)=>{
    							return(
    						<p key={index}>
    							{video.title}
    							{video.description}
    							{/* <img src={video.thumbnail} style={{height:"100px"}}/> */}
    							</p>
    							);
    					}
    						)}
    				
    			</div>
    		</div>
    	);

    	}
    }
}

export default MyVideo;