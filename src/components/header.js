import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Image } from 'react-bootstrap';

function Header() {
  return (
    <Container>
    <Navbar expand="lg" className="Header mt-4 rounded-4">
      <Container fluid className='px-4'>
        <Navbar.Brand>
            <NavLink className="nav-link" to="/"><Image src={Logo} height="40"/></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-between bg-white rounded-4'>
          <Nav
            className="my-2 my-lg-0"
          >
            <NavLink className="nav-link d-flex flex-column text-center" to="/"><span>Home</span></NavLink>
            <NavLink className="nav-link d-flex flex-column text-center" to="/about-us"><span>About Us</span></NavLink>
            <NavLink className="nav-link d-flex flex-column text-center" to="/services"><span>Service</span></NavLink>
            <NavLink className="nav-link d-flex flex-column text-center" to="/team"><span>Team</span></NavLink>
            <NavLink className="nav-link d-flex flex-column text-center" to="/blog"><span>Blog</span></NavLink>
            <NavLink className="nav-link d-flex flex-column text-center" to="/contact"><span>Contact</span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Header;