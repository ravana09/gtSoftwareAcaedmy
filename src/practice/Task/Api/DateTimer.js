import React, { useEffect, useState } from "react";

function DateTimer() {
  let [date, setDate] = useState();

  // let time=+new Date();
  // date=+new Date(date);

  // console.log(time)

  let [result, setresult] = useState();

  function timer() {
    let time = +new Date();
    date = +new Date(date); //milliseconds
    let result = date - time; //ans in mill
    let seconds = (result / 1000) % 60;
    let minutes = (result / 1000 / 60) % 60;
    let hours = (result / 1000 / 60 / 60) % 24;
    let days = (result / 1000 / 60 / 60 / 24) % 365;
    console.log(seconds);

    setresult(
      `Time remaining: ${Math.floor(days)} days  ${Math.floor(
        hours
      )} hours  ${Math.floor(minutes)} minutes  ${Math.floor(seconds)} seconds`
    );
  }

  useEffect(() => {
    let dateTimer = setInterval(() => {
      if (date) {
        timer();
      }
    }, 1000);
    return () => {
      clearInterval(dateTimer);
    };
  }, [date]);

  return (
    <div>
      <h1>Date Timer</h1>
      <input
        type="datetime-local"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

      {result}
    </div>
  );
}

export default DateTimer;
