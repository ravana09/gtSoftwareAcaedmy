import React, { useState } from 'react'

function FarenToCelcius() {

    let [farenheat,setFarenheat]=useState();
    let [celcius,setCelcius]=useState();
    let [celciusConvert,setCelciusConvert]=useState();
    let[farenheatConvert,setFarenheatConvert]=useState();

    function fToC(){
        setCelciusConvert((farenheat-32)/1.8)

    }

    function cToF(){
        setFarenheatConvert(celcius*1.8+32)
    }
  return (
    <div>
        <h1>Farenheat  to celcius</h1>
        <input type="text" onChange={(e)=>setFarenheat(e.target.value)}/>;
        <button onClick={fToC}>Convert to Celecius</button>
        <h1>celcius is {celciusConvert}</h1>
        <br/>
        <hr/>

        <h1>celecius to fareheat </h1>
        <input type="text" onChange={(e)=>setCelcius(e.target.value)}/>
        <button onClick={cToF}>convert to fareheat</button>
        <h1>fareheat is {farenheatConvert}</h1>


    </div>
  )
}

export default FarenToCelcius