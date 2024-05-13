import React, { useState } from 'react'

function Vowelstask() {
    let [data,setdata]=useState();
    let[result,setResult]=useState();

    function checkVowels(){
        // switch(data){
        //     case "a" || "A":
        //         setResult("a is a vowel")
        //         break;
        //         case "e":
        //         setResult("e is a vowel")
        //         break;
        //         case "i":
        //             setResult("i is a vowel")
        //             break;
        //             case "o":
        //                 setResult("o is a vowel")
        //                 break;
        //                 case "u":
        //                     setResult("u is a vowel")
        //                     break;

        //                     default:
        //                         setResult( `${data}  is not a vowel`)

        // }

        if(data==="a"|| data==="A"){
            setResult(`${data} is a vowel`)
        } else if ((data==="e")|| (data==="E")){
            setResult(`${data} is a vowel`)
        } else if ((data==="i")||(data==="I")){
            setResult(`${data} is a vowel`)
        } else if ((data==="o")||(data==="O")){
            setResult(`${data} is a vowel`)
        } else if ((data==="u")||(data==="u")){
            setResult(`${data} is a vowel`)
        }else {
            setResult(`${data} is not a vowel`)
        }
    }




  return (
    <div>
        <h1>check the Vowels</h1>
        <input type="text" placeholder='enter a  alphabet' onChange={(e)=>setdata(e.target.value)} />
        <button onClick={checkVowels}>submit</button>
        <h1>{result}</h1>
        <br/>
        <hr/>
    </div>
  )
}

export default Vowelstask