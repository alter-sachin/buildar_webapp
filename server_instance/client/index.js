import React from "react";
import ReactDOM from "react-dom";
import i18next from "~/shared/translations/i18n";
import ReactTooltip from "react-tooltip";
import feather from "feather-icons";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import App from "./app";
import store from "./common/store/store";

import "./common/styles/entry.scss";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <React.Fragment>
        <App />
        <ReactTooltip />
      </React.Fragment>
    </I18nextProvider>
  </Provider>,
  document.getElementById("app")
);