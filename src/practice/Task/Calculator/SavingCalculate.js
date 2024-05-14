import React, { useState } from "react";

function SavingCalculate() {
  let [data, setdata] = useState({
    amount: "",
    month: "",
  });
  let [result, setresult] = useState("");

  function calculateSavings(){
    let amount = parseInt( data.amount);
    let month =  parseInt(data.month);

    let monthlySavings=amount/month;
    setresult( `Your Monthly Savings must be ${monthlySavings}` )

  }

  function handleSubmit(e){
    e.preventDefault();
    calculateSavings();



  }

  function handleChanges(e) {
    setdata({...data,[e.target.name]:e.target.value});
    console.log(data);
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Total savings amount</label>
          <input
            type="text"
            id="amount"
            onChange={handleChanges}
            name="amount"
          />
        </div>
        {/* <div>
          <label htmlFor="interest">Interest</label>
          <input
            type="text"
            id="interest"
            onChange={handleChanges}
            name="interest"
          />
        </div> */}
        <div>
          <label htmlFor="month">Months</label>
          <input type="text" id="month" onChange={handleChanges} name="month" />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default SavingCalculate;
