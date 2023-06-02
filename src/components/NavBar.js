import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo-1.png'
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>SIGN IN</Nav.Link>
            <Nav.Link>SIGN UP</Nav.Link>
            <Nav.Link>REGISTER</Nav.Link>
            <Nav.Link>FEED</Nav.Link>
            <Nav.Link>LIKED</Nav.Link>
            <Nav.Link>FOLLOWING</Nav.Link>
            <Nav.Link>ADD POST</Nav.Link>
            <Nav.Link>PROFILE</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
