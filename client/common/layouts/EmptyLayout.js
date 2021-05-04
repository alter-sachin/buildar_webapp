import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";


class DefaultLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Fragment>
			
				
			
				{children}
			</Fragment>
		);
	}
}

DefaultLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default withRouter(DefaultLayout);