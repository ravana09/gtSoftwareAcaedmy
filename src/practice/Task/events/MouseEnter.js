import React, { useState } from 'react'

function MouseEnter() {
    const [result,setResult]=useState();

    function handleEnter(){
        setResult(<h1>Mouse Entered</h1>)
        console.log("mouse entered")
    }

    function handleLeave(){
        setResult(<h1>Mouse leave</h1>)
        console.log("mouse ")
    }
  return (
    <div>
        <div>
        <h1 onMouseDown={handleEnter} onMouseUp={handleLeave} style={{backgroundColor:"skyblue"
        }}>Change to left</h1>

           
        </div>
        {result}
    </div>
  )
}

export default MouseEnter