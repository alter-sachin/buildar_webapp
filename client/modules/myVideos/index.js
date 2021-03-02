import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Videocard from "./components/Videocard";
import Footer from "../homepage/components/Footer"
class MyVideo extends Component {

	state = {
		videoList: [],
		loading: true
	}
	componentDidMount() {
		axios
			.get("api/v1.0/video")
			.then(({ data }) => {
				console.log(data);
				this.setState({ videoList: data, loading: false });
			});
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

			let videoList = [
				{
					id: "1",
					title: "Video 1",
					description: "first vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				},
				{
					id: "2",
					title: "Video 2",
					description: "second vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				},
				{
					id: "3",
					title: "Video 3",
					description: "third vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				},
				{
					id: "4",
					title: "Video 4",
					description: "fourth vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				},
				{
					id: "5",
					title: "Video 5",
					description: "fifth vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				},
				{
					id: "6",
					title: "Video 6",
					description: "sixth vid",
					url: "https://www.youtube.com/watch?v=yXWfy1CXuNk"
				}
			]
			// const {videoList} = this.state; 
			return (
				<div>
					<h1 className="myvideo-header">My Videos</h1>
					<div className="myvideo flex-container" >
						<Container>
							<Row>
								{videoList.map((video, index) => {
									return (
										<Col lg={true} md={true} sm={4} className="myvideo-card">
											<Videocard
												key={index}
												title={video.title}
												description={video.description}
												url={video.url}
											/>
										</Col>
									);
								}
								)}
							</Row>
						</Container>
					</div>
					<Footer />
				</div>
			);

		}
	}
}

export default MyVideo;