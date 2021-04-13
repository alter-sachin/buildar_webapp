import React, { Component } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import AudioPlayer from "./AudioPlayer"
import Videoplayer from "./Videoplayer";
import Select from "react-select";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
// Import Redux Store
import store, { injectReducer } from "common/store/store";
import video, { VIDEO } from "common/store/reducers/video.js";

import User from "common/components/User";
import NumericStepInput from "react-number-steps-input-component";
import { useHistory } from 'react-router-dom';


class Actor extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleVoiceSpeedChange = this.handleVoiceSpeedChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
		this.videoRequest = this.videoRequest.bind(this);
		this.startAudioTimer = this.startAudioTimer.bind(this);
		this.startVideoTimer = this.startVideoTimer.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.selectActor = this.selectActor.bind(this);
		this.saveVideo = this.saveVideo.bind(this);
		this.w3_open = this.w3_open.bind(this);
	}

	state = {
		actors: this.props.data.actors,
		actorId: "",
		gender: "",
		voices: this.props.data.voices,
		voiceArray: [],
		selectedElement: "",
		active: 0,
		textVal: "",
		audioUrl: "",
		videoUrl: "",
		audioReceived: false,
		videoReceived: false,
		isAudioClicked: false,
		isVideoClicked: false,
		audioKey: 0,
		videoKey:0,
		videoTitle: "",
		voiceSpeed: 1
	}


	handleChange() {
		this.setState({ textVal: event.target.value });
	}

	handleVoiceSpeedChange() {
		this.setState({ voiceSpeed: event.target.value });
	}
	handleCheck(selectedElement) {
		this.setState({ selectedElement: selectedElement });
	}
	selectActor(actorId, gender) {
		this.setState({
			actorId: actorId,
			gender: gender
		})
		var voiceA = []
		if (gender === "male") {

			this.state.voices.map((item) => {

				if (item.Gender === "Male") {

					voiceA.push({ label: item.Voice, value: item.Voice })
				}
			})
			this.setState({
				voiceArray: voiceA
			})
		}
		else {
			this.state.voices.map((item) => {
				if (item.Gender === "Female") {
					voiceA.push({ label: item.Voice, value: item.Voice })
				}
			})
			this.setState({
				voiceArray: voiceA
			})
		}



	}

	startVideoTimer() {
		this.setState({
			isVideoClicked: true,
		})

	}
	startAudioTimer() {
		this.setState({
			isAudioClicked: true,
		})

	}
	audioRequest() {

		console.log("before config");
		const { user } = this.props;
		const config = {
			headers:{Authorization:user.get("authToken")}
		};


		if (this.state.textVal !== "") {
			document.getElementById("audio-timer-wrapper").style.display = 'block'
			this.startAudioTimer()
		}

		const data = {
			speakerId: this.state.selectedElement.value,
			textScript: this.state.textVal,
			speed: this.state.voiceSpeed
		};

		axios.post(
			"https://api.buildar.live:8008/audio", data,config)
			.then(({ data }) => {
				this.setState({
					audioUrl: data.audioUrl,
					isAudioClicked: false,
					audioReceived: true
				});
				this.setState({ audioKey: this.state.audioKey + 1 }, () => {
					console.log(this.state.audioKey)
				});
			});
	}

	handleSave() {
		var h1Text = document.querySelector(".video-title-edit").textContent;
		this.setState({ videoTitle: h1Text });
	}

	videoRequest() {
		const { user } = this.props;
		console.log("before config actor js",user.get("authToken"));
		

		const config = {
			headers:{Authorization:user.get("authToken")}
		};

		if (this.state.audioReceived) {
			document.getElementById("video-timer-wrapper").style.display = 'block'
			this.startVideoTimer()
		}
		const data = {
			actorId: this.state.actorId,
			audioUrl: this.state.audioUrl
		}
		axios.post(
			"https://api.buildar.live/video", data,config)
			.then(({ data }) => {
				this.setState({
					videoUrl: data.videoUrl,
					isVideoClicked: false,
					videoReceived: true
				});
				this.setState({ videoKey: this.state.videoKey + 1 }, () => {
					console.log(this.state.videoKey)
				});
			})
		if (this.state.videoReceived) {
			document.getElementById("save_video").disabled = false;
		}
	}
	saveVideo() {
		//console.log("actors",;
		//const history = useHistory();
		let property = this.state.actorId;
		let thumbnail_url = this.state.actors[property].thumbnail;
		console.log("property", property);
		const data = {
			title: this.state.videoTitle,
			description: "Script Used "+this.state.textVal,
			thumbnail: thumbnail_url,
			textScript: this.state.textVal,
			videoUrl: this.state.videoUrl,
			userId_FK: this.props.user.get("userId")
		}
		axios.post(
			"/api/v1.0/video", data)
			.then(({ data }) => {
				
				console.log("done");
				/*const url = `${BUILD_PROTOCOL}://${subdomain.workspaceURL}.${BUILD_DOMAINPATH}/myvideos`;
				window.location.replace(url);*/
			})
	}



	w3_open = () => {
		document.getElementById("main").style.marginLeft = "15%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}


	renderVideoTime = ({ remainingTime }) => {
		if (this.state.videoUrl !== "" && this.state.isVideoClicked == false) {
			return <div className="timer">Done</div>;
		}

		if (this.state.videoUrl !== "" && this.state.isVideoClicked == true) {
			this.state.key = this.state.key + 1;
		}

		return (
			<div className="timer">
				{/* <div className="text">Remaining</div> */}
				<div className="value">{remainingTime}</div>
				{/* <div className="text">seconds</div> */}
			</div>
		);
	};
	renderAudioTime = ({ remainingTime }) => {
		if (this.state.audioUrl !== "" && this.state.isAudioClicked == false) {
			return <div className="timer">Done</div>;
		}

		if (this.state.audioUrl !== "" && this.state.isAudioClicked == true) {
			this.state.key = this.state.key + 1;
		}

		return (
			<div className="timer">
				{/* <div className="text">Remaining</div> */}
				<div className="value">{remainingTime}</div>
				{/* <div className="text">seconds</div> */}
			</div>
		);
	};

	render() {
		const { user, history } = this.props;
		const { actors, voices } = this.state;
		console.log(user.get("authToken"));


		return (
			<div>
				<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
				
				<div className="col-md-12 col-lg-12 left_right">
					<div className="container">
						<div className="row">
							<div className="col-md-12 col-sm-12 col-lg-12 topnav">
								{/* <a type="button" href="/myvideos" className="btn btn-link" id="cancel">Go Back</a> */}
								<span id="editable">
									<h1 className="video-title-edit" contentEditable="true" onMouseOut={this.handleSave} placeholder="Enter Title">Video Title</h1>
								</span>
								<div className="d-flex topnav-right">
									<div id="video-timer-wrapper">
										<CountdownCircleTimer
											key={this.state.videoKey}
											isPlaying={this.state.isVideoClicked}
											duration={20}
											colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
											onComplete={() => [true, 0]}
											strokeWidth={5}
											size={50}>
											{this.renderVideoTime}
										</CountdownCircleTimer>
									</div>
									<button onClick={this.videoRequest} id="create_video">Create Video</button>
									<button className="btn btn-success" onClick={this.saveVideo} id="save_video">Save Video</button>
									
								</div>
							</div>
							<div className="col-md-6 col-lg-6 left_side">
								<h4>Select Actor</h4>
								<div className="actor-list">
									{actors.map((actor, index) => (
										<p className="actor" id="actor-select" key={actor.name} onClick={() => this.selectActor(actor.actorId, actor.gender)}>
											<input type="radio" id={index} name="radio" />
											<label for={index}>
												<img id="actor-image" src={actor.thumbnail} style={{ height: "100px" }} />
											</label>
											{actor.name}
										</p>
									))}
								</div>
								<div className="actor-select" style={{ display: "flex", flexDirection: "column" }}>
									<h4 id="voice_list">Select Voice</h4>
									<Select
										defaultValue={this.state.voiceArray[0]}
										label="Single select"
										options={this.state.voiceArray}
										value={this.state.selectedElement}
										onChange={this.handleCheck}
									/>
									<h4 id="voice_speed">Speed</h4>
									<input
					                type='number'
					                step="0.05"
					                min='0.5'
					                max='1.5'
					                className='form-control'
					                value={this.state.voiceSpeed}
					                onChange= {this.handleVoiceSpeedChange}
					              />
									
								</div>
								<div className="script-input">
									<h4>Script</h4>
									<textarea
										className="text-area"
										placeholder="Insert script here"
										rows="3"
										cols="50"
										value={this.state.textVal}
										onChange={this.handleChange}
									/>
								</div>
								<div className="audio-listen">
									<button type="button" className="btn btn-secondary listen-button"
										onClick={
											this.audioRequest
										}>
										Listen
	        					</button>
									<AudioPlayer className="audio-player" audioUrl={this.state.audioUrl} />
									<div id="audio-timer-wrapper">
										<CountdownCircleTimer
											key={this.state.audioKey}
											isPlaying={this.state.isAudioClicked}
											duration={10}
											colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
											onComplete={() => [true, 0]}
											strokeWidth={6}
											size={55}>
											{this.renderAudioTime}
										</CountdownCircleTimer>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-6 right_side">
								<Videoplayer videoUrl={this.state.videoUrl} />
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}

}

// Inject Profile Reducer
injectReducer(store, VIDEO, video);

Actor.propTypes = {
	history: PropTypes.object,
	user: PropTypes.object
};

export default withRouter(User(Actor));
