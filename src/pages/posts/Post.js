import React from "react";
import styles from "../../styles/Post.module.css";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import { Avatar } from "../../components/Avatar";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MoreDropdown } from "../../components/MoreDropdown";
import PdfPreview from "./PdfPreview";
import { toastAlertDelete, toastAlertFail } from "../../App";

export const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    subtitle,
    description,
    tags,
    instrument,
    file,
    updated_at,
    setPosts,
  } = props;  

  // Get current user
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  // Redirect user to edit page function
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Delete a post then
  // redirect user to home page
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push('/');
      toastAlertDelete();
    } catch (err) {
      // console.log(err);
      toastAlertFail();
    }
  };

  // Add like to the post instance, increase post like count by 1
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
      toastAlertFail();
    }
  };

  // Remove like to the post instance, decrease post like count by 1
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
      toastAlertFail();
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Link} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className="mr-5">
              <em>Updated on</em>
              <br />
              {updated_at}
            </span>
            {is_owner && (                
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body>
        {title && (
          <Link to={`/posts/${id}`} className={styles.Link}>
            <Card.Title className={`${styles.PostTitle} text-center`}>
              {title}
            </Card.Title>
          </Link>
        )}
        {subtitle && (
          <Card.Subtitle className={`${styles.PostSubtitle} my-3 text-center`}>
            {subtitle}
          </Card.Subtitle>
        )}
        {instrument && (
          <Card.Text>
            <em>Instrument: </em>
            {instrument}
          </Card.Text>
        )}
        {tags && (
          <Card.Text>
            <em>Tags: </em>
            {tags}
          </Card.Text>
        )}
        {description && <Card.Text><em>Notes from {owner}:</em><br />{description}</Card.Text>}
      
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href={file}
        >
            <Button
              className={`${btnStyles.Button} mb-2`}
            >
              View PDF in new tab / Download
            </Button> 
        </a>

        <PdfPreview data={file} postId={id} />
    
        <div className={`${styles.PostBar} mt-4`}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-up fa-xl" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa-solid fa-thumbs-up fa-xl ${styles.Thumb}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i
                className={`fa-solid fa-thumbs-up fa-xl ${styles.ThumbOutline}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-up fa-xl" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`} className={styles.Comment}>
            <i className="fa-solid fa-message fa-xl" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};
