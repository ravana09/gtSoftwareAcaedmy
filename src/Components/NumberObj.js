import React from 'react'

function NumberObj() {
    let n=34.3535
    let x=true
    console.log(Number.EPSILON)
    console.log(Number.MAX_VALUE)
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_VALUE)
    console.log(Number.NEGATIVE_INFINITY)
    console.log(Number.NaN)
    console.log(Number.POSITIVE_INFINITY)// properties
    console.log(n.toExponential())
    console.log(n.toFixed(2))
    console.log(n.toPrecision(3))
    console.log(n.toLocaleString())
    console.log(n.valueOf())
    console.log(n.toString())
    console.log(x.toString())
    console.log(x.valueOf())// 



  return (
    <div>NumberObj</div>
  )
}

export default NumberObj