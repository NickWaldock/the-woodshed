import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import logo from "../../assets/main-logo.png";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";


const SignUpForm = () => {
    // Collects user input data in the form
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    })
    const { username, password1, password2 } = signUpData;

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };


  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign up</h1>
          <Form className={`${styles.Form} mt-4`}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={styles.Input}
                value={username}
                onChange={handleChange}
              />
              <Form.Text className={`${styles.FormText} text-muted`}>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                className={styles.Input}
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="password2"
                className={styles.Input}
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 text-center ${styles.Form}`}>
        <span>Already have an account?</span>
          <Link className={styles.Link} to="/signin">
            <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image className={`${appStyles.FillerImage}`} src={logo} />
      </Col>
    </Row>
  );
};

export default SignUpForm;
