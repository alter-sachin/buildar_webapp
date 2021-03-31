import React from "react";
import ReactDOM from "react-dom";
import i18next from "shared/translations/i18n";
import Raven from "raven-js";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { initializeGA } from "common/components/GoogleAnalytics";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./common/styles/entry.scss";

import App from "./App";
import store from "./common/store/store";
import './styles.css';
/* eslint-disable */

//const winston = require('winston');


//var morgan = require("morgan");


// Load Google Analytics Tracking
initializeGA();

// Load Sentry error reporting
if (SENTRY_ENABLED) {
	Raven.config(SENTRY_DSN, {
		release: BUILD_RELEASE,
		environment: BUILD_ENVIRONMENT
	}).install();
}

/* eslint-enable */

//app.use(morgan('combined'));

ReactDOM.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</Provider>,
	document.getElementById("app")
);
