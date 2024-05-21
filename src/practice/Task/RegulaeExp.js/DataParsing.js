import React, { useState } from "react";

function DataParsing() {
  let [data, setData] = useState('');
  let [result, setResult] = useState();
  let [dateResult,setdateResult]=useState()
 

  function checkUrl() {
    // let url =  /https?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,5}(\/[A-Za-z0-9.-]*)*/g;
    let url =  /https?:\/\/[A-Za-z0-9.-]+/g;

    let date =  /\b[0-9]{2}-[0-9]{2}-[0-9]{4}\b/g;
    

    let givenData = data;
    let urlGiven = givenData.match(url);
    let dateGiven = givenData.match(date);
    console.log(urlGiven);
    console.log(dateGiven);

    setResult(urlGiven);
    setdateResult(dateGiven);
    console.log(result)
    console.log(dateResult)
  }
  return (
    <div>
      DataParsing
      <input type="textarea" onChange={(e) => setData(e.target.value)} />
      <button onClick={checkUrl}>Check</button>
      {result}
      {dateResult}
    </div>
  );
}

export default DataParsing;
