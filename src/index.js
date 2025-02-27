import "react-app-polyfill/ie9"; // For IE 9-11 support
import "react-app-polyfill/stable";
import "react-app-polyfill/ie11"; // For IE 11 support
import "./polyfill";
import "./index.css";
import React from "react";
import App from "./App";
import { render } from "react-snapshot";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { i18next, store } from "./config";
import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
