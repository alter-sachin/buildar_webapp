import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


import Navbar from "./components/Navbar.js"
import User from "common/components/User";

class Homepage extends Component {
	render() {

		return (
			<Fragment>
				<Navbar/>
			</Fragment>
		);
	}
}

export default Homepage;
