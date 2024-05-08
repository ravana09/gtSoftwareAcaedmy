import React from 'react'

function IfElse() {
    let a=45
    let b=56
    let c =45

    if(a>b){
        console.log("a is greater than b")
    }
    else if(a>c)
    {
        console.log(" a is big")
    }
    else if(b>c){
        console.log("b is big")
    }
    else{
        console.log(" c is big")
    }
  return (
    <div>IfElse</div>
  )
}

export default IfElse