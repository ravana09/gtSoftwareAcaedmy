import React from "react";

function Palindrome() {
  let data = 121;
  let givendata = data.toString().split("");
  let reverse = givendata.reverse();
  if(givendata===reverse){
    console.log("Palindrome")
  }else{
    console.log("Not Palindrome")
  }


//   for (let i = 0; i <= givendata.length; i++) {
//     for (let j = givendata.length; j >= 0; j++) {
//       if (givendata[i] === givendata[j]) {
//         console.log('given data is palindrome')
//       }else{
//         console.log('given data is not palindrome')
//       }
//     }
//   }

  return <div>Palindrome</div>;
}

export default Palindrome;
