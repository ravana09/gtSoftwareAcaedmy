import React, { useContext, useState } from "react";
import { MessageContext } from "./MessgeParent";
import Message2 from "./Message2";

function Messag1() {
  let { gettingdata } = useContext(MessageContext);
  let [messages, setMessages] = useState("");
  function handlehznges() {
    let message1=messages.trim()
    
      gettingdata(<div>From Messge one :{message1}</div> );
    
  }

  return (
    <div>
      Message one :
      <input
        type="text"
        placeholder="Meaage from one"
        onChange={(e) => {
          setMessages(e.target.value);
        }}
      />
      <button onClick={handlehznges} style={{width:150,height:50}}>Add</button>
      <Message2/>
    </div>
  );
}

export default Messag1;
