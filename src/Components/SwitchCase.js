import React from 'react'

function SwitchCase() {
    let i=434
    switch(i){
        case 1:
            console.log("one")
            break;
            case 2:
                console.log("two")
                break;
                case 3:
                    console.log("three")
                    break;
                default:
                    console.log("invalid input")
                    break;
    }
  return (
    <div>SwitchCase</div>
  )
}

export default SwitchCase