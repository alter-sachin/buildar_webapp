import React, { Component } from "react";
import axios from "axios";

class Actor extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.audioRequest = this.audioRequest.bind(this);
	}
        state = {
        	actors: this.props.data,
        	active: 0,
        	textVal : "",
        	audioUrl:""
        }
		
		 handleChange(){
        	this.setState({textVal: event.target.value});
        }
		 audioRequest(){
        	const data = {
        		textScript: this.state.textVal,
        		speakerId:1,
        		speed:0
        	};
        	axios.post(
        		"api/v1.0/audio",data)
        		.then(({data})=>{
        			this.setState({audioUrl:data.audioUrl});
			
        		});	
				console.log(this.state);
			
        }
        render() {
        	
        	const { actors } = this.state;
        	

			
        	return (
        		<div>
        			<h3>Select Actor</h3>
        			<div className="actor-list">
        				<img src={actors[0].thumbnail} width="100px"/>
        				{actors[0].name}
        				<img src={actors[1].thumbnail} width="100px"/>
        				{actors[1].name}
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
        				<source src = {this.state.audioUrl} type="audio/wav"/>
        			</audio>
        		</div>
        	);
        }
		
}

export default Actor;
