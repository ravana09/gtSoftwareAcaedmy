import React from 'react'

function Button({name}) {
    function handleClick(){
        alert("clicked")
    }
  return (
    <div>B
        <button onClick={handleClick}>{name}</button>
        
    </div>
  )
}

export default Button