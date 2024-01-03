import React from "react";
import './auth.css'

import SignupForm from "../../components/forms/SignUpForm";

const SignUp= () => {
  return(
    <div className="signup">
      <div className="header">
        <h1>Sign Up To Gain Access</h1>
      </div>
     < div><SignupForm/></div>
    </div>
  )
  
}
export default SignUp;


