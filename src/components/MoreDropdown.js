import React from "react";
import styles from "../styles/MoreDropdown.module.css"
import { Dropdown } from "react-bootstrap";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fa-solid fa-screwdriver-wrench fa-xl"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

// Render the dropdown menu for editing and deleting a post
  export const MoreDropdown = () => {
		return (
			<Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className="text-center">
        <Dropdown.Item 
					className={styles.DropdownItem}
					onClick={() => {}}
					aria-label="edit"
				>
				<i class="fa-solid fa-wrench fa-lg"></i>
				</Dropdown.Item>
        <Dropdown.Item 
					className={styles.DropdownItem}
					onClick={() => {}}
					aria-label="delete"
				>
					<i class="fa-solid fa-trash-can fa-lg"></i>
				</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
		); 
	};