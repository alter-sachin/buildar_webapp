import React, { Component } from "react";
import axios from "axios";


class Questions extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
	
		};
		
	}
	componentDidMount() {
		axios
			.get("/api/v1.0/questions")
			.then(({ data }) => {
				if (data) {

					console.log("questions are",data);
				}
				//console.log(this.state.actors);
			});

	}
	

	render() {
			
			return (
				<div>
					Hey this is a common text
				</div>
			);
		
	}
}


export default Questions;
