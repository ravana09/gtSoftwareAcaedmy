import React from "react";

function RegularExp() {
  let p = /[asas]/gi;
  let str = "ghta";
  console.log(p.test(str));
  console.log(p.exec(str));
  console.log(str.search(p));
  console.log(str.match(p));
  console.log(str.replace(str, p));
  let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  console.log(email.test("abc7676@gmail.com")); 

  return <div>RegularExp</div>;
}

export default RegularExp;
