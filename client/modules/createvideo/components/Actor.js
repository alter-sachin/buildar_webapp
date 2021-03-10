import React, { Component } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { size } from "underscore";
import AudioPlayer from "./AudioPlayer"
import Videoplayer from "./Videoplayer";
import Select from "react-select";
import EdiText from 'react-editext'
import * as AiIcons from 'react-icons/ai';

class Actor extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
		this.videoRequest = this.videoRequest.bind(this);
		this.saveVideo = this.saveVideo.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.selectActor = this.selectActor.bind(this);
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
		videoUrl: "https://buildar.in/vid/1614581284.455946.mp4",
		audioReceived: false,
		isClicked: false,
		key: 0,
		videoTitle: ""
	}


	handleChange() {
		this.setState({ textVal: event.target.value });
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

	startTimer() {
		this.setState({
			isClicked: true,
		})

	}
	audioRequest() {
		this.startTimer()

		const data = {
			speakerId: this.state.selectedElement.value,
			textScript: this.state.textVal,
			speed: 0
		};
		axios.post(
			"api/v1.0/audio", data)
			.then(({ data }) => {
				this.setState({
					audioUrl: data.audioUrl,
					isClicked: false,
					audioReceived: true
				});
				this.setState({ key: this.state.key + 1 }, () => {
					console.log(this.state.key)
				});
			});
	}

	handleSave = (val) => {
		this.setState({
			videoTitle: val
		})
	}

	videoRequest() {
		const data = {
			actorId: this.state.actorId,
			audioUrl: this.state.audioUrl,
			category: "start"
		}
		axios.post(
			"http://59448eaa5131.ngrok.io/video", data)
			.then(({ data }) => {
				this.setState({
					videoUrl: data.videoUrl
				})
			})
	}

	saveVideo() {

	}

	w3_open = () => {
		document.getElementById("main").style.marginLeft = "15%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}


	renderTime = ({ remainingTime }) => {
		if (this.state.audioUrl !== "" && this.state.isClicked == false) {
			return <div className="timer">Done!!</div>;
		}

		if (this.state.audioUrl !== "" && this.state.isClicked == true) {
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
		const { actors, voices } = this.state;

		return (
			<div>
				<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
				<div className="topnav">
					<span id="editable">
						<EdiText
							type="textarea"
							value={"Video Title"}
							onSave={this.handleSave}
							saveButtonContent="Done"
							cancelButtonContent={<AiIcons.AiOutlineClose />}
							editButtonContent={<AiIcons.AiFillEdit />}
							hideIcons={true}

						/>
					</span>
					<div className="topnav-right">
						<a type="button" href="/myvideos" className="btn btn-link" id="cancel">Cancel</a>
						<button onClick={this.videoRequest} id="create_video">Create Video</button>
						<button className="btn btn-success" onClick={this.saveVideo} id="save_video">Save Video</button>
					</div>
				</div>
				<div className="col-md-12 col-lg-12 left_right">
					<div className="container">
						<div className="row">

							<div className="col-md-6 col-lg-6 left_side">
								<h4>Select Actor</h4>
								<div className="actor-list">
									{actors.map((actor) => (
										<p className="actor" key={actor.name} onClick={() => this.selectActor(actor.actorId, actor.gender)}>
											<img src={actor.thumbnail} tabIndex="1" style={{ height: "100px" }} />
											{actor.name}
										</p>
									))}
								</div>
								<div className="actor-select" style={{ display: "flex", flexDirection: "column" }}>
									<Select
										defaultValue={this.state.voiceArray[0]}
										label="Single select"
										options={this.state.voiceArray}
										value={this.state.selectedElement}
										onChange={this.handleCheck}
									/>
								</div>
								<div className="script-input">
									<h4>Script</h4>
									<textarea
										className="text-area"
										placeholder="Insert script here"
										rows="4"
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
									<div className="timer-wrapper">
										<CountdownCircleTimer
											key={this.state.key}
											isPlaying={this.state.isClicked}
											duration={10}
											colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
											onComplete={() => [true, 0]}
											strokeWidth={8}
											size={75}>
											{this.renderTime}
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

export default Actor;