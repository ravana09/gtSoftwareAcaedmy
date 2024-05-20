import React from 'react'

function SumOfDigits() {
    let data=125;
    let givenData=data.toString()
    console.log(givenData.split(''))
    let sum=0;
    for(let i=0;i<givenData.length;i++){
        sum=sum+parseInt(givenData[i])

    }
    console.log(sum)
  return (
    <div>SumOfDigits</div>
  )
}

export default SumOfDigits