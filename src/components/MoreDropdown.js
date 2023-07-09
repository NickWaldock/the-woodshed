import React from "react";
import styles from "../styles/MoreDropdown.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router";

// Dropdown menu as gear icon
const Gear = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fa-solid fa-gear fa-2xl"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

// Render the dropdown menu for editing and deleting a post
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute} ${styles.Font} `} drop="right">
      <Dropdown.Toggle as={Gear} />
      <Dropdown.Menu
        popperConfig={{ strategy: "fixed" }}
        className={styles.General}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="Edit Post"
          className={styles.Hover}
        >
          Edit Post
          <i className="fa-solid fa-pencil fa-lg ml-4" />
        </Dropdown.Item>
        <Dropdown.Item          
          onClick={handleDelete}
          aria-label="Delete"
          className={styles.Hover}
        >
            Delete Post
            <i className="fa-solid fa-trash-can fa-lg ml-2" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

// Dropdown menu for profile to allow editing and changing password/username
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown
      className={`ml-auto px-3 ${styles.Absolute} ${styles.Font} `}
      drop="left"
    >
      <Dropdown.Toggle as={Gear} />
      <Dropdown.Menu className={styles.General}>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="Edit Profile"
          className={styles.Hover}
        >
          <i className="fa-solid fa-pencil mr-2" /> Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="Edit Username"
          className={styles.Hover}
        >
          <i className="fa-solid fa-signature mr-2" />
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="Edit Password"
          className={styles.Hover}
        >
          <i className="fa-solid fa-lock mr-2" />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
