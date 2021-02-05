import React, { Component } from "react";
import "../styles/styles.css";
import "../styles/bootstrap.css";
import axios from "axios";

class Actor extends Component {
  

        state = {
        	
        	actors: this.props.data,
        	active: 0
        }

	

	
        render() {
			console.log(this.state.actors);
        	const { actors, active } = this.state;
        	return (
        		<div>
        			<h3>Select Persona</h3>
        			<div className="actor-list">
        				{actors.map((actor) => {
        					<p >{actor.name}</p>;
        				})}
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
        		</div>
        	);
        }
}

export default Actor;
