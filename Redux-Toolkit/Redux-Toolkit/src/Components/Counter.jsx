import React, { useRef } from "react";
import Display from "./Display";
import { counterActions, privacyActions } from "../Store";
import { useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrease = () => {
    dispatch(counterActions.decrement());
  };
  const handleToggle = () => {
    dispatch(privacyActions.togglePrivacy());
  };
  const handleAdd = () => {
    // console.log(Number(inputElement.current.value));
    dispatch(counterActions.add({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.subtract({ num: inputElement.current.value }));
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        {" "}
        <Display />
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {" "}
          <button
            onClick={handleIncrease}
            type="button"
            className="btn btn-outline-primary"
          >
            Increase (+1)
          </button>{" "}
          <button
            onClick={handleDecrease}
            type="button"
            className="btn btn-outline-danger"
          >
            Decrease (-1)
          </button>{" "}
          <button onClick={handleToggle} type="button" className="btn btn-info">
            Toggle
          </button>
        </div>{" "}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            ref={inputElement}
            style={{ width: "210px", margin: "10px 70px" }}
            className="form-control me-2"
            type="number"
            placeholder="Enter a Number"
          />
          <button
            onClick={handleAdd}
            style={{ width: "100px", height: "38px", margin: "10px 5px" }}
            className="btn btn-outline-success"
          >
            Add
          </button>
          <button
            onClick={handleSub}
            style={{ width: "100px", height: "38px", margin: "10px 0px" }}
            className="btn btn-outline-warning"
          >
            Sub
          </button>
        </div>
      </div>{" "}
    </>
  );
}
