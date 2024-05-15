import React from 'react'

function DateObj() {
    const [date, setDate] = React.useState(new Date());
    let todayDate = new Date()
    console.log(todayDate.getDate())
    console.log(todayDate.getFullYear())
    console.log(todayDate.getMonth())
    console.log(todayDate.getDay())
    console.log(todayDate.getHours())
    console.log(todayDate.getMinutes())
    console.log(todayDate.getSeconds())
    console.log(todayDate.setDate(20))
    console.log(todayDate)
    console.log(date)
    let date1 = new Date(date)
    console.log(date1)

  return (
    <div>DateObj
        {todayDate.toDateString()}
        <input type='date' onChange={(e) => {setDate(e.target.value)}} ></input>

    </div>
  )
}

export default DateObj