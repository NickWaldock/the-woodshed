import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import Image from "react-bootstrap/Image";

function PostCreateForm() {
  const fileInput = useRef(null);

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

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeFile = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(file);
      setPostData({
        ...postData,
        file: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form>
        <Form.Group controlId="title">
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="subtitle">
          <Form.Label className="d-none">Subtitle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subitle"
            name="subtitle"
            value={subtitle}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="d-none">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="instrument">
          <Form.Label className="d-none">Instrument</Form.Label>
          <Form.Control
            type="text"
            placeholder="Instrument"
            name="instrument"
            value={instrument}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="d-none">Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tags"
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group controlId="file">
          <Form.Label className="d-none">File</Form.Label>
          <Form.Control type="file" name="file" value={file} />
        </Form.Group> */}
      </Form>

      <Button className={btnStyles.Button} onClick={() => {}}>
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
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
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="file-upload"
                    >
                      Change the image
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
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="file-upload"
                accept="application/pdf"
                onChange={handleChangeFile}
                ref={fileInput}
              />
            </Form.Group>
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
