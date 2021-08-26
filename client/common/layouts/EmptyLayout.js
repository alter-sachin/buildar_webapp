import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class DefaultLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Fragment>
			
			<Helmet>
                               <script async defer data-domain="buildar.live" src="https://plausible.io/js/plausible.js"></script>
                        </Helmet>				
			
				{children}
			</Fragment>
		);
	}
}

DefaultLayout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default withRouter(DefaultLayout);
