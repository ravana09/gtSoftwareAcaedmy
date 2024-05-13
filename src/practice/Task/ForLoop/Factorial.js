import React, { useState } from 'react'

function Factorial() {

    let[data,setData]=useState();
    let[result,setResult]=useState();


    let num=parseInt(data);

    function Factorial(){
        for(let i=num-1;i>=1;i--){
             console.log(i)
            setResult(num*=i)
        }

    }
    // Factorial()

  return (
    <div>
        <input type='text' onChange={(e)=>setData(e.target.value)}/>
        <button onClick={Factorial}>factorial</button>;
        <h1>factorial of {data} is {result}</h1>


    </div>
  )
}

export default Factorial