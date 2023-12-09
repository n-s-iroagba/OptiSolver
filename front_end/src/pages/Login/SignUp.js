import React, {useContext, useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import '../pages.css'
import { MatrixContext } from "../../features/solve_simplex/context/SimplexContext";
import { signUp } from "../../utils/api";
import { loadUserName } from "../../utils/initialize/actions";


const SignUp= () => {
  const navigate = useNavigate()
  const {details,setDetails} = useContext(MatrixContext)
  const [validated,setValidated] = useState(false)

  useEffect(()=>{
    const storedUsername = localStorage.getItem('optiusername');
    if(storedUsername!==null){
    let tempDetails= {...details}
    tempDetails.username = storedUsername
    setDetails(tempDetails)
    }
    const storedUseremail = localStorage.getItem('optiuseremail');
    if(storedUseremail!==null){
    let tempDetails= {...details}
    tempDetails.email = storedUseremail
    setDetails(tempDetails)
    }
    const storedPassword = localStorage.getItem('optiuserpassword');
    if(storedPassword!==null){
    let tempDetails= {...details}
    tempDetails.password = storedPassword
    setDetails(tempDetails)
    }
  },[])

  const register = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const response = await signUp(details)
     console.log(response.status)
    if (response.status===200){

        localStorage.setItem('optiUserToken',response.data.token)
        localStorage.setItem('optiUserId',response.data.id)
        navigate('/welcome')
    }
  };

  const handleChangeName = (e) => {
    const newUsername = e.target.value;
    setDetails((prev) => {
      const tempDetails = { ...prev, username: newUsername };
      return tempDetails;
    });
    localStorage.setItem('optiusername', newUsername);
  };
  
  const handleChangeEmail = async (e) => {
    // Use the updated state after await
    await setDetails((prevDetails) => {
      const newDetails = { ...prevDetails, email: e.target.value };
      localStorage.setItem('optiuseremail', newDetails.email);
      return newDetails;
    });
  };
  
  const handleChangePassword = async (e) => {
    // Use the updated state after await
    await setDetails((prevDetails) => {
      const newDetails = { ...prevDetails, password: e.target.value };
      localStorage.setItem('optiuserpassword', newDetails.password);
      return newDetails;
    });
  };
  
  
  
  return (
    <div className='solve-entry-wrapper'>
      <Form style={{ width: '50vw' }} validated={validated} onSubmit={register} >
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light"><h2>To Access OptiSolver Kindly Register</h2></Form.Label>
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            value={details.username}
            onChange={(e) => handleChangeName(e)}
            name="name"
            required
          />
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
         <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={details.email}
            onChange={(e) => handleChangeEmail(e)}
            name="name"
            required
          />
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder='password'
            value={details.password}
            onChange={(e) => handleChangePassword(e)}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Proceed
        </Button>
      </Form>
    </div>

  )
};
export default SignUp;