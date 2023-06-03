import React, { useState } from "react";

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

function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center">
      <Form>
        <Form.Group controlId="title">
          <Form.Label className="d-none">Title</Form.Label>
          <Form.Control type="text" placeholder="Title" name="title" />
        </Form.Group>

        <Form.Group controlId="subtitle">
          <Form.Label className="d-none">Subtitle</Form.Label>
          <Form.Control type="text" placeholder="Subitle" name="subtitle"/>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="d-none">Description</Form.Label>
          <Form.Control as="textarea" rows={6} name="description" placeholder="Description" />
        </Form.Group>

        <Form.Group controlId="instrument">
          <Form.Label className="d-none">Instrument</Form.Label>
          <Form.Control type="text" placeholder="Instrument" name="instrument" />
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label className="d-none">Tags</Form.Label>
          <Form.Control type="text" placeholder="Tags" name="tags" />
        </Form.Group>

        {/* <Form.Group controlId="file">
          <Form.Label className="d-none">File</Form.Label>
          <Form.Control type="file" name="file" />
        </Form.Group> */}
      </Form>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
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
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click or tap to upload PDF"/>
                </Form.Label>

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
