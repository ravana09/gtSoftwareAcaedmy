import React from 'react'

function ObjectExample() {
    let n=[5767]
    
    let details={
        name:"Rajesh",
        age:25,
        12:1000,
        address:{
            city:"Bangalore",
            state:"Karnataka",

            
        },
        hobbies:["Cricket","Football","Chess"]
    }
    delete details.age

    console.log(details)


    let info = new Object()
    info.name = "Rajesh"
    info.age = 25
    console.log(info)
  return (
    <div>ObjectExample
        {details.name}
        {details.address.city}
        {details.hobbies[0]}
        {details['age']}
        {details['12']}

    </div>
  )
}

export default ObjectExample