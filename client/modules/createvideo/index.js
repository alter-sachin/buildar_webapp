import React, { Component } from "react";
import Actor from "./components/Actor";
import axios from "axios";
import EdiText from 'react-editext'
import SideBar from "../sidebar";
import * as AiIcons from 'react-icons/ai';


class CreateVideo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			actors: [],
			voices: [],
			
		}
		this.w3_open = this.w3_open.bind(this);
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
	w3_open = () => {
		document.getElementById("main").style.marginLeft = "15%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}
	//   const [editing, setEditing] = useState(false);
	// 	const [value, setValue] = useState('Create Video')

	handleSave = (val) => {
		this.setState({
			videoTitle: val
		})
	}

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

