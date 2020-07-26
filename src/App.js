import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";
export default function App() {
  const value = useSelector(state => state);
  const dispatch = useDispatch();
  const incrementFun = () => {
    dispatch(increment(5));
  };
  const decrementFun = () => {
    dispatch(decrement(2));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementFun}>+</button>
      <h2>{value}</h2>
      <button onClick={decrementFun}>-</button>
    </div>
  );
}
