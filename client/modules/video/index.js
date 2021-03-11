import React, { Component } from "react";
import ReactPlayer from "react-player";
import SideBar from "../sidebar";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Route, withRouter } from "react-router-dom";
// Import Redux Store
import store, { injectReducer } from "common/store/store";
import video, { VIDEO } from "common/store/reducers/video.js";
import axios from "axios";
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
        videoId:this.props.id,
    	description:"",
        title:"",
        loading:true
    };

    componentDidMount(){
    /*const _this = this;*/
        const { user, history } = this.props;
        let user_id = user.get("userId");
        let video_id = this.props.location.param1;
        var userData = {
            params: {
              ID: user_id
            }
        }
        //console.log("xxxx",userData);
        axios
            .get("api/v1.0/video/"+video_id,userData)
            .then(({ data }) => {
                console.log("this is videolist",data[0]);
                this.setState({ videoUrl: data[0].videoURL,
                 description:data[0].description,
                 title:data[0].title,
                 loading: false });
            });

    }
    handleChange() {
    	this.setState({ description: event.target.value });
    }

    updateVideoRequest(){
        const { user, history } = this.props;
        let user_id = user.get("userId");
        var videoData = {
            params: {
              ID: user_id,
              videoId : this.state.videoId,
              title:this.state.title,
              description:this.state.description
            }
        }
        //console.log("xxxx",userData);
        axios
            .post("api/v1.0/video/"+video_id,videoData)
            .then(({ data }) => {
               window.location = "/myvideos";
            });

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
    							<div className="col-lg-9 col-md-9 col-sm-9 video-description">
                                      
    		 						<h1 className="video-title-edit" contentEditable="true"  onMouseOut={this.handleTitle}  placeholder="Enter Title">{this.state.title}</h1>
    								

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
                                <div className="col-lg-2 col-md-2 col-sm-2 video-description">
                                    <button id="update_button" onClick={this.updateVideoRequest} id="update_video">Update</button>
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