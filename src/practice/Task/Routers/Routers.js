import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Routers() {
    let navigate=useNavigate();
    function handleChanges(){
        
        navigate('/MonthlyEmiCalculator')
    }
  return (
    <div>
        <Link to="/BmiCalculator">
        <button>BMI Calculator</button>
        </Link>
        <Button onClick={handleChanges}>Emi Calculator</Button>
        <a href='SavingCalculator'>Saving Calculator</a>
        
        <Link to="/FormTask">
        <button>Form Task</button>
        </Link>
        <Link to="/TipCalculator">
        <button>Tip Calculator</button>
        </Link>

    </div>
  )
}

export default Routers