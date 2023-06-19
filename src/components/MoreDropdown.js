import React from "react";
import styles from "../styles/MoreDropdown.module.css";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
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
    <Dropdown className="ml-4" drop="left">
      <Dropdown.Toggle as={Gear} />
      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i class="fa-solid fa-wrench fa-lg"></i>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i class="fa-solid fa-trash-can fa-lg"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};


export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute} ${styles.Font}`} drop="left">
      <Dropdown.Toggle as={Gear} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fa-solid fa-pencil mr-2" /> Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="fa-solid fa-signature mr-2" />
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fa-solid fa-lock mr-2" />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}