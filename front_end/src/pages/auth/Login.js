import React, {useContext, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import '../pages.css'
import { MatrixContext } from "../../context/SimplexContext";
import { login } from "../../utils/api";


const Login = () => {
  const navigate = useNavigate()
  const {details,setDetails} = useContext(MatrixContext)
  const [validated,setValidated] = useState(false)
  
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    login(details)
    navigate('/welcome')
  };



  const handleChangeName = async (e) => {
    let tempDetails= { ...details}
    tempDetails.username = e.target.value
    await setDetails(tempDetails)
  }
  const handleChangePassword= async (e) => {
    let tempDetails= { ...details}
    tempDetails.password = e.target.value
    await setDetails(tempDetails)
  }
 

  return (
    <div className='solve-entry-wrapper'>
      <Form style={{ width: '50vw' }} validated={validated} onSubmit={submit} >
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light"><h2>To Access OptiSolver Please Login</h2></Form.Label>
        </Form.Group>
        <br />
        <Form.Group
          as={Col}
        >
          <Form.Label className="text-light">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            value={details.name}
            onChange={(e) => handleChangeName(e)}
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
export default Login;