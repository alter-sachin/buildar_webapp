import React, { Component, Fragment } from "react";

import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Description from "./components/Description";
import Details from "./components/Details";

class Homepage extends Component {
	render() {

		return (
			
			<Fragment>
			
				<Navbar />
				<Hero />
				<Description/>
				<Details/>
			</Fragment>
			
		);
	}
}

export default Homepage;
