import React, { useEffect, useState } from 'react'

function UseEffectReturn() {
    let [state,setState]=useState(0)

    useEffect(()=>{
        let intervalId = setInterval(() => {
            setState(prev => prev+1)
        },1000)

        return ()=> {
            clearInterval(intervalId)
        }

    },[])
    
  return (
    <div>UseEffectReturn
        {state}
    </div>
  )
}

export default UseEffectReturn