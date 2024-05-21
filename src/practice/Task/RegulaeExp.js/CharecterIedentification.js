import React, { useState } from "react";

function CharecterIedentification() {
  let [data, setData] = useState();
  let [result, setResult] = useState();

  function identify() {
    let small = /^[a-z]$/;
    let capital = /^[A-Z]$/;
    let number = /^[0-9]$/;
    // let special=/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;

    let givenData = data;

    if (small.test(givenData)) {
      setResult(" You have entered a Small letter");
    } else if (capital.test(givenData)) {
      setResult(" You have entered a Capital letter");
    } else if (number.test(givenData)) {
      setResult(" You have entered a Number");
    } else {
      setResult(" You have entered a Special character");
    }
  }
  return (
    <div>
      <h1>Charecter Iedentification</h1>
      <hr />
      <input
        type="text"
        placeholder="Enter a letter "
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={identify}>Check</button>
      {result}
    </div>
  );
}

export default CharecterIedentification;
