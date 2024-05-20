import React from 'react'

function ArrayObj() {
    let arr = [3,5,7,8,2]
    let b=[23,45,67]
    console.log(arr.length)
    console.log(arr.at(3))
    console.log(arr.at(-1))
    console.log(arr.concat(b))
    console.log(arr.fill(0,1,3))
    console.log(arr.includes(5))//check the num in the array
    console.log(arr.push(45))
    console.log(arr)
    console.log(arr.pop())
    console.log(arr.shift())
    console.log(arr)
    console.log(arr.unshift(23))
    console.log(arr)
    console.log(arr.reverse())
    console.log(arr.sort())
    console.log(b.sort())
    console.log(b.sort())
    console.log(arr)
    console.log(arr.slice(0,3))
    console.log(arr.toString())
    console.log(arr)
    console.log(arr.splice(1,2))
    console.log(arr)
    console.log(arr.splice(1,2,23,45))
    console.log(arr)
    console.log(arr.splice(1,0,23,45))// starting idex, deletecount, adding elements
    console.log(arr.every((i) => i>=0))
    console.log(arr.some((i)=>i>40))
    console.log(arr.find((i)=>i>40))
    console.log(arr.findIndex((i)=>i>40))
    arr.forEach((i) =>
        console.log(i)

    )

    let x =arr.filter((i) => i>10)
    console.log(x)
    console.log(arr.reduce((a,b)=>a+b))
    console.log(arr.reduce((a,b)=>a+b,10))
    console.log(arr.reduceRight((a,b)=>a+b))
    console.log(arr.reduceRight((a,b)=>a+b,10))
    arr.map(i => 
        console.log(i*2))
        console.log(arr.join(',78'))

    console.log(arr)

  return (
    <div>ArrayObj</div>
  )
}

export default ArrayObj