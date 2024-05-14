import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function Forms() {
    const [radio,setRadio] =useState()
    const[checkbox,setCheckbox] = useState(false)
    function handleChange(e){
        setRadio(e.target.value)
        console.log(radio)
    }

    function handleCheckbox(){
        setCheckbox(!checkbox)
        
    }
    console.log(checkbox)
  return (
    <div>Forms
        
        <Form.Check
        type='radio' 
        label='Male'
        value='Male'
        checked={radio==='Male'}
        onChange={handleChange}
        />
        
        
        <Form.Check
        type='radio'
        label='Female' 
        value='Female'
        checked={radio==='Female'}
        onChange={handleChange}/>

        <Form.Check
        type='checkbox'
        label='remember me'
        onChange={handleCheckbox}/>
        
    </div>
  )
}

export default Forms