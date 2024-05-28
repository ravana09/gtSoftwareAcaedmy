import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SingleStateCookie() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Set the timeout to show the button after 3 seconds
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set the localStorage and sessionStorage values when the component mounts
    localStorage.setItem("user", "pradeep");
    sessionStorage.setItem("user", "pradeep");
  }, []);

  function acceptCookie() {
    Cookies.set("username", "Pradeep", { expires: 10 });
    alert("accepted");
    setIsShow(false);
  }

  return (
    <div>
      Cookies
      {isShow && <button onClick={acceptCookie}>Accept Cookies</button>}
    </div>
  );
}

export default SingleStateCookie;

