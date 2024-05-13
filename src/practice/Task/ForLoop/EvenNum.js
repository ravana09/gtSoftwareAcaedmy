import React, { useState } from 'react'

function EvenNum() {

    let [data,setData]=useState();
    let [result,setResult]=useState();
    // console.log(result)

    function findEven(){
        let number =parseInt(data);
        // console.log(number)
        let r=[]
        for(let i=1;i<=number;i++){
            if(i%2===0){
                console.log(i)
                r.push(<div>{i}</div>)
                
            }
          //  setResult(r.join(' ,'))
            setResult(r)

        }


    }
    // findEven()



  return (
    <div>
        <h1>Even Number</h1>
        <input type='text' onChange={(e)=>setData(e.target.value)}/>
        <button onClick={findEven}>Convert</button>
    <p>{result}</p>

    </div>
  )
}

export default EvenNum