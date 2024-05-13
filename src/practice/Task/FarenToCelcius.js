import React, { useState } from "react";

function FarenToCelcius() {
  //   let [farenheat, setFarenheat] = useState();
  //   let [celcius, setCelcius] = useState();
  let [data, setData] = useState();
  let [result, setresult] = useState();

  let [dropdown, setDropdown] = useState();

  function dropdownChange() {
    let number = parseInt(data);
    if (dropdown === "Fahrenheit") {
      console.log(number);
      setresult((data - 32) / 1.8);
    } else {
      console.log(number);
      setresult(data * 1.8 + 32);
    }
  }

  // function fToC(){
  //     setCelciusConvert((farenheat-32)/1.8)

  // }

  // function cToF(){
  //     setFarenheatConvert(celcius*1.8+32)
  // }
  return (
    <div>
      {/* <h1>Farenheat  to celcius</h1>
        <input type="text" onChange={(e)=>setFarenheat(e.target.value)}/>;
        <button onClick={fToC}>Convert to Celecius</button>
        <h1>celcius is {celciusConvert}</h1>
        <br/>
        <hr/>

        <h1>celecius to fareheat </h1>
        <input type="text" onChange={(e)=>setCelcius(e.target.value)}/>
        <button onClick={cToF}>convert to fareheat</button>
        <h1>fareheat is {farenheatConvert}</h1> */}

      <h1>with drop down </h1>
      <select
        onChange={(e) => {
          setDropdown(e.target.value);
        }}
      >
        <option value="Fahrenheit">Farenheat</option>
        <option value="celcius">Celcius</option>
      </select>

      <input type="text" onChange={(e) => setData(e.target.value)} />

      <button onClick={dropdownChange}>Convert</button>
      <h1>result is {result}</h1>
    </div>
  );
}

export default FarenToCelcius;
