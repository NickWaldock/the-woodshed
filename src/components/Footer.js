import React from "react";
import appStyles from "../App.module.css";
import styles from "../styles/Footer.module.css";
import { Container, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <footer className="text-center text-lg-start">
        <div class="container d-flex justify-content-center py-5">
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a
              href="https://www.linkedin.com/in/nicholas-waldock-05237071/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a href="https://github.com/NickWaldock" target="_blank">
              <i className="fa-brands fa-square-github fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-f fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a href="https://youtube.com" target="_blank">
              <i className="fab fa-youtube fa-2xl" />
            </a>
          </Button>
        </div>

        <div className={`${styles.Text} p-3 text-center`}>
          <p>
            This site was built as a portfolio project for {""}
            <a href="https://codeinstitute.net">
              <strong>Code Institute's</strong>
            </a>{" "}
            Software Development Diploma
          </p>
          <p>
            Copyright © 2023
            <a
              className={`${styles.Text} ml-2`}
              href="https://nicholasjameswaldock.uk"
            >
              <strong>nicholasjameswaldock</strong>
            </a>
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
