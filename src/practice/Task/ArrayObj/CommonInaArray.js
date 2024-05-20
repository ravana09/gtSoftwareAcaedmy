import React, { useState } from "react";

function CommonInaArray() {
  let [data, setData] = useState({
    firstArray: "",
    secondArray: "",
  });

  let [result, setResult] = useState();

  function handleChanges(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }


  let valueOne = data.firstArray.split(",");
  let valueTwo = data.secondArray.split(",");

  function checkTheCommon() {
    let result = [];

    valueOne.forEach((i) => {
      if (valueTwo.includes(i)) {
        result.push(i);
      }
    });
    setResult(result);
  }

  return (
    <div>
      <input type="text " name="firstArray" onChange={handleChanges} />
      <input type="text " name="secondArray" onChange={handleChanges} />
      <button
        onClick={() => {
          checkTheCommon();
        }}
      >
        Check
      </button>
      {result}
    </div>
  );
}

export default CommonInaArray;
