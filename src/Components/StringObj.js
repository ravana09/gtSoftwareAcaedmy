import React from 'react'

function StringObj() {
    const str = "Hello World"
    let s="Welcome"
    console.log(str.length)
    console.log(str.at(-4))  // negative value included
    console.log(str.charAt(6))// only positive
    console.log(str[6]) // only positive
    console.log(str.charCodeAt('H'))
    console.log(str.concat('! ',s))
    console.log(str.includes('o'))
    console.log(str.indexOf('o'))
    console.log(str.lastIndexOf('o'))
    console.log(str.match('o'))
    console.log(str.search('W'))// case sensitive
    console.log(str.slice(0,7))  
    console.log(str.split(' '))
    console.log(str.replace('World','GT')) 
    console.log(str.trim())
    console.log(str.toUpperCase())
    console.log(str.toLowerCase())
    console.log(str.substring(0,6))
    console.log(str.substring(6,0))
    console.log()
  return (
    <div>StringObj</div>
  )
}

export default StringObj