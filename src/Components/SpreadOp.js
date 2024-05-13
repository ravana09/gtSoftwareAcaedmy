import React from 'react'

function SpreadOp() {
    let a = [5,5,4,3,21,8]
    let b= [5,7,8,4]
    console.log(...a) // spread operator

    let c = [...a,...b]
    console.log(c)


    function sum(...a){  // rest operator
        console.log(a)
        let s=0
        for(let i=0;i<a.length;i++){
            s+=a[i]
    }
    console.log(s)
}
sum(6,7,4,4,32,78)

let spread=[2,234,54,5,6,67];
console.log(...spread);


}

function sum(...sum){
    console.log()
  return (
    <div>SpreadOp</div>
  )
}

export default SpreadOp