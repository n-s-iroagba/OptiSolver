// SignupForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import './forms.css';
import { signUp } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [signUpDetails, setSignUpDetails] = useState({
    username: null,
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isSignUpDetailsEmpty = () => {
    for (const key in signUpDetails) {
      if (signUpDetails.hasOwnProperty(key) && signUpDetails[key] === null) {
        return true;
      }
    }
    return false;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (isSignUpDetailsEmpty()) {
      alert('Please fill in all fields');
    } else {
      const signupResponse = await signUp(signUpDetails);
      if (signupResponse) {
        navigate('/dashboard');
      }
    }
  };
  

  return (    <>
    <div className="signup-container">
      <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" as={Col} lg={6} className="mx-auto" >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={signUpDetails.username}
            onChange={handleOnChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail" as={Col} lg={6} className="mx-auto">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={signUpDetails.email}
            onChange={handleOnChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPassword" as={Col} lg={6} className="mx-auto">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={signUpDetails.password}
            onChange={handleOnChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formConfirmPassword" as={Col} lg={6} className="mx-auto">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={signUpDetails.confirmPassword}
            onChange={handleOnChange}
          />
        </Form.Group>
        <br/>
        <div className="signup-button-wrapper">
            <Button className="signup-button" variant="dark" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
export default SignupForm;
