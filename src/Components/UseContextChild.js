import React, { useContext } from 'react'
import UseContextGrandchild from './UseContextGrandchild'
import { userContext } from './UseContextHook'

function UseContextChild() {
    let age = useContext(userContext)
  return (
    <div>UseContextChild
        {age[1]}
        <UseContextGrandchild />
    </div>
  )
}

export default UseContextChild