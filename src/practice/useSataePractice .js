import React, { useState } from "react";

function UseSataePractice() {
  let [count1, setCount1] = useState();
  let [count2, setCount2] = useState();

  let [result, setResult] = useState();

  function change() {
    if (count1 > count2) {
      setResult("count1 is greater");
    } else if (count2 > count1) {
      setResult("count2 is grater");
    } else if (count1 === count2) {
      setResult("count1 is equal to count2");
    } else if (count1.length == 0 || count2.length == 0) {
      setResult("enter a valid number ");
    }
  }
  return (
    <div>
      <input type="number" onChange={(e) => setCount1(e.target.value)} />
      <input type="number" onChange={(e) => setCount2(e.target.value)} />
      <button onClick={change}>Get results</button>
      <h1>{result}</h1>
    </div>
  );
}

export default UseSataePractice;
