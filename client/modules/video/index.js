import React, { Component } from "react";
import Actor from "./components/Actor";
import axios from "axios";
import EdiText from 'react-editext'


class Video extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			actors: [],
			voices: [],
			videoTitle: ""
		}
	}
	componentDidMount() {
		axios
			.get("/api/v1.0/actor")
			.then(({ data }) => {
				if (data) {

					this.setState({
						actors: data
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
					<div className="container">
						<div className="row top-buttons">
							<div className="title col-md-6 col-lg-6">
								<EdiText
									type="text"
									value={"Create Video"}
									onSave={this.handleSave}
								/>
							</div>
							{/* <div className="col-md-6 col-lg-6">
								<button type="button" className="btn create-video" onClick={this.videoRequest}>
									Create Video
    							</button>
							</div> */}
						</div>
						<div className="row">
							{/* <div className="col-md-6 col-lg-6"> */}
							<Actor data={{ actors: actors, voices: voices }} />
						</div>
						{/* <div className="col-md-6 col-lg-6"> */}
						{/* </div> */}
						{/* </div> */}
					</div>
				</div>
			);
		}
	}
}

export default Video;

