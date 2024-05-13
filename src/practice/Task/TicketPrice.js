import React, { useState } from "react";

function TicketPrice() {
  let [price, setprice] = useState();
  let [result, setResult] = useState();

  function ticketPrice() {
    let data = parseInt(price);
    if(data>100){
        setResult("enter valid age")
        return;
    }
    if (data > 60) {
      setResult(" your ticket price is 400");
    } else if (data >= 50) {
      setResult("your ticket price is 600");
    } else if (data >= 30) {
      setResult("your ticket price is 800");
    } else if (data >= 18) {
      setResult("your ticket price is 1000");
    } else if (data >= 10) {
      setResult("your ticket price is 500");
    } else if (data >= 5) {
      setResult("your ticket price is 200");
    } else if (data >= 3) {
      setResult("your ticket price is 100");
    } else if (data >= 1) {
      setResult("your ticket price is free");
    } else {
      setResult("please enter valid age");
    }
  }

  return (
    <div>
      <h1>Check the ticket Price</h1>
      <p>The Actuall price of the ticket is 1000</p>
      <p>enter your age for discount</p>
      <input
        type="text"
        placeholder="enter your age "
        onChange={(e) => setprice(e.target.value)}
      />
      <button onClick={ticketPrice}>check</button>

      <h1> {result}</h1>
    </div>
  );
}

export default TicketPrice;
