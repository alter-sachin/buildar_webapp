import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import moment from "moment";
import Switch from "rc-switch";
import SideBar from "../../../../sidebar"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

import { parameterIsSafe } from "shared/utilities/filters";
import { SUBSCRIPTION_TYPE, PAYMENT_INTERVALS } from "shared/constants";
import { t } from "shared/translations/i18n";
import User from "common/components/User";

class SubscriptionList extends Component {
	constructor(props) {
		super(props)
		this.w3_open = this.w3_open.bind(this);
		this.w3_close = this.w3_close.bind(this);
	}

	trialDays() {
		let trialDaysLeft = 0;
		if (this.props.user.get("subscriptionId") == SUBSCRIPTION_TYPE.TRIAL) {
			const currentDate = moment(this.props.user.get("loginTime"));
			const endDate = moment(this.props.user.get("subscriptionEndDate"));
			trialDaysLeft = endDate.diff(currentDate, "days");
		}
		return trialDaysLeft;
	}

	selectPricing(id) {
		const price = this.props.subscriptionList.find(row => {
			return row.get("id") == id;
		});
		if (this.props.loading == false && parameterIsSafe(() => price.get("price"))) {
			const priceNum = price.get("price");
			if (priceNum !== null && priceNum.indexOf(".") > -1 && priceNum.substring(priceNum.indexOf("."), priceNum.length) == ".00") {
				return priceNum.substring(0, priceNum.indexOf("."));
			}
			return price.get("price");
		}
		return null;
	}

	w3_open = () => {
		document.getElementById("main").style.marginLeft = "20%";
		document.getElementById("mySidebar").style.width = "15%";
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("openNav").style.visibility = 'hidden';
	}
	w3_close = () => {
		document.getElementById("main").style.marginLeft = "10%";
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("openNav").style.display = "inline-block";
		document.getElementById("openNav").style.visibility = "visible";
	}
	render() {
		const { user, interval, changeInterval, selectPlan, loading } = this.props;

		// Id of plan to show depending on selected interval
		const pricingBox1Id = interval === PAYMENT_INTERVALS.MONTH ? 1 : 4;
		const pricingBox2Id = interval === PAYMENT_INTERVALS.MONTH ? 2 : 5;
		const pricingBox3Id = interval === PAYMENT_INTERVALS.MONTH ? 3 : 6;

		const subscriptionActive = user.get("subscriptionActive"); // Is subscription still active?
		const trialDaysLeft = this.trialDays(); // Calculate days left in trial

		const emailVerified = user.get("emailVerified"); // Check if user email is verified

		return (
			<Fragment>
				<SideBar />
				<button id="openNav" className="w3-button w3-xlarge" onClick={this.w3_open}>&#9776;</button>
				<div id="main">
					<div className="container py-3">
						<div className="pricing-header px-3 py-4 pt-md-5 pb-md-5 mx-auto text-center">
							<h1>
								{subscriptionActive
									? trialDaysLeft > 0
										? t("components.billing.timeRemaining", { count: trialDaysLeft })
										: t("components.billing.timeRemaining<1")
									: t("components.billing.timeRemaining_expired")}
							</h1>
							<p className="lead">{subscriptionActive ? t("components.billing.selectPlan") : t("components.billing.selectPlan_expired")}</p>
							<div className="mt-4">
								<span className={interval === PAYMENT_INTERVALS.MONTH ? "font-weight-normal" : "font-weight-light"}>{t("label.monthly")}</span>
								<Switch className="switch mx-4" checked={interval == PAYMENT_INTERVALS.YEAR ? true : false} onChange={changeInterval} />
								<span className={interval === PAYMENT_INTERVALS.YEAR ? "text-success font-weight-normal" : "font-weight-light"}>
									{t("label.yearly")} ({t("components.billing.save20%")})
							</span>
							</div>
						</div>
						{!emailVerified && <div className="text-danger text-center">{t("validation.verifyEmail")}</div>}
						<div className="card-deck py-3 text-center">
							<div className="card rounded-0">
								<div className="card-header bg-white mt-1 border-bottom-0">
									<h4 className="my-0 font-weight-normal">{t("components.billing.subscriptionType.2")}</h4>
								</div>
								<div className="card-body">
									{!loading ? (
										<h1 className="card-title pricing-card-title">
											${this.selectPricing(pricingBox1Id)}
											<small className="h5 text-muted"> / {interval === PAYMENT_INTERVALS.MONTH ? t("label.month") : t("label.year")}</small>
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>{t("components.billing.cardFeatures.cardOne.1")}</li>
										<li>{t("components.billing.cardFeatures.cardOne.2")}</li>
										<li>{t("components.billing.cardFeatures.cardOne.3")}</li>
										<li>{t("components.billing.cardFeatures.cardOne.4")}</li>
									</ul>
									<button type="button" value={pricingBox1Id} className="btn btn-block btn-primary" onClick={selectPlan} disabled={loading || !emailVerified}>
										{t("components.billing.chooseThisPlan")}
									</button>
								</div>
							</div>
							<div className="card rounded-0">
								<div className="card-header bg-white mt-1 border-bottom-0">
									<h4 className="my-0 font-weight-normal">{t("components.billing.subscriptionType.3")}</h4>
								</div>
								<div className="card-body">
									{!loading ? (
										<h1 className="card-title pricing-card-title">
											${this.selectPricing(pricingBox2Id)}
											<small className="h5 text-muted"> / {interval === PAYMENT_INTERVALS.MONTH ? t("label.month") : t("label.year")}</small>
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>{t("components.billing.cardFeatures.cardTwo.1")}</li>
										<li>{t("components.billing.cardFeatures.cardTwo.2")}</li>
										<li>{t("components.billing.cardFeatures.cardTwo.3")}</li>
										<li>{t("components.billing.cardFeatures.cardTwo.4")}</li>
									</ul>
									<button type="button" value={pricingBox2Id} className="btn btn-block btn-primary" onClick={selectPlan} disabled={loading || !emailVerified}>
										{t("components.billing.chooseThisPlan")}
									</button>
								</div>
							</div>
							<div className="card rounded-0">
								<div className="card-header bg-white mt-1 border-bottom-0">
									<h4 className="my-0 font-weight-normal">{t("components.billing.subscriptionType.4")}</h4>
								</div>
								<div className="card-body">
									{!loading ? (
										<h1 className="card-title pricing-card-title">
											${this.selectPricing(pricingBox3Id)}
											<small className="h5 text-muted"> / {interval === PAYMENT_INTERVALS.MONTH ? t("label.month") : t("label.year")}</small>
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>{t("components.billing.cardFeatures.cardThree.1")}</li>
										<li>{t("components.billing.cardFeatures.cardThree.2")}</li>
										<li>{t("components.billing.cardFeatures.cardThree.3")}</li>
										<li>{t("components.billing.cardFeatures.cardThree.4")}</li>
									</ul>
									<button type="button" value={pricingBox3Id} className="btn btn-block btn-primary" onClick={selectPlan} disabled={loading || !emailVerified}>
										{t("components.billing.chooseThisPlan")}
									</button>
								</div>
							</div>
						</div>
						<div className="subscription-features">
							<Button variant="link">See all features and benefits</Button>
						</div>
						<Card className="text-center">
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional content.
    							</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
							<Card.Footer className="text-muted">2 days ago</Card.Footer>
						</Card>
					</div>
				</div>
			</Fragment>
		);
	}
}

SubscriptionList.propTypes = {
	history: PropTypes.object,
	user: PropTypes.object,
	interval: PropTypes.number,
	changeInterval: PropTypes.func,
	selectPlan: PropTypes.func,
	subscriptionList: PropTypes.object,
	loading: PropTypes.bool
};

export default withRouter(User(SubscriptionList));
