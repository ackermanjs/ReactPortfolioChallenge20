import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const Navbar = () => {
        const [activeLink, setActiveLink] = useState('home');
        const [scrolled, seScrolled] = useState(false);

        useEffect(() => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        }, [])

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jeffrey Ackerman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
