import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { toastAlert } from "../../App";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfileEditForm.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    headline: "",
    instrument: "",
    location: "",
    email: "",
    description: "",
    image: "",

  });
  const { 
    name, 
    headline, 
    instrument, 
    location,
    email, 
    description, 
    image 
  } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { 
            name, 
            headline,
            instrument,
            location,
            email,
            description, 
            image
          } = data;
          setProfileData({ 
            name, 
            headline,
            instrument,
            location,
            email,
            description, 
            image
           });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // Form Authentication Alerts
  const [showAlert, setShowAlert] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("headline", headline);
    formData.append("instrument", instrument);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("description", description);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
      toastAlert();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
    <Form.Group>
        <Form.Label className="d-none">Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          placeholder="Contact name (Optional)"
          className={styles.FormField}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="d-none">Headline</Form.Label>
        <Form.Control
          type="text"
          value={headline}
          onChange={handleChange}
          name="headline"
          rows={2}
          placeholder="Add a snappy headline..."
          className={styles.FormField}
        />
      </Form.Group>
      {errors?.headline?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className="d-none">Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={handleChange}
          name="location"
          placeholder="Where in the world are you?"
          className={styles.FormField}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className="d-none">Instrument</Form.Label>
        <Form.Control
          type="text"
          value={instrument}
          onChange={handleChange}
          name="instrument"
          placeholder="What instrument(s) do you play/teach?"
          className={styles.FormField}
        />
      </Form.Group>
      {errors?.instrument?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className="d-none">Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={handleChange}
          name="description"
          rows={7}
          placeholder="Tell us a little bit about you..."
          className={styles.FormField}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className="d-none">Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          placeholder="Add contact email (Optional)"
          className={styles.FormField}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                className="d-none"
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;