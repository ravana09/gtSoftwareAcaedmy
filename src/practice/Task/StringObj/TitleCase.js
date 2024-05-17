import React, { useState } from "react";
import { Button } from "react-bootstrap";

function TitleCase() {  
  let [datas, setData] = useState("");
  //convert datas to data for single line
//   let [data,setData]=useState()


  let [result, setResult] = useState();

  function convertToTitleCase() {
    // for single line
    // method 1
    // setResult(data.replace(data.charAt(0), data.charAt(0).toUpperCase()));

    // method 2
    // let titleCase = data.split("");

    // let word = titleCase[0].toLocaleUpperCase();
    // titleCase = titleCase.slice(1).join('');
    // setResult(word + titleCase);
    // setResult(word.concat(titleCase))

    //for multi line
    // let titleCase = data.split('.');
    // console.log(titleCase)

    // let finalLine = "";
    // console.log(titleCase.length);
    // for (let i = 0; i <= titleCase.length; i++) {
    //     console.log(titleCase[i])
    //   let word = titleCase[i][0].toLocaleUpperCase();
    //   titleCase = titleCase[i].slice(1);

    //   let line = word.concat(titleCase);
    //   console.log(line)
    // //   finalLine.push(line);
    // }
    // console.log(finalLine);

    //from chatgpt
    let data = datas

    // Split the data into sentences using the period (.)
    let titleCase = data.split(".");

    // Initialize an empty string to store the final result
    let finalLine = "";

    // Loop through each sentence
    for (let i = 0; i < titleCase.length; i++) {
      // Trim leading and trailing white spaces from the sentence
      let sentence = titleCase[i].trim();
      if (sentence) {
        // Ensure the sentence is not empty
        // Convert the first character to uppercase and concatenate with the rest of the sentence
        let word = sentence[0].toLocaleUpperCase() + sentence.slice(1);

        // Append the formatted sentence to finalLine with a period and space
        finalLine += word + ". ";
      }
    }

    // Trim the finalLine to remove the trailing space
    finalLine = finalLine.trim();

    setResult(finalLine);
  }

  return (
    <div>
      <h1>TitleCase</h1>

      <input
        type="text"
        placeholder="Enter your paragraph"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          convertToTitleCase();
        }}
      >
        Change
      </Button>

      {result}
    </div>
  );
}

export default TitleCase;
