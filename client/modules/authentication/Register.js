import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import validate from "shared/validation/validate";
import { t, l, activeLanguage } from "shared/translations/i18n";
import { extractSubdomain } from "shared/utilities/domains";
import { REDUX_STATE } from "shared/constants";
import { registerClient, REGISTER_REJECTED , AUTHENTICATION, LOGIN_REJECTED, validateWorkspaceURL, VALIDATE_WORKSPACE_URL_REJECTED, loginUser, loadUser, LOAD_USER_REJECTED } from "common/store/reducers/authentication.js";
import { register , login, workspaceURL } from "shared/validation/authentication";


import { changeLanguage } from "common/store/reducers/language.js";
import ServerError from "common/components/ServerError";
import InputField from "common/components/inputs/InputField";
import Checkbox from "common/components/inputs/Checkbox";
import WorkspaceURLField from "common/components/inputs/WorkspaceURLField";
import LanguageSwitcher from "./components/LanguageSwitcher";
import axios from "axios";
import { GoogleLogin} from "react-google-login";

import Alert from "common/components/Alert";
import { clientStyling } from "./components/ClientStyling";
import WorkspaceURL from "./components/WorkspaceURL";
import SignInForm from "./components/SignInForm";
import Loading from "common/components/Loading";
import { setGAUser } from "common/components/GoogleAnalytics";

const clientId = "976971922840-p9eobg6v863nppicf7vsatfup1q82qjt.apps.googleusercontent.com";


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
			serverError: null,
			newLoading:false,
			loginPending:false,
			keepSignedIn: false,
			redirectPending: false,
		
		};

		this.register = this.register.bind(this);
		this.changeField = this.changeField.bind(this);
		this.handleChecked = this.handleChecked.bind(this);
		// this.googleAuthenticate = this.googleAuthenticate.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.changeSubdomain = this.changeSubdomain.bind(this);
		// this.googleLogin = this.googleLogin.bind(this);
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
		document.secondaryForm.emailAddress.value = document.primaryForm.email.value;
	}
	toggleSecondarySignUp() {
		var secondarySignUp = document.getElementById("secondary-signup");
		var primarySignUp = document.getElementById("primary-signup");
		var warning = document.getElementById("email-empty-warning");
		var emailInput = document.getElementById("first-email-input");
		var emailButton = document.getElementById("email-submit-button");
		if (secondarySignUp.style.display === "none" && document.primaryForm.email.value !== "") {
			this.dataCopy();
			primarySignUp.style.display = "none";
			secondarySignUp.style.display = "block";
		} else {
			warning.style.display = "block";
			warning.style.transition = "1s";
			emailInput.style.borderColor = "red";
			emailInput.style.borderWidth = "3px";
			emailButton.style.marginLeft = "2em";
		}
	}
	handleClick() {
		this.toggleSecondarySignUp();
	}
	async handleLogin(googleData){
		console.log("handle login");
		const res = await fetch("api/v1.0/authentication/google", {
			method : "POST",
			body : JSON.stringify({
				token:googleData.tokenId
			}),
			headers:{
				"Content-type":"application/json"
			}
		});
		const data = await res.json();
		//console.log("this is from frontend:", data);
		this.login(data);
	}

	login(data) {
		//evt.preventDefault(); // Prevent page refresh
		// console.log("I am inside login");
		// console.log(data.emailAddress);
		this.setState({ loginPending: true, validationErrors: null, serverError: null });
		const user = {
			workspaceURL: data.workspaceURL,
			emailAddress: data.emailAddress,
			password: data.password,
			keepSignedIn: true
		};
		this.setState({
			workspaceURL:data.workspaceURL
		});

		// Validate input parameters
		const valid = validate(user, login());
		if (valid != null) {
			this.setState({
				loginPending: false,
				validationErrors: valid
			});
		} else {
			this.props.loginUser(user).then(result => {
				if (result.type === LOGIN_REJECTED) {
					clearToken(); // Clear security token if login rejected
					fetch.clearSecurityToken(); // Clear token in fetch header
					this.setState({
						loginPending: false,
						serverError: result.payload
					});
				} else {
					this.props.loadUser().then(result => {
						if (result.type === LOAD_USER_REJECTED) {
							this.setState({
								loginPending: false,
								serverError: result.payload
							});

							//return;
						}

						// Set Google Analytics User
						setGAUser(result.payload.userId);

						// Load client specific default language
						const lng = result.payload.language;
						this.changeSubdomain();
						if (variableExists(lng) && activeLanguage() !== lng) {
							this.props.changeLanguage(lng);
						}
					});
				}
			});
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
	changeSubdomain() {
		//evt.preventDefault(); // Prevent page refresh
		console.log("did I get here?")
		
		this.setState({ redirectPending: true, validationErrors: null, serverError: null });
		// Fetch subdomain from state
		const subdomain = {
			workspaceURL: this.state.workspaceURL
		};
		console.log("subdomain",subdomain);
		const url = `${BUILD_PROTOCOL}://${BUILD_DOMAINPATH}/myvideos`;
		window.location.replace(url);

		/*// Validate input parameters
		const valid = validate(subdomain, workspaceURL());
		if (valid != null) {
			this.setState({
				redirectPending: false,
				validationErrors: valid
			});
		} else {
			const url = `${BUILD_PROTOCOL}://${subdomain.workspaceURL}.${BUILD_DOMAINPATH}/myvideos`;
			window.location.replace(url);
		}*/
	}


	render() {
		
	
		const { loginPending,keepSignIn,redirectPending,firstName, lastName, emailAddress, password,privacyConsent,loading,visible,validationErrors,serverError, workspaceURL,newLoading } = this.state;
		const { workspaceURLStatus, logInStatus, clientStyle, userToken, userKeepSignedIn, history } = this.props;

		const workspaceURLPending = workspaceURLStatus == null || workspaceURLStatus == REDUX_STATE.PENDING;

		// Handle client specific page styling
		const style = clientStyling(this.props.workspaceURLStatus, this.props.clientStyle);

		// Store security token on sign in success
		if (logInStatus == REDUX_STATE.FULFILLED && userToken != null) {
			saveToken(userToken, userKeepSignedIn);
		}
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
							
							
								<form name="secondaryForm" className="register-2 w-100" id="secondary-signup">
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
	registerClient: PropTypes.func,
	history: PropTypes.object,
	workspaceURLStatus: PropTypes.string,
	logInStatus: PropTypes.string,
	clientStyle: PropTypes.object,
	loginUser: PropTypes.func,
	loadUser: PropTypes.func,
	validateWorkspaceURL: PropTypes.func,
	userToken: PropTypes.string,
	userKeepSignedIn: PropTypes.bool,
	changeLanguage: PropTypes.func
};

function mapStateToProps(state) {
	return {
		workspaceURLStatus: state.getIn([AUTHENTICATION, "workspaceURL", "status"]),
		logInStatus: state.getIn([AUTHENTICATION, "userLogin", "status"]),
		clientStyle: state.getIn([AUTHENTICATION, "workspaceURL", "payload"]),
		userToken: state.getIn([AUTHENTICATION, "userLogin", "status", "payload", "token"]),
		userKeepSignedIn: state.getIn([AUTHENTICATION, "userLogin", "status", "payload", "keepSignedIn"])
	};
}

function mapDispatchToProps(dispatch) {
	return {
		registerClient: bindActionCreators(registerClient, dispatch),
		loginUser: bindActionCreators(loginUser, dispatch),
		loadUser: bindActionCreators(loadUser, dispatch),
		validateWorkspaceURL: bindActionCreators(validateWorkspaceURL, dispatch),
		changeLanguage: bindActionCreators(changeLanguage, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
