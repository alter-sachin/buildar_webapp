import React from "react";
import ReactDOM from "react-dom";
import i18next from "shared/translations/i18n";
import Raven from "raven-js";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./common/styles/entry.scss";

import App from "./App";
import store from "./common/store/store";
import './styles.css';
/* eslint-disable */

// Load Google Analytics Tracking
import GA4React from "ga-4-react";
const ga4react = new GA4React("G-ZSREF7F7S7");


// Load Sentry error reporting
if (SENTRY_ENABLED) {
	Raven.config(SENTRY_DSN, {
		release: BUILD_RELEASE,
		environment: BUILD_ENVIRONMENT
	}).install();
}

/* eslint-enable */


(async _ =>{

	await ga4react.initialize();

	ReactDOM.render(
        <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                        <App />
                </I18nextProvider>
        </Provider>,
        document.getElementById("app")
);
})();
