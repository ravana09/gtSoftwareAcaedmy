import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Routing() {
    let navigate = useNavigate()
    function handleClick(){
        navigate('/ifelse')

    }

  return (
    <div>Routing
        <Link to='/parentbutton'>
        <button >navigate</button>
        </Link>
        <Button onClick={handleClick}>click</Button>
        <a href='/ifelse' >Link</a>
    </div>
  )
}

export default Routing