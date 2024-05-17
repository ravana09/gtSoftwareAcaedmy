import React, { useState } from 'react'

function StringObjtask() {
    let[data,setData]=useState({
        capital:"",
        nonCapital:""
    })
    let[result,setResult]=useState()
    let[result1,setresult1]=useState()
    console.log(data.capital)

    function handlechanges(e){
        setData({data ,[e.target.name]:e.target.value})
    }

    function chnageTOCapital(){
        setResult(data.capital.toLocaleUpperCase())

    }
    function chnageTOLower(){
        setresult1(data.nonCapital.toLocaleLowerCase())
    }
  return (
    <div>
        <h1>String Object Task</h1>
        <input type='text' placeholder='Enter a word to change to capital ' onChange={handlechanges} name='capital'/>
        <button onClick={chnageTOCapital}>Change to capital</button><br/>
        <input type='text' placeholder='Enter a word to change to non capital ' onChange={handlechanges} name='nonCapital'/>
        <button onClick={chnageTOLower}>Change to non capital</button>
       <div>{result}</div> 
       <div>{result1}</div> 


    </div>
  )
}

export default StringObjtask