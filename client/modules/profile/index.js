import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Route, withRouter } from "react-router-dom";

import { t } from "shared/translations/i18n";

// Import Redux Store
import store, { injectReducer } from "common/store/store";
import profile, { PROFILE } from "common/store/reducers/profile.js";

import User from "common/components/User";

import Avatar from "./components/Avatar";
import ChangeAvatar from "./components/ChangeAvatar";
import EditProfile from "./components/EditProfile";
import LanguageSettings from "./components/LanguageSettings";
import ChangePassword from "./components/ChangePassword";
import * as HiIcons from "react-icons/hi";



class Profile extends Component {
	render() {
		const { user, history } = this.props;

		function startCopy(){
			copyDivToClipboard();
		}
		function copyDivToClipboard() {
                    var range = document.createRange();
                    range.selectNode(document.getElementById("apikey"));
                    window.getSelection().removeAllRanges(); // clear current selection
                    window.getSelection().addRange(range); // to select text
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();// to deselect
                }
		return (
			<Fragment>
				<Helmet
					title={t("headers.profile.title")}
					meta={[
						{
							name: "description",
							content: t("headers.profile.description")
						}
					]}
				/>
				<div className="container">
					<div className="px-md-3 py-3 pt-5 pb-md-4 mx-auto">
						<div className="mb-3">
							<div className="col-lg-7 mx-auto">
								<div className="text-center">
									
									<Avatar photo={user.get("profilePhoto")} />
									<h3 className="text-capitalize">
										{user.get("firstName")} {user.get("lastName")}
									</h3>
								</div>
								<div className="mt-3 mb-5">
									<h5>Your API Key : </h5> 
									<h5 onClick={startCopy}> Click to Copy <HiIcons.HiClipboardCopy/> </h5>
									<div className="apikey" id="apikey" onClick={copyDivToClipboard}>{user.get("authToken")}</div>
									<h5>{t("label.profile")}</h5>
									<div className="card rounded-0 mb-3 text-left">
										<div className="card-body">
											<EditProfile location={history.location} />
										</div>
									</div>
								</div>
								<div className="my-5">
									<h5>{t("label.languageSettings")}</h5>
									<div className="card rounded-0 mb-3 text-left">
										<div className="card-body">
											<LanguageSettings location={history.location} />
										</div>
									</div>
								</div>
								<div className="my-5">
									<h5>{t("components.profile.changePassword")}</h5>
									<div className="card rounded-0 mb-3 text-left">
										<div className="card-body">
											<ChangePassword location={history.location} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<Route path={"/profile/change-profile-photo"} render={() => <ChangeAvatar />} />
					</div>
				</div>
			</Fragment>
		);
	}
}

// Inject Profile Reducer
injectReducer(store, PROFILE, profile);

Profile.propTypes = {
	history: PropTypes.object,
	user: PropTypes.object
};

export default withRouter(User(Profile));
