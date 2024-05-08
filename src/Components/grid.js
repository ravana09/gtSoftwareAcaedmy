import React from 'react'

function grid() {
    function hello(){
        alert("hi")
    }
    hello()
  return (
    <div>
        <h1>hello</h1>
        <button onClick={hello}>click</button>
        </div>
  )
    
    
}

export default grid