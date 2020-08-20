import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, Nav,} from 'react-bootstrap'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarCustom() {
  return (<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/Portfolio">Joanny's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavbarCustom;
