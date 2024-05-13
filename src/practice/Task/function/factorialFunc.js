import React, { useState } from 'react'

function FactorialFunc() {
    // let [data,setData]=useState();
    // let [result,setResult]=useState();
// let data =5
//     let number =parseInt(data)


    function factorial(number){
     if(number===0 || number===1){
        return 1
     }else{
        console.log(number*factorial(number-1))
        return number*factorial(number-1)
     }
    }
   let result= factorial(5);
   console.log(result)

  return (
    <div>
FactorialFunc
    </div>
  )
}

export default FactorialFunc