import React, { useState } from "react";
import { Button } from "react-bootstrap";

function TImeNoon() {
  let [result, setResult] = useState();

  let timeZone = new Date();

  let partOfTime = parseInt(timeZone.getHours());
  let minutesOfTime = parseInt(timeZone.getMinutes());

  function handleTime() {
    if (partOfTime >= 21 || partOfTime <= 5) {
      setResult(
        <div>
            <h1>
          Good night the Time is {partOfTime}hrs and {minutesOfTime} minutes{" "}
          </h1>
        </div>
      );
    } else if (partOfTime <= 9) {
      setResult(
        <div>
            <h1>
          Good Morning the Time is {partOfTime}hrs and {minutesOfTime} minutes{" "}
          </h1>
        </div>
      );
    } else if (partOfTime <= 12) {
      setResult(
        <div>
            <h1>
          Morning the Time is {partOfTime}hrs and {minutesOfTime} minutes{" "}
          </h1>
        </div>
      );
    } else if (partOfTime <= 17) {
      setResult(
        <div>
            <h1>
          Good Afternoon the Time is {partOfTime}hrs and {minutesOfTime} minutes{" "}
          </h1>
        </div>
      );
    } else {
      setResult(
        <div>
            <h1>
          Good Evening the Time is {partOfTime}hrs and {minutesOfTime} minutes{" "}
          </h1>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Time Noon</h1>
      <p>Click the button to know the time</p>
      <Button
        onClick={() => {
          handleTime();
        }}
      >
        Click me{" "}
      </Button>
      {result}
    </div>
  );
}

export default TImeNoon;
