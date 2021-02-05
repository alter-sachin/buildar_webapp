import React, { Component } from "react";
import axios from "axios";

class Actor extends Component {
        state = {
        	actors: this.props.data,
        	active: 0
        }
	
        render() {
			//console.log(this.state);
        	const { actors, active } = this.state;
            console.log(typeof actors);
            /*const actorjson = JSON.stringify(actors)
            /*Object.entries(actors).map(([key, value]) => {
                console.log(key);
            });*/
        	return (
        		<div>
        			<h3>Select Actor</h3>
        			<div className="actor-list">
                    <img src={actors[0].thumbnail} width="100px"/>
                    {actors[0].name}
        			</div>
        			<div className="script-input">
        				<h3>Script</h3>
        				<textarea
        					className="text-area"
        					placeholder="Insert script here"
        					rows="8"
        					cols="45"
        				/>
        			</div>
        			<br />
        			<button type="button" className="btn btn-secondary listen-button">
                    Listen
        			</button>
                    <audio className="audio-player" controls></audio>
        		</div>
        	);
        }
}

export default Actor;
