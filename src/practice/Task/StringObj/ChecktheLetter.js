import React, { useState } from "react";

function ChecktheLetter() {
  let [data, setData] = useState({
    word: "",
    check: "",
  });
  let [result, setResult] = useState();

  function handleChanges(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function checkTheLetter() {
    let givenWord = data.word.toLocaleLowerCase();
    // givenWord = data.word.split("");
    

    console.log(typeof(givenWord));


    let findLetter = data.check.trim();
    console.log(typeof(findLetter));

 

    let counter = 0;

    for (let i = 0; i <= givenWord.length; i++) {
      if (givenWord[i] === findLetter) {
        counter++;
        console.log(givenWord[i])
        console.log(counter)
        // setResult("The letter is in the word" + counter);
      } 
    }
    if(counter >0){
        setResult("The letter is in the word" + counter);
    }else{
        setResult("The letter is not in the word" );
    }
  }

  return (
    <div>
      <h1>Check the letter</h1>
      <input type="text" onChange={handleChanges} name="word" />
      <input type="text" onChange={handleChanges} name="check" />
      <button onClick={checkTheLetter}>Check</button>
      {result}
    </div>
  );
}

export default ChecktheLetter;
