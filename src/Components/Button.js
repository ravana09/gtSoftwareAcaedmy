import React from 'react'

function Button({nameTag}) {
    function handleClick(){
        alert("clicked")
    }
  return (
    <div>B
        <button onClick={handleClick}>{nameTag}</button>
        
    </div>
  )
}

export default Button