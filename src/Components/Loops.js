import React from 'react'

function Loops() {
    let j=0;
    for(let i=1;i<=5;i++){
        console.log(i);
    }

    while(j<5){
        console.log(j)
        j--
    }

    do{
        console.log(j)
        j--
    }while(j>0)

  return (
    <div>Loops</div>
  )
}

export default Loops