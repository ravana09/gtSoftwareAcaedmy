import React, { useState } from 'react'

function Replace() {
    let[data,setData]=useState({
        word:'',
        findWord:'',
        replaceWord:'',
    });

    let[result,setResult]=useState();


    function handlechanges(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function replaceWord(){
        let newWord=data.word
        newWord=newWord
        .replace(data.findWord,data.replaceWord)
        console.log(data)
        setResult(newWord)
    }


    // console.log(str.replace('World','GT')) 


  return (
    <div>
        <input type='text' placeholder='Enter a word ' name='word' onChange={handlechanges}/><br/>
        <input type='text' placeholder='Enter a replace word  ' name='findWord' onChange={handlechanges}/><br/>
        <input type='text' placeholder='Enter a replacing word  ' name='replaceWord' onChange={handlechanges}/><br/>
        <button onClick={replaceWord}>replace</button>
        {result}
    </div>
  )
}

export default Replace