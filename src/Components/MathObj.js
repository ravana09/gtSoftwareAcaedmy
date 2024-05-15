import React from 'react'

function MathObj() {
    console.log(Math.E)
    console.log(Math.PI)
    console.log(Math.SQRT2)
    console.log(Math.SQRT1_2)
    console.log(Math.abs(-6))
    console.log(Math.ceil(12.1))
    console.log(Math.floor(2.8))
    console.log(Math.round(2.2))
    console.log(Math.sqrt(56))
    console.log(Math.pow(2, 2))
    console.log(Math.min(1, 2, 3, 4, 5))
    console.log(Math.max(3,4,5,7,8))
    console.log(Math.random())
    console.log(Math.floor(Math.random() * 100))
    console.log(Math.floor(Math.random() * 100) + 1)
    console.log(Math.exp(4))
    console.log(Math.log(4))
    



  return (
    <div>MathObj</div>
  )
}

export default MathObj