import React, { Component } from "react";
import ReactPlayer from "react-player";
import SideBar from "../sidebar";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Route, withRouter } from "react-router-dom";
// Import Redux Store
import store, { injectReducer } from "common/store/store";
import video, { VIDEO } from "common/store/reducers/video.js";

import User from "common/components/User";

class Video extends Component {
	constructor(props) {
		super(props);

	
		this.w3_open = this.w3_open.bind(this);
		this.handleChange = this.handleChange.bind(this);
        this.handleTitle = this.handleTitle.bind(this);

	}
    state = {
    	videoUrl:"https://buildar.in/vid/1608145790.3917465.mp4",
    	userId:1,
    	description:"",
        title:""
    };

    componentDidMount(){
    	// axios.get("/api/v1.0/Video",
    	// (({data})=>{

    	// })

    }
    handleChange() {
    	this.setState({ description: event.target.value });
    }

   

    handleTitle(){
        var h1Text = document.querySelector(".video-title-edit").textContent;
        this.setState({title:h1Text});
    }
    
    w3_open = () => {
    	document.getElementById("main").style.marginLeft = "20%";
    	document.getElementById("mySidebar").style.width = "15%";
    	document.getElementById("mySidebar").style.display = "block";
    	document.getElementById("openNav").style.visibility = "hidden";
    }

    render() {

         const { user, history } = this.props;
    	// console.log(this.state.description);
        // console.log(this.state.title);
    	return (
    		<div>
    			<SideBar/>
    			<div id="main">
    				<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
    				<div className="individual-video">
    					<div className="container">
    						<div className="row">
                                <span>{user.get("id")} {user.get("firstName")} {user.get("firstName")} {user.get("emailAddress")}</span>
    							<div className="col-lg-12 col-sm-12 col-md-12 react-player-col">
    								<ReactPlayer
    									config={{ file: { attributes: { controlsList: "nodownload" } } }}
    									// Disable right click
    									onContextMenu={e => e.preventDefault()}
    									className="react-dplayer single-video"
    									url={this.state.videoUrl}
    									width="80%"
    									controls
    								/>
    							</div>
    						</div>
    						<div className="row">
    							<div className="col-lg-12 col-md-12 col-sm-12 video-description">
                                      
    		 						<h1 className="video-title-edit" contentEditable="true"  onMouseOut={this.handleTitle}  placeholder="Enter Title">Title</h1>
    								

    								<form>
    									<div className="form-group">
    										<textarea
    											tabIndex="0"
    											className="form-control"
    											id="exampleFormControlTextarea1"
    											rows="3"
                                   
    											value={this.state.description}
    											onChange={this.handleChange}
    											placeholder="Add description..">
    										</textarea>
    									</div>
    								</form>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	);
    }
}

// Inject Profile Reducer
injectReducer(store, VIDEO, video);

Video.propTypes = {
    history: PropTypes.object,
    user: PropTypes.object
};

export default withRouter(User(Video));