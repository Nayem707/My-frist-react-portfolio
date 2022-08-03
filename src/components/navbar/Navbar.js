import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { Link, outline } from "react-router-dom";

function NavbarHome() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">NAYEM ISLAM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <NavDropdown title="Projet" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-0"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Nav.Link href="https://github.com/Nayem707">
              <FaGithub className="text-white"></FaGithub>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
