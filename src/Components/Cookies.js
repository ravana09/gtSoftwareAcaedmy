import React from 'react'
import Cookies from 'js-cookie'

function CookiesExample() {

    function acceptCookie(){
        Cookies.set("username","Pradeep",{expires:10})
        alert("accepted")
    }

    localStorage.setItem("user","pradeep")
    sessionStorage.setItem("user","pradeep")



  return (
    <div>Cookies
        <button onClick={acceptCookie}>acceptCookie</button>
        {localStorage.getItem("user")}
    </div>
  )
}

export default CookiesExample