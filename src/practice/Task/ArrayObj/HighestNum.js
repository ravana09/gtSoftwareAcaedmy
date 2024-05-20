import React, { useState } from "react";

function HighestNum() {
  let [data, setdata] = useState(0);
  let [result, setresult] = useState();

  function calculateHighest() {
    // let givenData=[1,9,23,35,46,8];
    // console.log(typeof(givenData))

    // let final=givenData.sort()
    // console.log(givenData.sort((a,b) => a-b))

    let givenData = data.split(",");
    givenData = givenData.map((givenData) => parseInt(givenData));
    console.log(givenData);
    let final = givenData.sort((a, b) => a - b);
    let indexValue = final.length - 1;
    setresult(
      <div>
        <p>
          The largest number is
          <span>
            <h1>{final.at(indexValue)}</h1>
          </span>
        </p>
      </div>
    );
  }
  return (
    <div>
      HighestNum
      <input
        type="text"
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      <button
        onClick={() => {
          calculateHighest();
        }}
      >
        Check the heighest
      </button>
      {result}
    </div>
  );
}

export default HighestNum;
