import React, { Component } from "react";
import Actor from "./components/Actor";
import Videoplayer from "./components/Videoplayer";
import "./styles/bootstrap.css";
import "./styles/styles.css";
import axios from "axios";


class Video extends Component {

    state = {
    	loading:true,
    	photos:[]
    }
    componentDidMount(){
    	axios
    		.get("/api/v1.0/actor")
    		.then(({data})=>{
    			if(data){
    				
    				this.setState({
    					loading:false,
    					photos:data
    				});
    			}
    			console.log(this.state);
    		});
           
    }

    render() {
    	if(this.state.loading){
    		return(
    			<div>Loading..</div>
    		);
    	}
    	else{        
    	return (
    			<div>
    				<div className="container">
    					<div className="row">
    						<div className="title col-sm">
    							<button type="button" className="btn btn-link video-title">
                            Video Title
    							</button>
    						</div>
    						<div className="col-sm">
    							<button type="button" className="btn create-video">
                            Create Video
    							</button>
    						</div>
    					</div>
    					<div className="row">
    						<div className="col-sm">
    							<Actor data = {this.state.photos} />
    						</div>
    						<div className="col-sm">
    							<Videoplayer />
    						</div>
    					</div>
    				</div>
    			</div>
    	);
    	}
    }
}

export default Video;

