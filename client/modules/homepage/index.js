import React, { Component, Fragment } from "react";

import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Customers from "./components/Customers.js";
import Description from "./components/Description";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";


class Homepage extends Component {
	render() {

		return (
			
			<Fragment>
			
				<Navbar />
				<Hero />
				<Description/>
				<Details/>
				<Newsletter/>
				<Footer/>
			</Fragment>
			
		);
	}
}

export default Homepage;
