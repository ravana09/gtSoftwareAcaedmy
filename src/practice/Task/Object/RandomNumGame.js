import React, { useState } from "react";

function RandomNumGame() {
  let [result, setResult] = useState();
  let [data, setData] = useState();
  let [computerNum, setComputerNum] = useState();
  let [check, setCheck] = useState(false);

  
  function checkRandom() {
    while (!check) {
      let counter = 0;
      let randomNum = Math.floor(Math.random() * 10 + 1);
      setComputerNum(randomNum);

      //   let number = parseInt(data);

      let number = prompt("enter a value the computer value is " + randomNum);
      console.log(number);

      if (number == randomNum) {
        alert("player  wins the game " + counter);
        console.log("player  wins the game " + counter);
        setCheck(true);
      } else {
        counter += 1;
        setData("");
        alert("try again");
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}

        placeholder="Enter a number between 1-10"
      />
      <button
        onClick={() => {
          checkRandom();
        }}
      >
        Play
      </button>
      <div>
        <h1>Computer number :{computerNum}</h1>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default RandomNumGame;
