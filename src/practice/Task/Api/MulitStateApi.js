import React, { useEffect, useState } from "react";

function MulitStateApi() {
  const [result, setResult] = useState("");
  const [datas, setData] = useState("products");

  function handleChanges(e) {
    setData(e.target.value);
  }
  console.log(datas);

  useEffect(() => {
    if (datas) {
      fetch(`https://dummyjson.com/${datas}`)
        .then((res) => res.json())
        .then((res) => {
         setResult((res[datas]));

          console.log(res[datas])
        });
    }
  },[datas]);

  return (
    <div>
      <h1>Multi State Api</h1>
      <select onChange={handleChanges}>
        <option value="">Select an option</option>
        <option value="carts">carts</option>
        <option value="quotes">quotes</option>
        <option value="recipes">recipes</option>
        <option value="posts">posts</option>
      </select>
      {result && result.map((i,id)=>(
        <pre key={id}>
            {JSON.stringify(i)}
        </pre>
        
      ))}
      {/* <pre>{result}</pre> */}
    </div>
  );
}

export default MulitStateApi;
