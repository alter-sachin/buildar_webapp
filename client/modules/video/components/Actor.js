import React, { Component } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { size } from "underscore";


class Actor extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}
<<<<<<< HEAD
        state = {
        	actors: this.props.data.actors,
        	active: 0,
        	textVal : "",
        	audioUrl:"",
			voices:this.props.data.voices,
			checkedElement:""
        }
		
		
		 handleChange(){
        	this.setState({textVal: event.target.value});
        }
		 audioRequest(){
        	const data = {
        		textScript: this.state.textVal,
        		speakerId:this.state.checkedElement,
        		speed:0
        	};
        	axios.post(
        		"api/v1.0/audio",data)
        		.then(({data})=>{
        			// console.log(data);
        			this.setState({audioUrl:data.audioUrl});
					
        		});	
				
			
        }
		handleCheck(){
			this.setState({checkedElement:event.target.value})		
	}
		
        render() {
        	// console.log(this.state.audioUrl);
        	const { actors ,voices} = this.state;
        	// console.log(this.state.checkedElement);
        	return (
        		<div>
        			<h3>Select Actor</h3>
        			<div className="actor-list" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        			{actors.map((actor)=>(
        				<p  key={actor.name} style={{display:"flex", flexDirection:"column", padding:"20px"}}>
        					<img src={actor.thumbnail} style={{height:"100px"}}/>
        					
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
						)
					}
					)}
					</div>
        			<div className="script-input">
        				<h3>Script</h3>
        				<textarea
        					className="text-area"
        					placeholder="Insert script here"
        					rows="8"
        					cols="45"
        					value = {this.state.textVal}
        					onChange = {this.handleChange}
        				/>
        			</div>
        			<br />
        			<button type="button" className="btn btn-secondary listen-button"
					 onClick = {this.audioRequest}>
					
                    Listen
=======
	state = {
		actors: this.props.data,
		active: 0,
		textVal: "",
		audioUrl: "",
		isClicked: false
	}


	handleChange() {
		this.setState({ textVal: event.target.value });
	}
	audioRequest() {
		const data = {
			textScript: this.state.textVal,
			speakerId: 0,
			speed: 0
		};
		axios.post(
			"api/v1.0/audio", data)
			.then(({ data }) => {
				console.log(data);
				this.setState({
					audioUrl: data.audioUrl,
					isClicked: true
				});
			});
	}
	renderTime = ({ remainingTime }) => {
		if (remainingTime === 0) {
			return <div className="timer">Done!!</div>;
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
		const { actors } = this.state;



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
						onClick={this.audioRequest}>
						Listen
>>>>>>> origin/ux
        			</button>
					<audio className="audio-player" controls>
						{this.state.audioUrl === "" ? "Nothing to play yet" : <source src={this.state.audioUrl} type="audio/wav" />}
					</audio>
					<div className="timer-wrapper">
						<CountdownCircleTimer
							isPlaying={this.isClicked}
							duration={10}
							colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
							onComplete={() => [false, 1000]}
							strokeWidth={8}
							size={75}
						>
							{this.renderTime}
						</CountdownCircleTimer>
					</div>
				</div>
			</div>
		);
	}

}

export default Actor;
