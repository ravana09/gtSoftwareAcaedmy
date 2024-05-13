import React, { useState } from 'react'

function Leapyear() {
    let [data,setData]=useState();
    let [result,setResult]=useState();

    function checkLeapyear(){
        let year=parseInt(data)
        if(((year%4===0)&& (year%100!==0))||(year%400===0)){
            
            setResult("Leap year")

        }else{
            setResult("not a Leap Year")
        }
    }


  return (
    <div>
        <input type="text" onChange={(e)=>setData(e.target.value)}/>
        <button onClick={checkLeapyear}>Check </button>
        <h1>{result}</h1>
    </div>
  )
}

export default Leapyear