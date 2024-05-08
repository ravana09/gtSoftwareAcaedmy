import React, { useState } from 'react'

function UseState() {
    let [count, setCount] = useState(0)
    let [input, setInput] = useState()
    let [result, setResult]=useState()
    function check(){
      if(input==count){
            setResult("Correct")
        }
        else{
            setResult("Wrong")
        }

    }
  return (
    <div>UseState
      <input type='text' onChange={(e) => setCount(e.target.value)} />
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <button onClick={check}>Check</button>
      <h1>{result}</h1> 
    </div>
  )
}

export default UseState 