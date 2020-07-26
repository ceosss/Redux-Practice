import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import counterReducer from "./Reducer";

import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(counterReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
