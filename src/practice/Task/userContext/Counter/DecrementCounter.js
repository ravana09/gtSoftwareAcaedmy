import React, { useContext } from "react";
import { counterContex } from "./ParentCounter";

function DecrementCounter() {
  let { operation } = useContext(counterContex);
  return (
    <div>
      <button
        onClick={() => {
          operation("decrement");
        }}
        style={{
          width: 150,
          height: 50,
          backgroundColor: "skyblue",
          boxShadow: "none",
        }}
      >
        Decrement
      </button>
      <div>
      <button
        onClick={() => {
          operation("Reset");
        }}
        style={{
          width: 150,
          height: 50,
          backgroundColor: "skyblue",
          boxShadow: "none",
        }}
      >
        Reset
      </button>
      </div>
    </div>
  );
}

export default DecrementCounter;
