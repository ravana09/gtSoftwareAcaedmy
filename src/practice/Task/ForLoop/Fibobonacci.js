import React, { useState } from "react";

function Fibobonacci() {
  // let [data,setData]=useState();
  // let [result,setResult]=useState();
  // let data = 10;

  // let data1 = 0;
  // let data2 = 1;
  // let result =[]
  // result.push(data1)
  // result.push(data2)

  // for (let i = 0; i <= data; i++) {

  // let a =data1+data2;
  // result.push(a)
  // data1=data2;
  // data2=a;

  // }
  // console.log(result)

  let [data, setData] = useState();
  let [result, setResult] = useState();

  let data1 = 0;
  let data2 = 1;

  let fibArray = [];
  fibArray.push(data1);
  fibArray.push(data2);
  function getFib() {
    for (let i = 2; i <= data; i++) {//we start because we already push 0 and 1 so it start from 2
      let data3 = data1 + data2;
      fibArray.push(data3);
      data1 = data2;
      data2 = data3;
    }
    setResult(fibArray.join(","))
  }

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />;
      <button onClick={getFib}>Fibobonacci</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Fibobonacci;
