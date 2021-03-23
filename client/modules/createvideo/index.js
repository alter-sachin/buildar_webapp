import React, { Component } from "react";
import Actor from "./components/Actor";
import axios from "axios";
import store, { injectReducer } from "common/store/store";
import { Route, withRouter } from "react-router-dom";

import video, { VIDEO } from "common/store/reducers/video.js";
import PropTypes from "prop-types";
import User from "common/components/User";

import SideBar from "../sidebar";
import user from "../../../server/models/user";



class CreateVideo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			actors: [],
			voices: [],
			user:this.props.user
			
		};
		
	}
	componentDidMount() {
		const config = {
			headers:{Authorization:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaXVzIiwiZXhwIjoxNjE5MTAwNDM0fQ.hYp92NmEILdG2QUr6ZEEVB8rE2VA4WF3Q-_uUDiTLAg"}
		};
		const bodyParameters = {
			key:"value"
		};
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
			.get("http://35.232.47.147:8008/audio",
				bodyParameters,
				config,
			)
			.then(({ data }) => {
				if (data) {
					// console.log(data)
					this.setState({
						loading: false,
						voices: data
					});
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
			const {user} = this.props;
			console.log(user);
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
// Inject Profile Reducer
injectReducer(store, VIDEO, video);

CreateVideo.propTypes = {
	history: PropTypes.object,
	user: PropTypes.object
};
export default withRouter(User(CreateVideo));
