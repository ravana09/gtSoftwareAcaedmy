import React, { useContext } from 'react'
import { details } from './UserContextParent'

function ChildFour() {
  let allDeitals=useContext(details)
  return (
    <div>ChildFour
      <h1>all details</h1>
      <h2>
        name:{allDeitals[0]};
        <br/>
        mailid:{allDeitals[1]};
        <br/>
        number:{allDeitals[2]}
        <br/>
        {allDeitals[3]}
      </h2>
    </div>
  )
}

export default ChildFour