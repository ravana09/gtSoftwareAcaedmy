import React, { useState } from 'react'

function Erroehandling() {
    let [input, setInput] = useState()
    let [result, setResult]= useState()

    function tryCatch(){

    try{
        if(isNaN(input)){
            throw new Error("Please enter a valid number")

        }
        else{
            setResult( input * 2)
        }
    }catch(err){
        console.error("error is fetched",err);
        setResult(err.message)
    }
    finally{
        console.log("This will always run")  // optional 
    }
}

  return (
    <div>Erroehandling
        <input type='text' onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={tryCatch}>Submit</button>
        {result}
    </div>
  )
}

export default Erroehandling
