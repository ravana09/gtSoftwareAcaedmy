import React, { useState } from 'react'

function MultiMultiplication() {
    let [data,setData]=useState();
    let [result,setResult]=useState();


   

    function mulMultipleTables(){
        let tables=[];
        for(let i=1;i<=data;i++){
            // console.log(i);
            for(let j=1;j<=10;j++){
                
                tables.push(<div>{`${j} X ${i}=${i*j}`}</div>)

            }
            tables.push(<br/>)
            
        setResult(tables);
        
        }
        

    

    }
//  let a =3

//     let b=[]

//     for(let j=1;j<=a;j++){
     //  b.push(i)
    
  // let c = console.log(b.join(" "));


//    for(let i=1;i<=10;i++){
//     b.push( ` ${i} X ${j}=${i*j}`)
//    }
//    console.log(b)
//     }
return (
    <div>
        <input type='text' onChange={(e)=>setData(e.target.value)} />
        <button onClick={mulMultipleTables}>convert</button>
        <h5>{result}</h5>
        
    </div>
  )

}

   
   



 


export default MultiMultiplication