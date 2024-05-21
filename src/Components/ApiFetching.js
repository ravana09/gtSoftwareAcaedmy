import React, { useEffect, useState } from 'react'

function ApiFetching() {
    let [details,setDetails]= useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setDetails(json))
    },[])
    console.log(details)
  return (
    <div>ApiFetching
        {details.map((i,id) => (
            <li key={id} >{i.name}
            <br />
            {i.username}</li>
            

        ))}
    </div>
  )
}

export default ApiFetching