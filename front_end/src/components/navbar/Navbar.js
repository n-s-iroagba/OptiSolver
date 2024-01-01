import React from 'react';
import './Title.css';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-custom">
     <div> <Navbar.Brand href="#home" className="ms-lg-auto"><Logo /></Navbar.Brand></div>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-lg-auto me-lg-auto">
          <Nav.Link href="/signup">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default BasicExample;
