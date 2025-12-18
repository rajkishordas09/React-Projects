import React from "react";
import { useSelector } from "react-redux";
export default function Display() {
  const { counterVal } = useSelector((state) => state.counter);

  return (
    <>
      <p className="lead mb-4">
        Counter Value : <span style={{ fontWeight: "bold" }}>{counterVal}</span>
      </p>{" "}
    </>
  );
}
