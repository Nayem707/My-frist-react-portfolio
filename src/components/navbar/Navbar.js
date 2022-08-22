import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from 'react-bootstrap';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, outline } from 'react-router-dom';

function NavbarHome() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/' className='m-0'>
          NAYEM ISLAM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='m-auto'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/about' className='nav-link'>
              About
            </Link>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
            <NavDropdown title='Projet' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>HTML</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>CSS</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>JS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='https://github.com/Nayem707'>
              <FaGithub className='text-white' size='30px'></FaGithub>
            </Nav.Link>

            <Nav.Link href='https://github.com/Nayem707'>
              <FaFacebook className='text-white' size='30px'></FaFacebook>
            </Nav.Link>

            <Form className='me-5 d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='m-2 m-auto'
                aria-label='Search'
              />
              <Button className='btn btn-warning m-2 m-auto'>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
