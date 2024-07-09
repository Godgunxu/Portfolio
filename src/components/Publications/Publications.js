import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PublicationCard from "./PublicationCards"; // Ensure this path is correct
import paper1Img from "../../Assets/Publications/paper1.png"; // Ensure this path is correct
import paper2Img from "../../Assets/Publications/paper2.png"; // Ensure this path is correct

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few papers I have published..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <PublicationCard
              imgPath={paper1Img}
              title="Anchor-free Pedestrian Detection Model"
              description="Published in the 2020 Chinese Automation Congress (CAC), this paper presents an anchor-free pedestrian detection model with semantic context of traffic scenario."
              ghLink="https://ieeexplore.ieee.org/document/9327716"
            />
          </Col>

          <Col md={6} className="project-card">
            <PublicationCard
              imgPath={paper2Img}
              title="SqueezeDet-based Nighttime Traffic Light Detection"
              description="Presented at the 2019 China Symposium on Cognitive Computing and Hybrid Intelligence, this paper introduces a traffic light detection method for nighttime using SqueezeDet-based techniques."
              ghLink="https://ieeexplore.ieee.org/document/8901919"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;