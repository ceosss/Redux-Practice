import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import RootReducer from "./RootReducer";

import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(RootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
