import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Header from "client/modules/header";

class DefaultLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Fragment>
				<Header />
				{children}
			</Fragment>
		);
	}
}

DefaultLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default DefaultLayout;
