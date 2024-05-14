import React from 'react'
import Button from './Button'

function ChildToParent({onClick}) {

  return (
    <div>ChildToParent
        
        <Button onData={onClick} name='click'>

        </Button>
    </div>
  )
}

export default ChildToParent