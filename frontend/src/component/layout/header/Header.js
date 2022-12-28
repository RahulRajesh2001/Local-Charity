
import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Local Charity</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Donations</Nav.Link>
          <Nav.Link href="/login">Account</Nav.Link>
          <Nav.Link href="#action2">Admin</Nav.Link>         
        

        
        </Nav>

        <Nav.Link href="/search">Search</Nav.Link> 
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
);
  
}

export default Header
