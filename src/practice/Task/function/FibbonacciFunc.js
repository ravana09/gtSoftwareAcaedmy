import React, { useState } from "react";

function FibbonacciFunc() {
  let [data, setdata] = useState();
  let [result, setResult] = useState();

  let finalData = [];

  // finalData.push(data1);
  // finalData.push(data2)
  // console.log(finalData)

  function fibbonacciFunc() {
    for (let i = 0; i <= data; i++) {
      finalData.push(fib(i));
      // console.log(finalData)
      setResult(finalData.join(","));

      // console.log(data1);
      // console.log(data2);
    }
  }

  function fib(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setdata(e.target.value)} />
      <button onClick={fibbonacciFunc}>click</button>
      <h1>{result}</h1>
    </div>
  );
}

export default FibbonacciFunc;
