import React, { useState } from "react";

function DataParsingGpt() {
    const [data, setData] = useState("");
    const [result, setResult] = useState([]);
  
    function checkUrl() {
      // Regular expression to match URLs
      const urlPattern = /https?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,5}(\/[A-Za-z0-9.-]*)*/g;
  
      // Regular expression to match dates in DD-MM-YYYY format
      const datePattern = /\b[0-9]{2}-[0-9]{2}-[0-9]{4}\b/g;
  
      // Find all matches for URLs and dates in the data
      const urls = [...data.matchAll(urlPattern)];
      const dates = [...data.matchAll(datePattern)];
  
      // Extract matched strings from the match objects
      const results = {
        urls: urls.map(match => match[0]),
        dates: dates.map(match => match[0])
      };
  
      // Set the results state with the found URLs and dates
      setResult(results);
    }
  
    return (
      <div>
        <h1>Data Parsing</h1>
        <textarea onChange={(e) => setData(e.target.value)} placeholder="Enter text here" rows="10" cols="50" />
        <button onClick={checkUrl}>Check</button>
        <div>
          <h2>Results:</h2>
          <h3>URLs:</h3>
          <ul>
            {result.urls && result.urls.length > 0 ? result.urls.map((url, index) => <li key={index}>{url}</li>) : <li>No URLs found</li>}
          </ul>
          <h3>Dates:</h3>
          <ul>
            {result.dates && result.dates.length > 0 ? result.dates.map((date, index) => <li key={index}>{date}</li>) : <li>No Dates found</li>}
          </ul>
        </div>
      </div>
    );
  }

export default DataParsingGpt