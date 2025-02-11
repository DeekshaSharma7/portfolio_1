import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_BillionByte from "../../assets/img/experience/billionbyte-logo.png";
import L_Infogentech from "../../assets/img/experience/infogentech-logo.png" 
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      <Jumbotron className="jumbo-style">
        {/* HBWSL */}
        <Tilt options={{ max: 5, scale: 1 }} style={{ marginBottom: "20px" }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_Infogentech}
                alt="Infogentech logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Web Developer</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  {/* <strong className="body-title-style ">
                    Software Developer
                  </strong> */}
                  <br />
                  <strong>Technology:</strong> JavaScript, HTML, CSS, React.js,
                  Bootstrap, Node.js, Express.js, MongoDB, Tailwind CSS
                  <br />
                  <strong>Duration:</strong> Dec 2024 - Present
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      Developed{" "}
                      <strong>scalable and dynamic web applications</strong>{" "}
                      using MongoDB, Express.js, React.js, and Node.js, ensuring
                      a smooth and interactive user experience.
                    </li>
                    {/* <li>
                      <strong>Developed</strong> automation system to create SQL
                      bulk query scripts that increased efficiency by 80%.
                    </li> */}
                    <li>
                      Implemented{" "}
                      <strong>
                        Firebase Authentication, JWT authentication
                      </strong>
                      , and <strong>OAuth login</strong> for secure user access
                      and data protection.
                    </li>
                    <li>
                      <strong> Integrated</strong> third-party APIs, executed{" "}
                      <strong>CRUD operations</strong>, and optimized database
                      queries to ensure efficient data handling.
                    </li>
                    <li>
                      Worked with <strong>teams</strong> and{" "}
                      <strong>clients</strong> to develop new features, resolve
                      issues, and maintain detailed technical documentation for
                      <strong> scalability and future updates.</strong>
                    </li>
                    {/* <li>
                      <strong> Integrated</strong> third-party APIs, executed {" "}
                      <strong>CRUD operations</strong>, and optimized database
                      queries to ensure efficient data handling.
                    </li> */}
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>

        
        {/* billionByte */}
        <Tilt options={{ max: 5, scale: 1 }} style={{ marginBottom: "20px" }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_BillionByte}
                alt="HBWSL logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Web Developer</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  {/* <strong className="body-title-style ">
                    Software Developer
                  </strong> */}
                  <br />
                  <strong>Technology:</strong> JavaScript, HTML, CSS, React,
                  Redux, BootStrap, API Integration
                  <br />
                  <strong>Duration:</strong> Aug 2024 - Dec 2024
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      Developed <strong> responsive &amp; dynamic</strong> web
                      applications using technologies like JavaScript, React,
                      Redux, and Bootstrap, ensuring seamless user experiences.
                    </li>
                    {/* <li>
                      <strong>Developed</strong> automation system to create SQL
                      bulk query scripts that increased efficiency by 80%.
                    </li> */}
                    <li>
                      <strong>Integrated </strong>APIs and{" "}
                      <strong>executed</strong> CRUD operations to manage and
                      manipulate data effectively as per business requirements.
                    </li>
                    <li>
                      <strong>Optimized </strong> Optimized web performance and
                      ensured cross-browser compatibility for a seamless user
                      experience.
                    </li>
                    <li>
                      <strong>Collaborated</strong> with teams to develop new
                      features, resolve issues, and prepare detailed technical
                      documentation.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
