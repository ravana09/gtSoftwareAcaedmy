import React from 'react'

function Logical() {
    let a =10
    let b=20

    console.log(a+=b)
    console.log(a)
    let R = (a>b)?"a is big":"a is small"
    console.log(R)

    let active = true
    let x=2
    let y=1
    console.log(x&y)
    console.log(x|y)

    console.log(~(x))

    console.log("bitwise ")

    console.log(x<<y)




  return (
    
    <div>Logical
        {active && <button >inactive</button>}
        {!active && <button >active</button>}

    </div>
  )
}

export default Logical