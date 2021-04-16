import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { notify } from "react-notify-toast";

import { ROLE_TYPE, FEATURES, SUBSCRIPTION_TYPE } from "shared/constants";
import { t } from "shared/translations/i18n";
import fetch from "common/fetch";
import { clearToken } from "shared/utilities/securityToken";
import { variableExists, isObjectEmpty } from "shared/utilities/filters";
import { AUTHENTICATION, LOGOUT_REJECTED, logoutUser } from "common/store/reducers/authentication";

import User from "common/components/User";
import HideComponent from "common/components/HideComponent";

import NavLogo from "./components/NavLogo";
import NavMenuLink from "./components/NavMenuLink";
import NavProfileMenu from "./components/NavProfileMenu";
import NavProfileMenuLogo from "./components/NavProfileMenuLogo";
import NavDropdownLink from "./components/NavDropdownLink";
import ActiveTrial from "./components/ActiveTrial";
import HelpCaller from "./components/HelpCaller";
import VerifyEmail from "./components/VerifyEmail";

import BurgerMenu from "common/media/icons/BurgerMenu";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuVisible: false
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.logout = this.logout.bind(this);
	}

	showMenu(evt) {
		evt.preventDefault();

		this.setState({ menuVisible: true }, () => {
			document.addEventListener("click", this.closeMenu);
		});
	}

	closeMenu() {
		this.setState({ menuVisible: false }, () => {
			document.removeEventListener("click", this.closeMenu);
		});
	}

	logout(evt) {
		evt.preventDefault();

		// Remove user session from store
		this.props.logoutUser().then(result => {
			if (result.type === LOGOUT_REJECTED) {
				// Display error notification
				notify.show(t("error.logout"), "error");
			} else {
				clearToken(); // Clear security token in browser
				fetch.clearSecurityToken(); // Clear token in fetch header

				// Refresh Browser Window
				const url = `${BUILD_PROTOCOL}://${this.props.user.get("workspaceURL")}.${BUILD_DOMAINPATH}/signin`;
				window.location.replace(url);
			}
		});
	}

	render() {
		const { user } = this.props;
		const { menuVisible } = this.state;

		// Hide header if user is not logged in
		if (!(variableExists(user) && !isObjectEmpty(user) && variableExists(user.get("userId")))) {
			return null;
		}

		const billingEnabled = STRIPE_ENABLED && (user && user.get("subscriptionEndDate") !== null);

		return (
			<div className="sticky-top">
				<nav className="navbar navbar-expand-md bg-light navbar-dark px-2 py-0">
					<NavLogo />
					<ul className="navbar-nav bd-navbar-nav flex-row ml-auto d-flex order-md-1">
						<HideComponent user={user} disabled={!billingEnabled} hasAnyRole={[ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE]}>
							<ActiveTrial />
						</HideComponent>
						<HelpCaller />
						<NavProfileMenu>
							<NavProfileMenuLogo />
							{user.get("subscriptionActive") && (
								<Fragment>
									<NavDropdownLink title={t("label.profile")} route={"/profile"} />
									<NavDropdownLink title={t("My Videos")} route={"/myvideos"} />
									<HideComponent disabled={!billingEnabled}>
										<NavDropdownLink
											title={t("label.billing")}
											route={"/billing"}
											hasAnyRole={[ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE]}
											hasAllFeatures={[FEATURES.BILLING]}
											hasAnySubscription={[SUBSCRIPTION_TYPE.TRIAL, SUBSCRIPTION_TYPE.BASIC]}
										/>
									</HideComponent>
									<HideComponent user={user} hasAnyRole={[ROLE_TYPE.OWNER, ROLE_TYPE.ADMINISTRATOR]}>
										<NavDropdownLink title={t("label.settings")} route={"/settings"} />
									</HideComponent>
									<div className="dropdown-divider" />
								</Fragment>
							)}
							<button className={"btn btn-link dropdown-item rounded-0"} onClick={this.logout}>
								{t("action.logout")}
							</button>
						</NavProfileMenu>
					</ul>
					<button className="navbar-toggler border-0 ml-2" type="button" aria-expanded="false" onClick={this.showMenu}>
						<BurgerMenu width="16px" height="16px" />
					</button>
					{user.get("subscriptionActive") && (
						<Fragment>
							<div className={`collapse navbar-collapse ${menuVisible ? "show" : ""}`}>
								<div className="navbar-nav-scroll">
									<ul className="navbar-nav bd-navbar-nav flex-md-row">
										<NavMenuLink title={t("label.overview")} route={"/overview"} isExact={true} />
										<NavMenuLink title={t("My Videos")} route={"/myvideos"} isExact={true} />
										<NavMenuLink title={t("label.profile")} route={"/profile"} isExact={false} />
										<HideComponent user={user} disabled={!billingEnabled} hasAnyRole={[ROLE_TYPE.OWNER, ROLE_TYPE.FINANCE]}>
											<NavMenuLink title={t("label.billing")} route={"/billing"} isExact={true} />
										</HideComponent>
										<HideComponent user={user} hasAnyRole={[ROLE_TYPE.OWNER, ROLE_TYPE.ADMINISTRATOR]}>
											<NavMenuLink title={t("label.settings")} route={"/settings"} />
										</HideComponent>
									</ul>
								</div>
							</div>
						</Fragment>
					)}
				</nav>
				<VerifyEmail />
			</div>
		);
	}
}

Header.propTypes = {
	user: PropTypes.object,
	logoutUser: PropTypes.func,
	logoutStatus: PropTypes.string
};

function mapStateToProps(state, props) {
	return {
		logoutStatus: state.getIn([AUTHENTICATION, "userLogout", "status"])
	};
}

function mapDispatchToProps(dispatch) {
	return {
		logoutUser: bindActionCreators(logoutUser, dispatch)
	};
}

export default User(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Header)
);
