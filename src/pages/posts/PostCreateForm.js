import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    description: "",
    instrument: "",
    tags: "",
    file: "",
  });
  const { title, subtitle, description, instrument, tags, file } = postData;
  const fileInput = useRef(null);
  const history = useHistory();

  // Function to allow the form fields to continually display inputted data
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle changing and previewing PDF files before submission
  const handleChangeFile = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(file);
      setPostData({
        ...postData,
        file: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Function to send dat to the API on form submit
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('description', description);
    formData.append('instrument', instrument);
    formData.append('tags', tags);
    formData.append('file', fileInput.current.files[0]);

    try {
      const {data} = await axiosReq.post('/posts/', formData);
      history.push(`/posts/${data.id}`);
    } catch(err){
      console.log(err);
      if (err.response?.status !== 401){
        setErrors(err.response?.data);
      }
    }
  }

  // Form text fields and messages for error handling
  const textFields = (
    <div className="text-center">
        <Form.Group>
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

        <Form.Group>
          <Form.Label className="d-none">Subtitle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subitle"
            name="subtitle"
            value={subtitle}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.subtitle?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

        <Form.Group>
          <Form.Label className="d-none">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            placeholder="Provide a description to help other users understand how to use this pdf..."
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

        <Form.Group>
          <Form.Label className="d-none">Instrument</Form.Label>
          <Form.Control
            type="text"
            placeholder="Instrument"
            name="instrument"
            value={instrument}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.instrument?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

        <Form.Group>
          <Form.Label className="d-none">Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add some Tags - ex: Musicianship, Technique, Scales,..."
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.tags?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      
    
      <Button 
        className={btnStyles.Button}
        onClick={() => history.goBack()}>
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {file ? (
                <>
                  <div className="embed-responsive embed-responsive-1by1">
                    <object
                      className="embed-responsive-item"
                      data={file}
                    ></object>
                  </div>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} btn`}
                      htmlFor="file-upload"
                    >
                      Change the file
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="file-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload a PDF"
                  />
                </Form.Label>
              )}

              <Form.File
                className="d-none"
                id="file-upload"
                accept="application/pdf"
                onChange={handleChangeFile}
                ref={fileInput}
              />
            </Form.Group>
            {errors?.file?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;