import {
  Image,
  Jumbotron,
  Container,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import styles from "../../styles/LandingPage.module.css";
import React from "react";
import logo from "../../assets/logo-1-nobg.png";
import cello from "../../assets/landing-page-imgs/cello.png";
import drums from "../../assets/landing-page-imgs/drums.png";
import guitar from "../../assets/landing-page-imgs/guitar.png";
import guitar2 from "../../assets/landing-page-imgs/guitar-2.png";
import sax from "../../assets/landing-page-imgs/sax.png";
import singer from "../../assets/landing-page-imgs/singer-1.png";
import singer2 from "../../assets/landing-page-imgs/singer-2.png";
import trumpet from "../../assets/landing-page-imgs/trumpet.png";
import violin from "../../assets/landing-page-imgs/violin.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../../styles/Button.module.css";

const LandingPage = () => {
  return (
    <div className="text-center">
      <Container>
        <Jumbotron fluid className={styles.Container}>
          <div>
            <h1 className={styles.Title}>The Woodshed</h1>
            <h3 className={styles.Subtitle}>Make good practice, permanent</h3>
          </div>
          <div className={`${styles.LogoContainer} mt-3`}>
            <Link to={"/signin"} >
              <Image src={logo} className={`${styles.Logo}`}></Image>
								<Button className={`${btnStyles.Button} mb-3`}>
									Click to enter
								</Button>
							</Link>
          </div>
        </Jumbotron>
      </Container>

      {/* Info Card Container */}
      <Container className={styles.CardContainer}>
        <Row className={`${styles.CardCol} mt-4`}>
          <Col className="col-md-6 col-12 my-2">
            <Card className={styles.Card}>
              <Row>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={cello}
                    alt="cello"
                  />
                </Col>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={sax}
                    alt="saxophone"
                  />
                </Col>
              </Row>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>
                  What is The Woodshed?
                </Card.Title>
                <Card.Text className={styles.Body}>
                  <em>"Woodshedding"</em>, or <em>"shedding"</em>, is a term
                  commonly used by musicians to mean rehearsing a difficult
                  passage repeatedly until it can be performed flawlessly.{" "}
                  <br /> <br />
                  The term is used metaphorically where "the woodshed" means any
                  private place to practice without being heard by anyone else
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md-6 col-12 my-2">
					  <Card className={styles.Card}>
              <Row>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={drums}
                    alt="drums"
                  />
                </Col>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={singer2}
                    alt="singer"
                  />
                </Col>
              </Row>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>
                  Why The Woodshed?
                </Card.Title>
                <Card.Text className={styles.Body}>
                  We are a multi-user file-sharing platform made exlusively for
                  musicians. With a growing community of people dedicated to
                  good musical practice and skill development, if you are
                  looking for help with your practice, this is the place to be!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col className="col-md-6 col-12 my-2">
					  <Card className={styles.Card}>
              <Row>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={singer}
                    alt="singer"
                  />
                </Col>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={trumpet}
                    alt="trumpet"
                  />
                </Col>
              </Row>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>
                  Practice, Practice, Practice...
                </Card.Title>
                <Card.Text className={styles.Body}>
                  Practice is the name of the game here. Here our community of
                  musicians and music teachers share valuable learning resources
                  for thier own use or for those of thier budding students!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md-6 col-12 my-2">
            <Card className={styles.Card}>
              <Row>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={violin}
                    alt="violin"
                  />
                </Col>
                <Col>
                  <Card.Img
                    className={styles.CardImg}
                    variant="top"
                    src={guitar2}
                    alt="guitar"
                  />
                </Col>
              </Row>
              <Card.Body>
                <Card.Title className={styles.CardTitle}>
                  Any Instrument!
                </Card.Title>
                <Card.Text className={styles.Body}>
                  All instruments and all abiltities are welcome! Here you will
                  find resources for whatever stage of your musical development
                  you are at! <br /> Click the button below to get started!
									<br />
										<i className="fa-solid fa-down-long"/>
										<i className="fa-solid fa-down-long mx-1"/>
										<i className="fa-solid fa-down-long"/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
				<Row className="my-4">
						<Col className="text-center">
							<Link to={"/signin"} >
								<Button className={`${btnStyles.Button} ${btnStyles.Wide}`}>
									Get Started!
								</Button>
							</Link>
						</Col>
					</Row>
      </Container>
    </div>
  );
};

export default LandingPage;
