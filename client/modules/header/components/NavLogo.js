import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLogo extends Component {
	render() {
		return (
			<Link to={"/"} className="navbar-brand mx-2 mr-3" href="#">
				<img src={require("distribution/images/Logo_BuildAR.png")} height="40" />
			</Link>
		);
	}
}

export default NavLogo;
