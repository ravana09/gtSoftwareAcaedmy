import React from 'react'

function ChildButton({nametag}) {
    function handleClick(){
        alert("clicked")
    }
  return (
    <div>ChildButton
        <button onClick={handleClick}>{nametag}</button>
    </div>
  )
}

export default ChildButton