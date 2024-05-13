import React from 'react'

function PrimeNo() {
    let n=13

    for(let i=2;i<=n;i++){
        if(n%i==0){
            console.log("not prime")
            return
        }
        else{
            console.log("prime")
        }
    }

  return (
    <div>Prime</div>
  )
}

export default PrimeNo