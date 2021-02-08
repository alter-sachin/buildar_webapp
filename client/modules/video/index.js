import React, { Component } from "react";
import Actor from "./components/Actor";
import Videoplayer from "./components/Videoplayer";
import axios from "axios";
import EdiText from 'react-editext'


class Video extends Component {

	state = {
		loading: true,
		actors: [],
		videoTitle: ""
	}
	componentDidMount() {
		axios
			.get("/api/v1.0/actor")
			.then(({ data }) => {
				if (data) {

					this.setState({
						loading: false,
						actors: data
					});
				}
				//console.log(this.state.actors);
			});

	}
	//   const [editing, setEditing] = useState(false);
	// 	const [value, setValue] = useState('Create Video')

	handleSave = (val) => {
		// console.log('Edited Value -> ', val)
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
			return (
				<div>
					<div className="container">
						<div className="row">
							<div className="title col-md-6 col-lg-6">
								<EdiText
									type="text"
									value={"Create Video"}
									onSave={this.handleSave}
								/>
							</div>
							<div className="col-md-6 col-lg-6">
								<button type="button" className="btn create-video">
									Create Video
    							</button>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<Actor data={this.state.actors} />
							</div>
							<div className="col-md-6 col-lg-6">
								<Videoplayer />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Video;

