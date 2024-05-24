import React, { createContext, useState } from "react";
import Logout from "./Logout";

export let LoginContext = createContext();

function Login() {
  let [data, setData] = useState("");



  let [value, setValue] = useState("login");

  function changesOccured(values) {
    if (values.button) {
      setData(<div>Thank you logout</div>);

      setValue("login");
      
      
      
    } else {
      setData(<div>You have succesfully Logined...welcome {values.name}</div>);
      setValue("logout");
      
      
    }
  }

  return (
    <LoginContext.Provider value={{ changesOccured, value }}>
      <center>
        <div>
          <div
             style={{
                width: 500,
                height: 400,
                color: "white",
                backgroundColor: "skyblue",
                padding: "20px",
                boxSizing: "border-box",
              }}
          >
           
            <h1>{data}</h1>
            <Logout />
          </div>
        </div>
      </center>
    </LoginContext.Provider>
  );
}

export default Login;
