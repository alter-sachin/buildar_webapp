import axios from "axios";
import React, { Component } from "react";
import SideBar from "../sidebar";
import Videocard from "./components/Videocard";

class MyVideo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			videoList: [
				{
					id: "0",
					title: "Video 1",
					description: "first vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				},
				{
					id: "1",
					title: "Video 2",
					description: "second vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				},
				{
					id: "2",
					title: "Video 3",
					description: "third vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				},
				{
					id: "3",
					title: "Video 4",
					description: "fourth vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				},
				{
					id: "4",
					title: "Video 5",
					description: "fifth vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				},
				{
					id: "5",
					title: "Video 6",
					description: "sixth vid",
					url: "https://www.buildar.in/assets/videos/home.mp4",
					timeCreated: "3 hours ago"
				}
			],
			loading: true
		}
		this.w3_open = this.w3_open.bind(this);
		this.deleteVideo = this.deleteVideo.bind(this)
		this.duplicateVideo = this.duplicateVideo.bind(this)
	}
	componentDidMount() {
		// axios
		// 	.get("api/v1.0/video")
		// 	.then(({ data }) => {
		// 		console.log(data);
		// 		this.setState({ videoList: data, loading: false });
		// 	});
		this.setState({ loading: false });
	}
	w3_open = () => {
		document.getElementById("main").style.marginLeft = "20%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}

	deleteVideo(index) {
		// this.setState((prevState) => ({
		// 	videoList: [...prevState.videoList.slice(0, index), ...prevState.videoList.slice(index + 1)]
		// }))
		this.setState({
			videoList: this.state.videoList.filter(item => item.id != index)
		})
	}

	duplicateVideo(index) {
		let newElement = this.state.videoList[index]
		this.setState((prevState) => ({
			videoList: [...prevState.videoList, newElement]
		}))
	}

	render() {

		if (this.state.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		else {
			const videos = this.state.videoList
			return (
				<div>
					<SideBar />
					<div id="main">
						<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
						<div className="myvideo">
							<div className="container myvideo-container">
								<div className="myvideo-buttons">
									<h1 className="myvideo-header">My Videos</h1>
									<a href="/createvideo" type="button" className="btn ">New Video</a>
								</div>
								<div className="row">
									{videos.map((video, index) => {
										return (
											<div key={index} className="col-md-4 col-lg-3 col-sm-12 myvideo-card">
												<Videocard
													key={index}
													id={video.id}
													title={video.title}
													description={video.description}
													url={video.url}
													timeCreated={video.timeCreated}
													deleteHandler={this.deleteVideo}
													duplicateHandler={this.duplicateVideo}
												/>
											</div>
										);
									}
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			);

		}
	}
}

export default MyVideo;