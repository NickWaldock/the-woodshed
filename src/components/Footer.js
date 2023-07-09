import React from "react";
import styles from "../styles/Footer.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container>
      <footer className="text-center text-lg-start">
        <div className="container d-flex justify-content-center py-5">
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a
              href="https://www.linkedin.com/in/nicholas-waldock-05237071/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-linkedin fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a
              href="https://github.com/NickWaldock"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-square-github fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-facebook-f fa-2xl" />
            </a>
          </Button>
          <Button
            type="button"
            className={`${styles.SocialIcons} btn-floating mx-2`}
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-youtube fa-2xl" />
            </a>
          </Button>
        </div>

        <div className={`${styles.Text} p-3 text-center`}>
          <p>
            This site was built as a portfolio project for {""}
            <a
              href="https://codeinstitute.net"
              target="_blank"
              rel="noreferrer noopener"
            >
              <strong>Code Institute's</strong>
            </a>{" "}
            Software Development Diploma
          </p>
          <p>
            Copyright © 2023
            <a
              className={`${styles.Text} ml-2`}
              href="https://nicholasjameswaldock.uk"
              target="_blank"
              rel="noreferrer noopener"
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
