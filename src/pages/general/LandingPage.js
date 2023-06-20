import { Image, Jumbotron, Container } from "react-bootstrap";
import styles from "../../styles/LandingPage.module.css";
import React from "react";
import logo from "../../assets/logo-1-nobg.png";

const LandingPage = () => {
  return (
    <div className="text-center">
			<Container className="">
				<Jumbotron fluid className={styles.Container}>
					{/* <h3 className={styles.Body}>Welcome to</h3> */}
					<div>
						<h1 className={styles.Title}>The Woodshed</h1>
						<h3 className={styles.Subtitle}>Make good practice, permanent</h3>
					</div>
					<div className={`${styles.LogoContainer} mt-3`}>
						<Image src={logo} className={styles.Logo}></Image>
					</div>
				</Jumbotron>
			</Container>
    </div>
  );
};

export default LandingPage;
