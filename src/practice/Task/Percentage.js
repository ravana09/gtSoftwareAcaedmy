import React, { useState } from "react";

function Percentage() {
  let [data, setData] = useState();
  let [result, setResult] = useState();

  function checkPercantage() {
    if (data >= 90) {
      setResult("A");
    } else if (data >= 80) {
      setResult("B");
    } else if (data >= 60) {
      setResult("C");
    } else if (data >= 35) {
      setResult("you have passed");
    } else {
      setResult("you have failed ");
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={checkPercantage}>Check the Percentage</button>
      <h1>You are {result} </h1>
    </div>
  );
}

export default Percentage;
