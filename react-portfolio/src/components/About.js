import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6}>
          <Image
            src="https://via.placeholder.com/300x300"
            roundedCircle
            fluid
          />
        </Col>
        <Col xs={12} md={6} className="mt-5 mt-md-0">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            tellus enim. Nulla sollicitudin suscipit ultrices. Integer pharetra
            sed nunc a posuere. Integer et ante in sapien vestibulum consectetur
            ut vitae quam. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
