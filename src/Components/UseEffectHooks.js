import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    const [count, setCount] = React.useState(0)
    const [state,setState] = useState(false)
    useEffect (() => {
        setTimeout(()=>{
            setCount(count + 1)
        })
    },[state])
      
  return (
    <div>UseEffectHooks
        <button onClick={()=>{setState(!state)}}>click</button>
        {count}
        {state.toString()}
    </div>
  )
}

export default UseEffectHooks