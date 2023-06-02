import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo-1.png'
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <NavLink exact to="/" className={styles.NavLink}>
                HOME</NavLink>
              <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
                SIGN IN</NavLink>
              <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
                SIGN UP</NavLink>
              <NavLink to="/register" className={styles.NavLink} activeClassName={styles.Active}>
                REGISTER</NavLink>
              <NavLink to="/add-post" className={styles.NavLink} activeClassName={styles.Active}>
                ADD POST</NavLink>
              <NavLink to="/feed" className={styles.NavLink} activeClassName={styles.Active}>
                FEED</NavLink>
              <NavLink to="/liked" className={styles.NavLink} activeClassName={styles.Active}>
                LIKED</NavLink>
              <NavLink to="/following" className={styles.NavLink} activeClassName={styles.Active}>
                FOLLOWING</NavLink>
              <NavLink to="/profile" className={styles.NavLink} activeClassName={styles.Active}> 
                PROFILE</NavLink>
            </Nav> 
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;