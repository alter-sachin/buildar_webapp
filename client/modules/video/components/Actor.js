import React, { Component } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { size } from "underscore";
import AudioPlayer from "./AudioPlayer"

class Actor extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
    this.startTimer = this.startTimer.bind(this);
	}
	state = {
		actors: this.props.data.actors,
		voices: this.props.data.voices,
		checkedElement:"",
		active: 0,
		textVal: "",
		audioUrl: "",
		audioReceived:false,
		isClicked: false,
		key:0
	}


	handleChange() {
		this.setState({ textVal: event.target.value });
	}
    handleCheck(){
	this.setState({checkedElement:event.target.value});		
	}

	startTimer() {
		this.setState({
			isClicked: true,
		})
		/*console.log(this.state.voices);
*/

	}
	audioRequest() {
		this.startTimer()

		const data = {
			speakerId: "Indian English Female Voice 1",
			textScript: this.state.textVal,
			speed: 0
		};
		axios.post(
			"api/v1.0/audio", data)
			.then(({ data }) => {
				this.setState({
					audioUrl: data.audioUrl,
					isClicked: false,
					audioReceived:true
				});
				this.setState({key: this.state.key + 1}, () => {
        			console.log(this.state.key)
    			});
			});
	}
	renderTime = ({ remainingTime }) => {
		if (this.state.audioUrl !== "" && this.state.isClicked==false) {
			console.log(this.state.audioUrl);
			return <div className="timer">Done!!</div>;
		}

		if (this.state.audioUrl !== "" && this.state.isClicked==true) {
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
		console.log(this.state.audioUrl);
		const { actors ,voices} = this.state;
		return (
			<div>
				<h4>Select Actor</h4>
				<div className="actor-list">
					{actors.map((actor) => (
						<p className="actor" key={actor.name}>
							<img src={actor.thumbnail} style={{ height: "100px" }} />
							{actor.name}
						</p>
					))}
				</div>
				<div style={{display:"flex",flexDirection:"column"}}>
        				{voices.map((item,index)=>{
        					return(
        						<label key={index} htmlFor = {item.Voice}>
        							{item.Voice}
        							<input name="voice"  value={item.Voice} type = "radio"  onClick ={this.handleCheck}/>
        						</label>
        					);
        				}
        				)}
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
							key ={this.state.key}
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
			</div >
		);
	}

}

export default Actor;
