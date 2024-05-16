import React, { useState } from "react";

function RandomNumGameCopy() {
  const [result, setResult] = useState("");
  const [data, setData] = useState("");
  const [computerNum, setComputerNum] = useState(null);
  const [attempts, setAttempts] = useState(0);

  function checkRandom() {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    setComputerNum(randomNum);

    if (parseInt(data) === randomNum) {
      setResult(`Player wins the game after ${attempts + 1} attempts!`);
    } else {
      setAttempts(attempts + 1);
      setResult("Try again");
      setData('')
    }
  }

  return (
    <div>
      <input
        type="number"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder="enter a number bertween 1-10"
      />
      <button
        onClick={() => {
          checkRandom();
        }}
      >
        Play
      </button>
      <div>
        <h1>Computer number: {computerNum}</h1>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default RandomNumGameCopy;
