import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h2>My Projects</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/project1.jpg" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>This is a short description of project 1.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/project2.jpg" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>This is a short description of project 2.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/project3.jpg" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>This is a short description of project 3.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
