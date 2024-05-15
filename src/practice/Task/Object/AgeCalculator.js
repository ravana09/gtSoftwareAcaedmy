import React, { useState } from "react";
import { Button } from "react-bootstrap";

function AgeCalculator() {
  let [birthDate, setBirthDate] = useState();
  let currentDate = new Date();

//   let [ageYear, setAgeYear] = useState();
//   let [ageMonth, setAgeMonth] = useState();
//   let [ageDay, setAgeDay] = useState();
  let [result, setResult] = useState(
  );

  let dateOfBirth = new Date(birthDate);
  console.log(dateOfBirth.getMonth())

  function ageCalculate() {
    let year = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let month = currentDate.getMonth() - dateOfBirth.getMonth();
    let day = currentDate.getDate() - dateOfBirth.getDate();

    // setAgeYear(year);

    // console.log(month +"month1")

    if (month < 0) {
      year = year - 1;
      month = 12 + month;
      
    }
    // setAgeMonth(month);

    if (day < 0) {
      month = month - 1;
      day = day + 30;
      
    }
    // setAgeDay(day);

    setResult(<div>Your age is {year} , {month} months and {day} days </div>);
  }

  return (
    <div>
      <h1>Age Calculator</h1>
      <input
        type="date"
        name="birthDate"
        onChange={(e) => {
          setBirthDate(e.target.value);
        }}
      />

      <Button
        onClick={() => {
          ageCalculate();
        }}
      >
        Calculate
      </Button>
      {result}
    </div>
  );
}

export default AgeCalculator;
