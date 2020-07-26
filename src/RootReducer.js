import CounterReducer from "./CounterReducer";

import LoggedReducer from "./LoggedReducer";

import { combineReducers } from "redux";

const rootRecuder = combineReducers({
  CounterReducer,
  LoggedReducer
});

export default rootRecuder;
