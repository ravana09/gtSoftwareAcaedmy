import React, { useState } from 'react'

function Multiplication() {

    let [tables,setTeables]=useState();
    let [number,setNumber]=useState();
    let [result,setResult]=useState();


    function multiplication(){

        let multiply=[]
        let givenNumber=parseInt(tables)
        

        for(let i=1;i<=number;i++){
            console.log(tables)
        multiply.push(<div>{`${givenNumber}x ${i} = ${givenNumber*i}`}</div> )
        }
        setResult( multiply)
    }
   

    
  return (
    <div>
        <input type="text" onChange={(e)=>setTeables(e.target.value)} placeholder='Enter your tables '/>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} placeholder='Enter needed number '/>

        <button onClick={multiplication}>Multiply</button>
        <result>{result}</result>
    </div>
  )
}

export default Multiplication