import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo-1-nobg.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
// import { CurrentUserContext } from "../App";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { Avatar } from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const NavBar = () => {
  const history = useHistory();

  // Get current logged-in data
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // Access hook for burger menu expansion logic
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // Manage user sign out
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      history.push("/welcome");
    } catch (err) {
      console.log(err);
    }
  };

  // Conditional NavBar links
  const addPostLink = (
    <>
      <NavLink
        to="/posts/create"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Add Post
      </NavLink>
    </>
  );
  const loggedInLinks = (
    <>
      <NavLink exact to="/" className={styles.NavLink}>
        Home
      </NavLink>
      <NavLink
        to="/feed"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Feed
      </NavLink>

      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Liked
      </NavLink>

      <NavLink to="/" className={styles.NavLink} onClick={handleSignOut}>
        Sign Out
      </NavLink>

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={35} />
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
        Sign In
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        Sign Up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      fixed="top"
      className={styles.NavBar}
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostLink}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser ? loggedInLinks : loggedOutLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
