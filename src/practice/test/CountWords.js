import React from "react";

function CountWords() {
  let givenWords =
    "ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on large language models (LLMs)";

  let words = givenWords.split(" ");
  //   console.log(words.length);

  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (givenWords[i] === givenWords.length) {
      return;
    } else {
      return count++;
    }
  }

  return <div>CountWords</div>;
}

export default CountWords;
