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
import axios from "axios";


class SubscriptionList extends Component {
	constructor(props) {
		super(props)

		this.w3_open = this.w3_open.bind(this);
		this.w3_close = this.w3_close.bind(this);
		this.paySubscription = this.paySubscription.bind(this);
		this.verifyTransaction = this.verifyTransaction.bind(this);
	}
	componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
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

	paySubscription(){
		// load the razorpay subscription for this particular plan
		//check if the user already has the plan in use or not and what his end date is 
		//keep a track of the user and his subscriptions 
		const { user, interval, changeInterval, selectPlan, loading } = this.props;

		const userId_FK = user.get("userId");
		//create api where a subscription is created for the particular plan
		axios.post('/api/v1.0/billing/createSubscription',{
			userId_FK : userId_FK
		})
		  .then(function (response) {
		    console.log("response is", response.request.response );
		    const myObj = JSON.parse(response.request.response);
		    const subscriptionId =  myObj.subscriptionObj.subscriptionId;
		    //do another post call to the subscription?
		    var options = {
		    	key_id :"rzp_test_GVZjTE8wBbPEcd",
		    	subscription_id : subscriptionId,
		    	"handler": function(response) {
			      axios.post('/api/v1.0/billing/verifyTransaction',{
						razorpay_payment_id : response.razorpay_payment_id,
						razorpay_subscription_id : response.razorpay_subscription_id,
						razorpay_signature : response.razorpay_signature,
						db_subscriptionId : subscriptionId
					})
					  .then(function (response) {
					    console.log("response is", response);
					  });
				}
			}

		    var rzp1 = new Razorpay(options);
		    rzp1.open();
		  })

	}

	verifyTransaction(res,subscriptionId){
		
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
								Subscribe to all services from us
							</h1>
							<p className="lead">BuildAR comes with ready to pay as you use plans</p>
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
											30$
											<small className="h5 text-muted"> / {interval === PAYMENT_INTERVALS.MONTH ? t("label.month") : t("label.year")}</small>
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>Basic Plan that gets you a video</li>
										<li>New feature</li>
										<li>feature 2</li>
										<li>FEATURE 3</li>
									</ul>
									<button type="button" value={pricingBox1Id} className="btn btn-block btn-primary" onClick={this.paySubscription}>
										this is the api button check what happens
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
										<li>Basic Plan that gets you a video</li>
										<li>New feature</li>
										<li>feature 2</li>
										<li>FEATURE 3</li>
									</ul>
									<button type="button" value={pricingBox3Id} className="btn btn-block btn-primary" onClick={selectPlan} disabled={loading || !emailVerified}>
										Choose this Plan
									</button>
								</div>
							</div>
						</div>
						
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
