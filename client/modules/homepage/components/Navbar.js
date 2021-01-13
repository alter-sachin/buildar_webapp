import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { t } from "shared/translations/i18n";

import SuccessNotification from "common/components/SuccessNotification";
import ServerSuccess from "common/components/ServerSuccess";
import ServerError from "common/components/ServerError";
import InputField from "common/components/inputs/InputField";
import Checkbox from "common/components/inputs/Checkbox";

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="w-100 mb-3">
					<span className="h3">Hello World</span>
				</div>
			</div>
		);
	}
}


export default Navbar;
