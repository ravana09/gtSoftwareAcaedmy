import React, { useState } from "react";

function Prime() {
  let [data, setData] = useState();
  let [result, setResult] = useState();

  function findPrime() {
    let count = 0;
    let isPrime = parseInt(data);

    for (let i = 1; i <= data; i++) {
      if (isPrime % i === 0) {
        count++;
      }

      if (count == 2) {
        setResult(`${isPrime} is a prime numner `);
      } else {
        setResult(`${isPrime} is a  not prime numner `);
      }
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />;
      <button onClick={findPrime}>check</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Prime;
