import React, { useState } from 'react'

function Calculator() {
    let [value1,setvalue1]=useState();
    let [value2,setvalue2]=useState();
    let [result,setresult]=useState();
    let[operators,setOperators]=useState()

    function calculate(){
        let a=parseInt(value1);
        let b=parseInt(value2)
        switch(operators){
        case "+":
            console.log(operators)
            console.log(a,b)
            console.log(a+b)
            setresult(a+b)
            break;
            case "-":
                setresult(a-b)
                break;
                case"*":
                setresult(a*b)
                break;
                case"/":
                setresult(a/b)
                break;
                case "%":
                    setresult(a%b)
                    break;
                    default:
                        setresult(0)

        

        }
    }



  return (
    <div>
        <h1>Caluculator</h1>
        <hr></hr>

        <input type='text'  onChange={(e)=>setvalue1(e.target.value)}/>
        <input type="text" onChange={(e)=>setOperators(e.target.value)}/>
        <input type='text' onChange={(e)=> setvalue2(e.target.value)}/>
     

        {/* <button onClick={setOperators}>+</button> */}
        {/* <button onClick={setOperators}>-</button>
        <button onClick={setOperators}>*</button>
        <button onClick={setOperators}>/</button>
        <button onClick={setOperators}>%</button> */}
        <button onClick={calculate}>Calculate</button>
        <h1>Result is {result}</h1>
        <hr></hr>
    

    </div>
  )
}

export default Calculator