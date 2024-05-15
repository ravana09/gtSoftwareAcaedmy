import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Tofixed() {
  let [data, setData] = useState({
    input: "",
    decimal: "",
    precision: "",
  });
  let [result, setResult] = useState();

  function handleChanges(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  let givenData = Number( data.input);
  console.log(typeof(givenData))
  let givenDecimal =Number( data.decimal);
  console.log(givenDecimal)
  let givenPrecision = Number( data.precision);
  console.log(givenPrecision)
  function convertToDecimal() {
    setResult("the decimal of value is" + givenData.toFixed(givenDecimal));

  }

  function convertPrecision() {
    setResult("the decimal of value is"+givenData.toPrecision(givenPrecision));
    console.log(givenData.toPrecision(givenPrecision));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a number "
        onChange={handleChanges}
        name="input"
      />
      <input
        type="text"
        placeholder="Enter how much decibel needed "
        onChange={handleChanges}
        name="decimal"
      />
      <input
        type="text"
        placeholder="Enter  how much Precision needed"
        onChange={handleChanges}
        name="precision"
      />
      <Button onClick={convertToDecimal}>Convert to decimal</Button>
      <Button onClick={convertPrecision}>Convert to Precision</Button>
      {result}
    </div>
  );
}

export default Tofixed;
