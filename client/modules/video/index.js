import React, { Component } from "react";
import Actor from "./components/Actor";
import Videoplayer from "./components/Videoplayer";
import axios from "axios";
import EdiText from 'react-editext'


class Video extends Component {

    state = {
    	loading:true,
    	actors:[],
		voices:[]
    }
    componentDidMount(){
    	axios
    		.get("/api/v1.0/actor")
    		.then(({data})=>{
    			if(data){
    				
    				this.setState({
    					actors:data
    				});
    			}
    			//console.log(this.state.actors);
    		});
			axios
				.get("http://35.232.47.147:8008/audio")
				.then(({data})=>{
					if(data){
						// console.log(data)
						this.setState({
							loading:false,
							voices:data
						})	
					}
				});
           
    }

    render() {
    	if(this.state.loading){
    		return(
    			<div>Loading..</div>
    		);
    	}
    	else{        
			const {actors,voices} = this.state;
			
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
    							<Actor data = {{actors:actors, voices:voices}}/>
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

