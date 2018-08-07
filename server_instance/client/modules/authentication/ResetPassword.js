import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { t } from "shared/translations/i18n";
import { REDUX_STATE } from "shared/constants";
import { extractSubdomain } from "shared/utilities/subdomain";

import { clientStyling } from "./components/ClientStyling";
import { AUTHENTICATION, validateWorkspaceURL } from "../../common/store/reducers/authentication.js";

import ServerSuccess from "common/components/ServerSuccess";
import ServerError from "common/components/ServerError";
import InputField from "common/components/inputs/InputField";

class ResetPassword extends Component {
	constructor(props) {
		super(props);

		this.state = {
			password: "",
			verifyPassword: "",
			loading: false,
			visible: false,
			validationErrors: null,
			serverError: null
		};

		this.changeField = this.changeField.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		// Validate workspace url and retrieve client information
		if (this.props.workspaceURLStatus !== REDUX_STATE.FULFILLED) {
			const subdomain = extractSubdomain(window.location.href);
			this.props.validateWorkspaceURL(subdomain);
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.workspaceURLStatus === prevState.workspaceURLStatus) {
			return null;
		}
		// Store subdomain in state if valid
		if (nextProps.workspaceURLStatus === REDUX_STATE.FULFILLED) {
			const subdomain = extractSubdomain(window.location.href);
			return {
				workspaceURL: subdomain
			};
		}
		return null;
	}

	changeField(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	reset(evt) {
		evt.preventDefault(); // Prevent page refresh

		this.setState({
			loading: true,
			validationErrors: null,
			serverError: null
		});
	}

	render() {
		const { password, verifyPassword, loading, validationErrors, serverError } = this.state;
		const { workspaceURLStatus, resetPasswordStatus, clientStyle } = this.props;

		const workspaceURLPending = workspaceURLStatus == null || workspaceURLStatus == REDUX_STATE.PENDING;
		const successMessage = resetPasswordStatus == REDUX_STATE.FULFILLED && !serverError && !validationErrors;

		// Handle client specific page styling
		const style = clientStyling(workspaceURLStatus, clientStyle);

		return (
			<Fragment>
				<Helmet>
					<title>{t("headers.reset.title")}</title>
					<meta name="description" content={t("headers.reset.description")} />
				</Helmet>
				<div className={`form-container col-xs-12 col-md-6 col-lg-5 d-flex flex-column hidden-md-down ${style.links}`}>
					<div id="reset">
						<div className="p-3 p-sm-5 align-vertical justify-content-center">
							<form className="w-100">
								<div className="w-100 text-center mt-4 mb-4">
									<span className="logo">{!workspaceURLPending && <img src={(clientStyle && clientStyle.get("logoImage")) || require("distribution/images/logo_small.png")} />}</span>
								</div>
								{successMessage && <ServerSuccess path={{ reset: "success" }} message={t("success.resetPassword")} />}
								<ServerError error={serverError} />
								<div className="w-100 mt-3 mb-3">
									<span className="h3"> {t("label.resetPassword")} </span>
								</div>
								<div className="mt-4 mb-4">
									<span>{t("components.authentication.resetPassword.description")}</span>
								</div>
								<InputField
									label={t("label.password")}
									name="password"
									id={"password-input"}
									value={password}
									type={t("label.password")}
									ariaLabel={t("label.password")}
									onChange={this.changeField}
									disabled={loading}
									error={validationErrors}
								/>
								<InputField
									label={t("label.verifyPassword")}
									name="verifyPassword"
									id={"verify-password-input"}
									value={verifyPassword}
									type={"password"}
									ariaLabel={t("label.verifyPassword")}
									onChange={this.changeField}
									disabled={loading}
									error={validationErrors}
								/>
								<button type="submit" className={`btn btn-primary btn-lg btn-block mt-4 p-3 ${style.button}`} onClick={this.reset} disabled={loading}>
									{t("label.resetPassword")}
								</button>
								<div className="mt-4">
									{t("components.authentication.noReset")} <Link to={{ pathname: "/signin" }}>{t("action.signIn")}</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={`background-container col-md-6 col-lg-7 ${style.background}`} />
			</Fragment>
		);
	}
}

ResetPassword.propTypes = {
	history: PropTypes.object,
	validateWorkspaceURL: PropTypes.func,
	workspaceURLStatus: PropTypes.string,
	resetPasswordStatus: PropTypes.string,
	clientStyle: PropTypes.object
};

function mapStateToProps(state) {
	return {
		workspaceURLStatus: state.getIn([AUTHENTICATION, "workspaceURL", "status"]),
		resetPasswordStatus: state.getIn([AUTHENTICATION, "resetPassword", "status"]),
		clientStyle: state.getIn([AUTHENTICATION, "workspaceURL", "payload"])
	};
}

function mapDispatchToProps(dispatch) {
	return {
		validateWorkspaceURL: bindActionCreators(validateWorkspaceURL, dispatch)
	};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPassword));
