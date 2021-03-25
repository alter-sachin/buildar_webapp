import axios from "axios";
import React, { Component } from "react";
import SideBar from "../sidebar";
import Videocard from "./components/Videocard";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Route, withRouter } from "react-router-dom";
// Import Redux Store
import store, { injectReducer } from "common/store/store";
import video, { VIDEO } from "common/store/reducers/video.js";

import User from "common/components/User";


class MyVideo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			videoList: [],
			loading: true
		}
		this.w3_open = this.w3_open.bind(this);
		this.deleteVideo = this.deleteVideo.bind(this)
		this.duplicateVideo = this.duplicateVideo.bind(this)
	}
	componentDidMount() {
		/*const _this = this;*/
		const { user, history } = this.props;
		let user_id = user.get("userId");

		var userData = {
			params: {
				ID: user_id
			}
		}
		//console.log("xxxx",userData);
		axios
			.get("api/v1.0/videos", userData)
			.then(({ data }) => {
				//console.log("this is videolist",data);
				this.setState({ videoList: data, loading: false });
				console.log("videos are",videoList);
			});
	}
	w3_open = () => {
		document.getElementById("main").style.marginLeft = "20%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}

	deleteVideo(index, id) {
		if (confirm("Are you sure you want to permanently delete this video?")) {
			console.log("deleted this video");
			axios
				.patch("/api/v1.0/video", {
					videoId: id
				})
				.then(({ data }) => {
					if (dapropsta) {
						let newVideoList = this.state.videoList
						newVideoList.splice(index, 1)
						this.setState({
							videoList: newVideoList
						})
					}
					//console.log(this.state.actors);
				});
		}
		// this.setState((prevState) => ({
		// 	videoList: [...prevState.videoList.slice(0, index), ...prevState.videoList.slice(index + 1)]
		// }))
		// this.setState({
		// 	videoList: this.state.videoList.filter(item => item.id != index)
		// })

	}

	duplicateVideo(index, id, title, description, url, timeCreated, thumbnail) {
		axios
			.post("/api/v1.0/video", {
				title: title,
				description: description,
				thumbnail: thumbnail,
				userId_FK: 1
			})
			.then(({ data }) => {
				if (data) {
					let newElement = this.state.videoList[index]
					this.setState((prevState) => ({
						videoList: [...prevState.videoList, newElement]
					}))
				}
				//console.log(this.state.actors);
			});

	}

	render() {
		const { user, history } = this.props;
		if (this.state.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		else {
			console.log("This is auth token", user.get("authToken"));
			// console.log("this is user", user);
			var videos = this.state.videoList;
			var isVideosEmpty = false
			if (videos.length !== 0) {
				isVideosEmpty = true
			}
			return (
				<div>
					<SideBar />
					<div id="main">
						<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
						<div className="myvideo">
							<div className="container myvideo-container">
								<div className="myvideo-buttons">
									<h1 className="myvideo-header">Personal Videos</h1>
									<a href="/createvideo" type="button" className="btn ">Create New Video</a>
								</div>
								{!isVideosEmpty ? (
									<div className="no-videos">
										<Card className="text-center">
											<Card.Body>
												<Card.Title>Create A Video</Card.Title>
												<Card.Text>
													Every time you create a new video, you’ll find it here. Only you can manage videos in this library.
    												</Card.Text>
												<div className="novideo-button">
													<a href="/createvideo" type="button" className="btn ">Create New Video</a>
												</div>
											</Card.Body>
										</Card>
									</div>
								) : (
									<div className="row">
										{videos.map((video, index) => {
											return (
												<div key={index} className="col-md-4 col-lg-3 col-sm-12 myvideo-card">
													<Videocard
														key={index}
														index={index}
														id={video.id}
														title={video.title}
														description={video.description}
														url={video.videoURL}
														thumbnail = {video.thumbnail}
														timeCreated={video.timeCreated}
														deleteHandler={() => {
															this.deleteVideo(index, video.id)
														}
														}
														duplicateHandler={() => {
															this.duplicateVideo(index, video.id, video.title, video.description,
																video.url, video.timeCreated, video.thumbnail)
														}
														}
													/>
												</div>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			);

		}
	}
}

// Inject Profile Reducer
injectReducer(store, VIDEO, video);

MyVideo.propTypes = {
	history: PropTypes.object,
	user: PropTypes.object
};

export default withRouter(User(MyVideo));