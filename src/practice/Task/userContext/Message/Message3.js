import React, { useContext, useState } from "react";
import { MessageContext } from "./MessgeParent";

function Message3() {
  let{ gettingdata }= useContext(MessageContext);
  let [messages, setMessage] = useState('')

  function handleMessages3() {
    let givenMessages=messages.trim()
    
      gettingdata(<div>From Messge Three :{givenMessages}</div>);
    
  }

  return (
    <div>
      Message one :
      <input
        type="text"
        placeholder="Meaage from Three"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={handleMessages3} style={{ width: 150, height: 50 }}>
        Add
      </button>
      
    </div>
  );
}

export default Message3;
