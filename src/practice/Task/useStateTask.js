import React, { useState } from "react";

function UseStateTask() {
  let [value1, setValue1] = useState();
  let [value2, setValue2] = useState();
  let [value3, setValue3] = useState();
  let [value4, setValue4] = useState();

  let [result, setResult] = useState();

  function higher() {
    let a = parseInt(value1);
    let b = parseInt(value2);
    let c = parseInt(value3);
    let d = parseInt(value4);

    if (a > b && a > c && a > d) {
      setResult(`${a} is greater `);
    } else if (b > c && b > d) {
      setResult(`${b} is greater `);
    } else if (c > d) {
      setResult(`${c} is greater `);
    } else {
      setResult(`${d} is greater `);
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setValue1(e.target.value)} />
      <input type="text" onChange={(e) => setValue2(e.target.value)} />
      <input type="text " onChange={(e) => setValue3(e.target.value)} />

      <input type="text" onChange={(e) => setValue4(e.target.value)} />

      <button onClick={higher}>Get Results</button>
      <p style={{ color: "red", fontSize: "larger" }}>{result}</p>

      <br/>
      <hr/>
    </div>
  );
}

export default UseStateTask;
