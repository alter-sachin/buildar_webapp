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
		this.state = {
			counter : 0,
			planId : "plan_Gq0cwEzJTQZ1Cl",
			totalCount:12  
		}

		this.w3_open = this.w3_open.bind(this);
		this.w3_close = this.w3_close.bind(this);
		this.paySubscription = this.paySubscription.bind(this);
		this.changePlan = this.changePlan.bind(this);
		
	}
	componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
	}



	changePlan(e){
		if(this.state.counter%2 === 0){
			document.getElementById("pricetag").innerHTML = "24$ / month";
			// we are in the yearly plan so set the planId to the yearly plan
			this.state.planId = "plan_Gq0ecmL7qf8Vuk";
			this.state.totalCount = 1
			this.state.counter += 1 ;
		}
		else{
			document.getElementById("pricetag").innerHTML = "30$ / month";
			this.state.planId = "plan_Gq0cwEzJTQZ1Cl";
			this.state.totalCount = 12
			this.state.counter += 1 ;
		}
		
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
			userId_FK : userId_FK,
			planId : this.state.planId,
			totalCount : this.state.totalCount
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
								Create Videos With Beautiful Faces.
							</h1>
							<p className="lead">BuildAR comes with ready to pay as you use plans</p>
							<div className="mt-4">
								<div onChange={e =>{this.changePlan(e)}}>
							       <span id ="radio1"><input  type="radio" value="Billed Monthly" defaultChecked name="billing"/> Billed Monthly</span>
							        <span id ="radio2"><input type="radio" value="Billed Annually" name="billing"/> Billed annually (20% Savings)</span>
						      </div>
							</div>
						</div>
						<div className="card-deck py-3 text-center">
							<div className="card rounded-0">
								<div className="card-header bg-white mt-1 border-bottom-0">
									<h4 className="my-0 font-weight-normal">Personal</h4>
								</div>
								<div className="card-body">

									{!loading ? (
										<h1 className="card-title pricing-card-title" id ="pricetag">
											30$ / month
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>30 Videos Per Month</li>
										<li>40+ Languages Supported</li>
										<li>Access to Premium Actors</li>
										<li>24*7 Support</li>
									</ul>
									<button type="button" value={pricingBox1Id} className="btn btn-block btn-primary btn-buildar" onClick={this.paySubscription}>
										Subcribe Now
									</button>
								</div>
							</div>
							<div className="card rounded-0">
								<div className="card-header bg-white mt-1 border-bottom-0">
									<h4 className="my-0 font-weight-normal">Enterprise</h4>
								</div>
								<div className="card-body">
									{!loading ? (
										<h1 className="card-title pricing-card-title">
											Custom Pricing
										</h1>
									) : (
										<h1><img src={require("distribution/images/loading_spinner_small.gif")} /></h1>
									)}
									<ul className="list-unstyled my-4">
										<li>Plan that scales with your use.</li>
										<li>Everything included in personal</li>
										<li>API Access</li>
										<li>Create thousands of videos at scale.</li>
									</ul>
									<button type="button" value={pricingBox3Id} className="btn btn-block btn-primary btn-buildar"  >
										Talk to Business Team
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
