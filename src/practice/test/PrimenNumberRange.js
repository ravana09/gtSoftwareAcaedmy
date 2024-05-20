import React from 'react'

function PrimenNumberRange() {
    let data =20;
    let result = [''];

    for(let i=2;i<=data.length;i++){
        if(data[i]%2===0){
            return
        }else{
            result.push(data[i])
        }
    }
    console.log(result)
  return (
    <div>PrimenNumberRange</div>
  )
}

export default PrimenNumberRange