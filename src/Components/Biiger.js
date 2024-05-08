import React, { useState } from "react";

function Bigger() {
  let [value1, setValue1] = useState();
  let [value2, setValue2] = useState();
  let [value3, setValue3] = useState();
  let [value4, setValue4] = useState();

  let [result, setResult] = useState();
  console.log(value1,value2,value3,value4)

  function higher() {
    
    if (value1 > value2 && value1 > value3 && value1 > value4) {
        alert('hi')
        console.log(value1)
      setResult(`${value1} is greater `);
    } else if ( value2 > value3 && value2 > value4) {
        alert('hii')
        console.log(value2)
      setResult(`${value2} is greater `);
    } else if ( value3 > value4) {
        alert('hiii')
        console.log(value3)
      setResult(`${value3} is greater `);
    } 
     
    else{
        alert('hiiii')
        console.log(value4)
        setResult(`${value4} is greater `);
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
    </div>
  );
}

export default Bigger;
