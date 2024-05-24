import React, { useContext, useState } from "react";
import { LoginContext } from "./Login";

function Logout() {
  let { changesOccured, value } = useContext(LoginContext);
  let[name,setname]=useState()

  let [button, setButton] = useState(false);

  function handleChanges() {
    setButton(!button);
    setname(value)

    changesOccured({button,name});
    setname('')
  }

  return (
    <div>
      <center>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter your UserName "
        />
        <button
          style={{ width: 150, height: 50 }}
          onClick={() => {
            handleChanges();
          }}
        >
          {value}
        </button>
      </center>
    </div>
  );
}

export default Logout;
