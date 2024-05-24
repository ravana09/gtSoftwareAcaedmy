import React, { useContext } from 'react'
import { userContext } from './UseContextHook'

function UseContextGrandchild() {
    let user = useContext(userContext)
  return (
    <div>UseContextGrandchild
        {user[0]}
    </div>
  )
}

export default UseContextGrandchild