import React from "react";

export default function EmptyPost({}) {
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          Empty...
        </h1>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <button
          onClick={handleFetchData}
          style={{
            color: "blue",

            borderRadius: "20px",
          }}
        >
          Fetch Data from Server
        </button>
      </div> */}
    </>
  );
}
