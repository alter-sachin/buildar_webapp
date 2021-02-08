import React, { Component } from "react";
import Actor from "./components/Actor";
import Videoplayer from "./components/Videoplayer";
import axios from "axios";


class Video extends Component {

    state = {
    	loading:true,
    	actors:[]
    }
    componentDidMount(){
    	axios
    		.get("/api/v1.0/actor")
    		.then(({data})=>{
    			if(data){
    				
    				this.setState({
    					loading:false,
    					actors:data
    				});
    			}
    			//console.log(this.state.actors);
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
    						<div className="title col-md-6 col-lg-6">
    							<h4>
                            Video Title
    							</h4>
    						</div>
    						<div className="col-md-6 col-lg-6">
    							<button type="button" className="btn create-video">
                            Create Video
    							</button>
    						</div>
    					</div>
    					<div className="row">
    						<div className="col-md-6 col-lg-6">
    							<Actor data = {this.state.actors} />
    						</div>
    						<div className="col-md-6 col-lg-6">
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

