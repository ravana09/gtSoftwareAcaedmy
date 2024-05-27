import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CookiesButton() {
  let [data, setdata] = useState();
  let [isShow, setIsshow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setdata(
        <div>
          <button onClick={acceptCookie}>Cookies </button>
        </div>
      );
    }, 3000);
  }, []);

  function acceptCookie() {
    Cookies.set("username", "Pradeep", { expires: 10 });
    alert("accepted");
    setIsshow(true)
  }

  localStorage.setItem("user", "pradeep");
  sessionStorage.setItem("user", "pradeep");

  return (
    <div>
      Cookies {!isShow? (data):''}
      {/* {localStorage.getItem("user")} */}
    </div>
  );
}
export default CookiesButton;
