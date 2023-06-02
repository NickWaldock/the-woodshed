import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import logo from "../../assets/main-logo.png";

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";


const SignUpForm = () => {  
  // Collects and stores user input data from the form
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // Collect and log any errors
  // Sends user data to api DRF authorisation,
  // Stops page refresh on form submit and redirects
  // user to Sign In page
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign up</h1>

          <Form onSubmit={handleSubmit} className={`${styles.Form} mt-4`}>
            
            {/* Form element for username */}
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
            </Form.Group>
            {/* Display error message if there is an issue with the username field on submission */}
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Form element for password */}
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
            {/* Display error message if there is an issue with the password1 field on submission */}
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Form element for confirm password */}
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
            {/* Display error message if there is an issue with the password2 field on submission */}
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Submit form button, and error handling for non-field-errors */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide}`}
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
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
