import React, { useState } from 'react'

function OddEven() {

    let [number,setNumber]=useState();
    let [result,setResult]=useState()

    function oddOrEven(){
        if(number%2===0){
          setResult(`${number} is even`)

        }else{
          setResult(`${number} is odd`)
        }
    }

  return (
    <div>
      <input type="text"  onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={oddOrEven}>Check</button>
      <h1 >{result}</h1>
    </div>
  )
}

export default OddEven