import React, { useState } from "react";

function MonthlyLoan() {
  const [input, setInput] = useState({
    amount: "",
    interest: "",
    month: "",
  });
  const [result, setResult] = useState();

  function calculateInterest() {
    const p = parseFloat(input.amount);
    let giveninterst = parseFloat(input.interest);

    const r = parseFloat(input.interest) / 100 / 12;
    const n = parseFloat(input.month);

    const monthlyEMI = (p * r) / (1 - Math.pow(1 + r, -n)); // Calculate monthly EMI
    const totalInterest = monthlyEMI * n - p; // Calculate total interest
    const totalAmount = p + totalInterest; // Calculate total amount to be paid
    // const interest = (p * (r * 0.01)) / n; // Calculate interest per month

    setResult(
      <div>
        <div> Your loan amount is {p},</div>
        <div> Your total loan amount is {totalAmount.toFixed(2)},</div>

        <div>Your interest rate is {giveninterst}%,</div>
        <div> Your total interest is {totalInterest.toFixed(2)},</div>
        <div> Your monthly EMI is {monthlyEMI.toFixed(2)}</div>
      </div>
    ); // Set the result to two decimal places
  }

  function handleSubmit(e) {
    e.preventDefault();
    calculateInterest();
  }

  function handleChanges(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Loan Amount:</label>
          <input
            type="text"
            id="amount"
            onChange={handleChanges}
            name="amount"
            placeholder="Enter your loan Amount"
          />
        </div>
        <div>
          <label htmlFor="interest">Interest Rate (%):</label>
          <input
            type="text"
            id="interest"
            onChange={handleChanges}
            name="interest"
            placeholder="Enter your loan interset"
          />
        </div>
        <div>
          <label htmlFor="month">Number of Months:</label>
          <input
            type="text"
            id="month"
            onChange={handleChanges}
            name="month"
            placeholder="Enter your loan duration in months
          "
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default MonthlyLoan;
