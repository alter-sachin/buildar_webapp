import React, { Component, Fragment } from "react";

import NavBar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Customers from "./components/Customers.js";
import Valueprop from "./components/Valueprop";
import Socialproof from "./components/Socialproof";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Accordion from "./components/Accordion.js";
import Sticky from "./components/Sticky.js"
import Bot from "../chatbot/index.js";


class Homepage extends Component {
	render() {

		return (

			<Fragment>

				<NavBar />
				<Hero />
				<Socialproof />
				<Valueprop />
				<Sticky />
				<Accordion />
				<Newsletter />
				<Footer />
				<Bot />
			</Fragment>

		);
	}
}

export default Homepage;
