import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo-1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
// import { CurrentUserContext } from "../App";
import { useCurrentUser } from "../contexts/CurrentUserContexts";
import { Avatar } from "./Avatar";

const NavBar = () => {
  // Get current logged-in data
  const currentUser = useCurrentUser();

  // Conditional NavBar links
  const addPostLink = (
    <>
      <NavLink
        to="/posts/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        ADD POST
      </NavLink>
    </>
  );
  const loggedInLinks = (
    <>
      <NavLink
        to="/feed"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        FEED
      </NavLink>
      
      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        LIKED
      </NavLink>

      <NavLink
        to="/following"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        FOLLOWING
      </NavLink>

      <NavLink
        to="/signout"
        className={styles.NavLink}
        onClick={() => {}}
      >
        SIGN OUT
      </NavLink>

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
      >
        <Avatar 
          src={currentUser?.profile_image} 
          text='Profile' 
          height={40} 
        />
      </NavLink>
    </>
  );
  const loggedOutLinks = (
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        SIGN IN
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        SIGN UP
      </NavLink>
    </>
  );

  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostLink}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact to="/" className={styles.NavLink}>
              HOME
            </NavLink>

            
            {currentUser ? loggedInLinks : loggedOutLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
