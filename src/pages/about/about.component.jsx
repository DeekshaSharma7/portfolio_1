import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Tilt options={{ max: 5, scale: 1 }}>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    thumbnail
                    fluid
                  />
                </Tilt>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Deeksha Sharma</strong>
                <br />A dedicated Software Developer from India, specializing in
                Full Stack Development with expertise in JavaScript, React.js,
                Redux, Express.js, and Node.js.
                <br />
                Passionate about deveoping innovative web applications and
                utilizing technology to improve user experience.
                <br />
                I completed my Master's in Computer Applications (MCA) in 2024,
                building on the foundation of my Bachelor's degree in
                Mathematics (B.Sc.), which I earned in 2021.
                <br />
                <br />I enjoy exploring new technologies, understanding the
                problems they address, and finding innovative ways to leverage
                them for creating scalable and efficient solutions.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1jrNKWz4epI8R69VgxNQUjnBWgYD3dXiL/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/DeekshaSharma7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/deeksha-sharma10782/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
