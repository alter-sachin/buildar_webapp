import React, { Component } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { size } from "underscore";
import AudioPlayer from "./AudioPlayer"
import Videoplayer from "./Videoplayer";
import Select from "react-select"

class Actor extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
		this.videoRequest = this.videoRequest.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.selectActor = this.selectActor.bind(this);
	}
	state = {
		actors: this.props.data.actors,
		actorId: "",
		voices: this.props.data.voices,
		selectedElement: "",
		active: 0,
		textVal: "",
		audioUrl: "",
		videoUrl: "",
		audioReceived: false,
		isClicked: false,
		key: 0
	}


	handleChange() {
		this.setState({ textVal: event.target.value });
	}
	handleCheck(selectedElement) {
		this.setState({ selectedElement: selectedElement });
	}
	selectActor(actorId) {
		this.setState({
			actorId: actorId
		})
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
	videoRequest() {
		const data = {
			actorId: this.state.actorId,
			audioUrl: this.state.audioUrl,
		}
		axios.post(
			"http://2cdbca99f991.ngrok.io/video", data)
			.then(({ data }) => {
				this.setState({
					videoUrl: data.videoUrl
				})
			})
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
		// For dropdown component, it requires to have the input in such form
		let voiceArray = voices.map((item) => {
			return { label: item.Voice, value: item.Voice }
		})
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-6">
							<h4>Select Actor</h4>
							<div className="actor-list">
								{actors.map((actor) => (
									<p className="actor" key={actor.name} onClick={() => this.selectActor(actor.actorId)}>
										<img src={actor.thumbnail} style={{ height: "100px" }} />
										{actor.name}
									</p>
								))}
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<Select
									defaultValue={voiceArray[0]}
									label="Single select"
									options={voiceArray}
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
						<div className="col-md-6 col-lg-6 ">
							<button type="button" className="btn create-video" onClick={this.videoRequest}>
								Create Video
    						</button>
							<Videoplayer videoUrl={this.state.videoUrl} />
						</div>
					</div>
				</div>
			</div >
		);
	}

}

export default Actor;
