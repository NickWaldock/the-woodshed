import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Post } from "./Post";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useRedirect } from "../../hooks/useRedirect";

function PostPage() {
  // Redirect non-authenticated users to sign in page
  useRedirect('loggedOut')
  
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  // Variables for current user for facilitating comments
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  // Get post data
  useEffect(() => {
    const handleMount = async () => {
      try {
				const [{data: post}, {data: comments}] = await Promise.all([
					axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`)
				])
				setPost({results: [post]});
				setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };
		handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
        {currentUser ? (
          <CommentCreateForm
          profile_id={currentUser.profile_id}
          profileImage={profile_image}
          post={id}
          setPost={setPost}
          setComments={setComments}
          />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span className={appStyles.BodyFont}>No comments yet, be the first to comment!</span>
          ) : (
            <span className={appStyles.BodyFont}>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostPage;
