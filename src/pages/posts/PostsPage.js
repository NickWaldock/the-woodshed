import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function PostsPage({message, filter=""}) {
  const [posts, setPosts] = useState({results: []});
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/?${filter}`)
            setPosts(data)
            setHasLoaded(true)
        } catch(err){
            console.log(err)
        }
    }
    setHasLoaded(false);
    fetchPosts();
}, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        <p>List of posts here</p>
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;
