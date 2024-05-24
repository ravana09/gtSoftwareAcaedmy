import React, { useContext, useState } from "react";
import Message3 from "./Message3";
import { MessageContext } from "./MessgeParent";

function Message2() {

  let{ gettingdata }= useContext(MessageContext);
  
  let [messages, setMessages] = useState("");
  function handleMesage2() {
    let message2=messages.trim()
    
      gettingdata(<div>From Messge Two :{message2}</div>);
     
    
  }

  return (
    <div>
      Message one :
      <input
        type="text"
        placeholder="Meaage from Two"
        onChange={(e) => {
          setMessages(e.target.value);
        }}
      />
      <button onClick={handleMesage2} style={{ width: 150, height: 50 }}>
        Add
      </button>
      <Message3 />
    </div>
  );
}

export default Message2;
