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
			videoTitle: ""
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
						loading:false

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
					<SideBar/>
					<div id="main">
					<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
					<div class="topnav">
					  <span id="editable">
					  <EdiText
									type="textarea"
									value={"Video Title"}
									onSave={this.handleSave}
									saveButtonContent="Done"
									cancelButtonContent={<AiIcons.AiOutlineClose />}
									editButtonContent={<AiIcons.AiFillEdit />}
									hideIcons={true}

									/></span>
					  <div class="topnav-right">
					    <button onClick={this.cancelRequest} id="cancel">Cancel</button>
					    <button onClick={this.videoRequest} id="create_video">Create Video</button>
					  </div>
					</div>
					<div className="col-md-12 col-lg-12">
							<Actor data={{ actors: actors, voices: voices }} />
						</div>
					</div>
				</div>
			);
		}
	}
}

export default CreateVideo;

