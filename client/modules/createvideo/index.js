import React, { Component } from "react";
import Actor from "./components/Actor";
import axios from "axios";

import SideBar from "../sidebar";



class CreateVideo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			actors: [],
			voices: [],
			
		}
		
	}
	componentDidMount() {
		axios
			.get("/api/v1.0/actor")
			.then(({ data }) => {
				if (data) {

					this.setState({
						actors: data,

					});
				}
				//console.log(this.state.actors);
			});
		axios
			.get("http://35.232.47.147:8008/audio")
			.then(({ data }) => {
				if (data) {
					// console.log(data)
					this.setState({
						loading: false,
						voices: data
					})
					/*console.log("voice");
					console.log(this.state.voices);	*/
				}
			});

	}
	
	//   const [editing, setEditing] = useState(false);
	// 	const [value, setValue] = useState('Create Video')

	

	render() {
		if (this.state.loading) {
			return (
				<div>Loading..</div>
			);
		}
		else {
			const { actors, voices } = this.state;
			return (
				<div>
					<SideBar />
					<div id="main">
							<Actor data={{ actors: actors, voices: voices }} />
					</div>
				</div>
			);
		}
	}
}

export default CreateVideo;

