import React from "react";
import './auth.css'

import LoginForm from "../../components/forms/LoginForm";

const Login= () => {
  return(
    <div className="signup">
      <div className="header">
        <h1>Login To Gain Access</h1>
      </div>
     < div><LoginForm/></div>
    </div>
  )
  
}
export default Login;