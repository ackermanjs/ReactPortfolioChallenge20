import { Navbar, Nav, Container } from "react-bootstrap";

function TopNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Jeffrey Ackerman</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#my-projects">My Projects</Nav.Link>
          <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
