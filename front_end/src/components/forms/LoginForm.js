import React, {useContext, useState} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { login } from "../../utils/api";
import './forms.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const [signInDetails, setSignInDetails] = useState({
    email: '',
    password: ''
  })
  const [validated,setValidated] = useState(false)
  
  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
   const loginResponse = await login(signInDetails)
    if (loginResponse) {
      navigate('/dashboard');
    }else{
    alert('invalid login email or password')
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignInDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  return (
    <>
    <div className='signup-container'>
      <Form validated={validated} onSubmit={submit}>
        <Form.Group as={Col} lg={6} className="mx-auto">
          <Form.Label className="text-light">email</Form.Label>
          <Form.Control
            type="text"
            placeholder="email"
            value={signInDetails.name}
            onChange={(e) => handleOnChange(e)}
            name="email"
            required />
        </Form.Group>
        <br />
        <Form.Group as={Col} lg={6} className="mx-auto">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            required
            name='password'
            type="password"
            placeholder='password'
            value={signInDetails.password}
            onChange={(e) =>  handleOnChange(e)} />
        </Form.Group>
      </Form>
      </div>
    <div className="signup-button-wrapper">
          <Button className="signup-button" variant="dark" onClick={submit}>
            Login
          </Button>
          </div>
</>
  )
};
export default LoginForm;