import React, { createContext } from "react";
import ChildOne from "./ChildOne";

export const details = createContext();//convert details to detailsContext

function UserContextParent() {
  let name = "pradeep";
  let mailId = "email@gmail.com";
  let number = 3698521470;

  function allDetails(){
   return(
   
   <div>
  
  <br/>
    <h2>From function</h2>
   <h1>his name is {name }</h1> 
   <h1>his mail id  is {mailId }</h1> 
   <h1>his number is {number }</h1> 

   </div>
   )

  }

  return (
    <details.Provider value={[ name, mailId, number ,allDetails()]}>
      <div>
        UserContextParent
        <ChildOne />
      </div>
    </details.Provider>
  );
}

export default UserContextParent;
