import React from 'react'
import ChildComp from './ChildComp';

function ParentComp(props) {
    let a =5;
    let x=props.n
  return (
    <div>ParentComp
        {props.n}
        <ChildComp a='data' b={x} c={a}/>
    </div>
  )
}

export default ParentComp