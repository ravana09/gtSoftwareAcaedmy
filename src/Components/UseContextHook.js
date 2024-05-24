import React, { createContext } from 'react'
import UseContextChild from './UseContextChild'

export const userContext = createContext()

function UseContextHook() {
    let user = 'pradeep'
    let age = 34
  return (
    <userContext.Provider value={[user,age]}>    

        <div>UseContextHook</div>
        <UseContextChild />
    </userContext.Provider>

  )
}

export default UseContextHook