import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import NoResults from "../../assets/no-results.png";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Post } from "./Post";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { toastAlertFail } from "../../App";


function PostsPage({message, filter=''}) {
  // Redirect non-authenticated users to sign in page
  useRedirect('loggedOut')
  
  const currentUser = useCurrentUser();
  const [posts, setPosts] = useState({results: []});
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();

  const [query, setQuery] = useState('');

  // Get post data
  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/?${filter}search=${query}`)
            setPosts(data)
            setHasLoaded(true)
        } catch(err){
            // console.log(err)
            toastAlertFail();
        }
    }
    setHasLoaded(false);
    // Timeout to delay fetching posts
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
}, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form 
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control 
            value={query}
            type="text" 
            className="mr-sm-2" 
            placeholder="Search..." 
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form>

        {hasLoaded ? (
            <>
            {posts.results.length ? (
              <InfiniteScroll 
                children={
                  posts.results.map(post => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                ))
                }
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
                
            ) : (
                <Container className={appStyles.Content}>
                    <Asset 
                        src={NoResults} 
                        message={message}
                    />
                </Container>
            )}
            </>
        ) : (
            <Container className={appStyles.Content}>
                <Asset spinner />
            </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
