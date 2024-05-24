import React, { useContext } from 'react'
import { details } from './UserContextParent'
import ChildFour from './ChildFour'

function ChildThree() {
  let number =useContext(details)
  return (
    <div>ChildThree
      <h1>The phone number of the person is{number[2]}</h1>
      <ChildFour></ChildFour>
    </div>
  )
}

export default ChildThree