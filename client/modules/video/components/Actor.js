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
