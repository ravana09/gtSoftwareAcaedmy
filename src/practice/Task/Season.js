import React, { useState } from 'react'

function Season() {

    let [data,setData]=useState('');
    let[result,setResult]=useState();

    function climate(){
        switch(data.toLowerCase()){
            case 'january':
                setResult("winter")
                break;
                case "February":
                    setResult("Spring")
                break;
                case "March":
                    setResult("Spring")
                break;
                case "April":
                    setResult("Summer")
                break;
                case "May":
                    setResult("Summer")
                break;
                case "June":
                    setResult("Summer")
                break;
                case "July":
                    setResult("Monsoon")
                break;
                case "August":
                    setResult("Monsoon")
                break;
                case "September":
                    setResult("Monsoon")
                break;
                case "October":
                    setResult("Monsoon")
                break;
                case "November":
                    setResult("Monsoon")
                break;
                case "December":
                    setResult("Winter")
                break;
                default:
                    setResult("Enter a valid month name ")
                break;
            }







        }
   

  return (
    <div>
        <input type="text" onChange={(e)=>setData(e.target.value)}/>
        <button onClick={climate}>Search</button>
        <h1>{result}</h1>
    </div>
  )
}

export default Season