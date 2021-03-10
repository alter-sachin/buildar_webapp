import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
class Videocard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			url: "",
			timeCreated: ""
		};
	}


	render() {
		const { id, title, description, url, timeCreated } = this.props;
		return (
			<div className="myvideo-card-item">
				<div className="myvideo-card">
					<div className="myvideo-card-menu">
						<Dropdown id="myvideo-card-menu-dropdown">
							<Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
								<i className="fa fa-bars"></i>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="">Edit</Dropdown.Item>
								<Dropdown.Item href="" onClick={() => this.props.deleteHandler(id)}>Delete</Dropdown.Item>
								<Dropdown.Item href="" onClick={() => this.props.duplicateHandler(id)}>Duplicate</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<a href="/video">
						<img className="myvideo-thumbnail" src="images/Logo_BuildAR.png" />
					</a>
					<p className="myvideo-title"> {title}</p>
				</div>
				<div className="myvideo-time">
					<p>
						{timeCreated}
						<div id="myvideo-footer-icons">
							<label className="btn btn-sm">
								<AiIcons.AiOutlineStar size={20} />
							</label>
							<span className="tooltiptext">Add to favourites</span>
						</div>
						<div id="myvideo-footer-icons">
							<label
								className="btn btn-sm"
								onClick={() => navigator.clipboard.writeText({ url })}>
								<AiIcons.AiOutlineLink size={20} />
							</label>
							<span className="tooltiptext">Copy link</span>
						</div>
					</p>
				</div>
			</div>
		);
	}
}

export default Videocard;
