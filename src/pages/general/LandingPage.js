import { Image, Jumbotron, Container } from "react-bootstrap";
import styles from "../../styles/LandingPage.module.css";
import React from "react";
import logo from "../../assets/logo-1-nobg.png";

const LandingPage = () => {
  return (
    <div >
			<Container>
				<Jumbotron fluid className={styles.Container}>
					<h1>Welcome to</h1>
					<div className="">
						<Image src={logo} className=""></Image>
					</div>
				</Jumbotron>
			</Container>
    </div>
  );
};

export default LandingPage;
