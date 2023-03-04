import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function PrimaryNavBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Jeffrey Ackerman</Navbar.Brand>
          <Nav className="me-auto">
            <ul>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
