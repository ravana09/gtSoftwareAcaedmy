import React, { useState } from "react";

function TipsCalculator() {
  let [data, setData] = useState({
    Bill: 0,
    Tips: 0,
  });

  let [result, setResult] = useState();

  function handleChanges(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleClick() {
    let tip = parseInt((data.Tips / 100) * data.Bill);
    let amount = parseInt(data.Bill);
    let total = amount + tip;
    setResult(`
        Your Bill is ${amount} with ${data.Tips}% of ${tip} tip the total Amount is ${total}  `);
  }

  return (
    <div>
      <h1> Tips Calculator </h1>
      <p>
        {" "}
        Enter the amount of the bill and the percentage of the tip you want to
        leave.{" "}
      </p>
      <input
        type="text"
        placeholder=" Enter  your bill Mount"
        onChange={handleChanges}
        name="Bill"
      />
      <input
        type="text"
        placeholder=" Enter  Your tips Percentage"
        onChange={handleChanges}
        name="Tips"
      />
      <button onClick={handleClick}> Calculate </button>
      {result}
    </div>
  );
}

export default TipsCalculator;
