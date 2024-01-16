// NavBar.js

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';  // Import the custom CSS file
import Title from '../title/Title';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" variant='dark'>
      <Navbar.Brand href="#home" className="ms-lg-auto nav-brand"><Title /></Navbar.Brand>
      <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='toggle' id="basic-navbar-nav">
        <Nav className="ms-lg-auto me-lg-auto">
          <Nav.Link className="nav-text" href="/signup">Register</Nav.Link>
          <Nav.Link className="nav-text" href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

