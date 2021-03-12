import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import validate from "shared/validation/validate";
import { t, l, activeLanguage } from "shared/translations/i18n";
import { extractSubdomain } from "shared/utilities/domains";

import { registerClient, REGISTER_REJECTED } from "common/store/reducers/authentication.js";
import { register } from "shared/validation/authentication";

import ServerError from "common/components/ServerError";
import InputField from "common/components/inputs/InputField";
import Checkbox from "common/components/inputs/Checkbox";
import WorkspaceURLField from "common/components/inputs/WorkspaceURLField";
import LanguageSwitcher from "./components/LanguageSwitcher";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			workspaceURL: "",
			firstName: "",
			lastName: "",
			emailAddress: "",
			password: "",
			privacyConsent: false,
			loading: false,
			visible: false,
			validationErrors: null,
			serverError: null
		};

		this.register = this.register.bind(this);
		this.changeField = this.changeField.bind(this);
		this.handleChecked = this.handleChecked.bind(this);
	}

	componentDidMount() {
		// Redirect if user is on register page when there is a subdomain
		const subdomain = extractSubdomain(window.location.href);
		if (subdomain && subdomain.trim() !== null && !BUILD_DOMAINPATH.includes(`${subdomain.trim()}.`)) {
			const url = `${BUILD_PROTOCOL}://${BUILD_DOMAINPATH}/register`;
			window.location.replace(url);
		} else {
			this.setState({ visible: true });
		}
	}

	changeField(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleChecked(evt) {
		this.setState({ [evt.target.name]: !this.state.privacyConsent });
	}

	register(evt) {
		evt.preventDefault(); // Prevent page refresh

		this.setState({
			loading: true,
			validationErrors: null,
			serverError: null
		});

		// Load the browser active language
		const language = activeLanguage();

		const client = {
			workspaceURL: this.state.workspaceURL,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			emailAddress: this.state.emailAddress,
			password: this.state.password,
			privacyConsent: this.state.privacyConsent,
			language: language
		};

		// Validate input parameters
		const valid = validate(client, register());

		if (valid != null) {
			this.setState({
				loading: false,
				validationErrors: valid
			});
		} else {
			this.props.registerClient(client).then(result => {
				if (result.type === REGISTER_REJECTED) {
					this.setState({
						loading: false,
						serverError: result.payload
					});
				} else {
					const url = `${BUILD_PROTOCOL}://${client.workspaceURL}.${BUILD_DOMAINPATH}/signin?registration=success`;
					window.location.replace(url);
				}
			});
		}
	}

	dataCopy() {
		document.secondaryForm.emailAddress.value = document.primaryForm.email.value
	}
	toggleSecondarySignUp() {
		var secondarySignUp = document.getElementById("secondary-signup");
		var primarySignUp = document.getElementById("primary-signup")
		var warning = document.getElementById("email-empty-warning")
		var emailInput = document.getElementById('first-email-input')
		var emailButton = document.getElementById('email-submit-button')
		if (secondarySignUp.style.display === "none" && document.primaryForm.email.value !== "") {
			this.dataCopy()
			primarySignUp.style.display = "none"
			secondarySignUp.style.display = "block";
		} else {
			warning.style.display = "block"
			warning.style.transition = "1s"
			emailInput.style.borderColor = "red"
			emailInput.style.borderWidth = "3px"
			emailButton.style.marginLeft = "2em"
		}
	}
	handleClick() {
		this.toggleSecondarySignUp()
	}
	render() {
		const { firstName, lastName, emailAddress, password, workspaceURL, privacyConsent, visible, loading, serverError, validationErrors } = this.state;
		return (
			<Fragment>
				<Helmet
					title={t("headers.register.title")}
					meta={[
						{
							name: "description",
							content: t("headers.register.description")
						}
					]}
				/>
				<div className="form-container col-xs-12 col-md-6 col-lg-6 d-flex flex-column hidden-md-down">
					{visible && (
						<div id="register">
							<div className="p-3 p-sm-5 alignment vertical justify-content-center" >
							
								<div className="google-auth-signup" id="primary-signup">
									<h2 className="google-auth-header">Sign up for <span className="logo">
											<img src={require("distribution/images/Logo_BuildAR.png")} />
										</span></h2>
									<form className="auth-form" action="api/v1.0/authentication/google" method="get">
										<button type="submit" className="btn btn-light">
											<img width="20px" style={{ marginBottom: "3px", marginRight: "1em" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
										 	Sign up with Google
										</button>
									</form>
									<div className="secondary-signup-separator">
										<hr />
										<span color="grey" fontWeight="bold">or</span>
										<hr />
									</div>
									<form name="primaryForm" className="primary-email-signup">
										<input id="first-email-input" className="form-control rounded-lg" name="email" type="text" placeholder="Enter your email to continue" />
										<span id="email-empty-warning" style={{ display: "none", fontSize: "1em", color: "red" }} color="red">The above field cannot be left empty.</span>
										<button id="email-submit-button" type="button" className="btn btn-primary go-to-signup-two" onClick={() => this.handleClick()}>Create Free Account</button>
									</form>

								</div>
								<form name="secondaryForm" className="register-2 w-100" id="secondary-signup" style={{ display: "none" }}>
									<div className="w-100 text-center mb-4">
										<span className="logo">
											<img src={require("distribution/images/Logo_BuildAR.png")} />
										</span>
									</div>
									<div className="w-100 mb-3">
										<span className="h3"> {t("action.register")} </span>{" "}
									</div>
									<ServerError error={serverError} />
									<WorkspaceURLField label={t("label.workspaceName")} value={workspaceURL} onChange={this.changeField} disabled={loading} error={validationErrors} />
									<div className="form-row">

										<div className="col">
											<InputField
												label={t("label.firstName")}
												name={"firstName"}
												id={"firstName-input"}
												value={firstName}
												type={"textField"}
												ariaLabel={"firstName"}
												onChange={this.changeField}
												disabled={loading}
												error={validationErrors}
											/>
										</div>
										<div className="col">
											<InputField
												label={t("label.lastName")}
												name={"lastName"}
												id={"lastName-input"}
												value={lastName}
												type={"textField"}
												ariaLabel={"lastName"}
												onChange={this.changeField}
												disabled={loading}
												error={validationErrors}
											/>
										</div>
									</div>
									<InputField
										label={t("label.emailAddress")}
										name={"emailAddress"}
										id={"email-input"}
										defaultValue={this.emailAddress}
										value={this.emailAddress}
										type={"textField"}
										ariaLabel={"emailAddress"}
										onChange={this.changeField}
										disabled={loading}
										error={validationErrors}
									/>
									<InputField
										label={t("label.password")}
										name={"password"}
										id={"password-input"}
										value={password}
										type={"password"}
										ariaLabel={"Password"}
										onChange={this.changeField}
										disabled={loading}
										error={validationErrors}
									/>
									
									<div>
										<div>
										
										</div>
										<br />
										<div>
											<Checkbox
												id="privacyConsent"
												name="privacyConsent"
												value={privacyConsent}
												onClick={this.handleChecked}
												smallText
												disabled={loading}
												label={t("components.authentication.privacyConsent")}
												error={validationErrors}
											/>
										</div>
									</div>
									<button type="submit" className="btn btn-primary btn-lg btn-block mt-4 p-3" onClick={this.register} disabled={loading}>
										{t("action.signUp")}
									</button>
									<div className="mt-4">
										{t("components.authentication.existingAccount")} <Link to={{ pathname: "/signin" }}>{t("action.signIn")}</Link>
									</div>
									<LanguageSwitcher />
								</form>
							</div>
						</div>
					)}
				</div>
				<div className="background-container col-md-6 col-lg-6" />
			</Fragment>
		);
	}
}

Register.propTypes = {
	registerClient: PropTypes.func
};

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		registerClient: bindActionCreators(registerClient, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
