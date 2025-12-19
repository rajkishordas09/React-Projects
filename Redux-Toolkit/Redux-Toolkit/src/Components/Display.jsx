import React from "react";
import { useSelector } from "react-redux";
import Toggle from "./toggle";
export default function Display() {
  const { counterVal } = useSelector((store) => store.counter);
  const privacyToggle = useSelector((store) => store.privacy);
  return (
    <>
      {privacyToggle ? (
        <p className="lead mb-4">
          Counter Value :{" "}
          <span style={{ fontWeight: "bold" }}>{counterVal}</span>
        </p>
      ) : (
        <Toggle />
      )}
    </>
  );
}
