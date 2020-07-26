import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./Actions";
export default function App() {
  const counter = useSelector(state => state.CounterReducer);
  const logged = useSelector(state => state.LoggedReducer);
  const dispatch = useDispatch();
  console.log(logged);

  const incrementFun = () => {
    dispatch(increment(5));
  };
  const decrementFun = () => {
    dispatch(decrement(2));
  };
  const loginFunc = () => {
    dispatch(login());
  };
  const logoutFun = () => {
    dispatch(logout());
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementFun}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrementFun}>-</button>
      <br />
      {logged ? (
        <button onClick={logoutFun}>LOGOUT</button>
      ) : (
        <button onClick={loginFunc}>LOGIN FOR SURPRISE</button>
      )}
      {logged && <h1>SURPRISE</h1>}
    </div>
  );
}
