import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import myImage from '../images/my_image.jpg'; 
function Header() {
  return (
    <>
      <div className='Header'>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
            <img
            src={myImage}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle mr-2"
          />
              <Nav.Link href="#home">Christian Serwelas</Nav.Link>
            </Nav>
            <Nav className="ml-auto"> 
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

   
    </>
    
  );
}

export default Header;
