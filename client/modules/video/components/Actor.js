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
        		speakerId:0,
        		speed:0
        	};
        	axios.post(
        		"api/v1.0/audio",data)
        		.then(({data})=>{
        			console.log(data);
        			this.setState({audioUrl:data.audioUrl});
					
        		});	
				
			
        }
		
        render() {
        	console.log(this.state.audioUrl);
        	const { actors } = this.state;
        	

			
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
        				{/* <img src={actors[0].thumbnail} width="10%" height="10%"/>
        				{actors[0].name}
        				<img src={actors[1].thumbnail} width="12%" height="12%"/>
        				{actors[1].name} */}
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
        				{this.state.audioUrl==="" ? "Nothing to play yet": <source src = {this.state.audioUrl} type="audio/wav"/>}
        			</audio>
        		</div>
        	);
        }
		
}

export default Actor;
