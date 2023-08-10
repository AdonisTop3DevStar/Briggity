import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { NavLinks } from '../contents';
import { PrimaryBlueBtn } from './buttons';
import { Logo } from '../assets';

function Header() {
  return (
    <Container>
    <Navbar expand="lg" className="Header mt-4 rounded-4">
      <Container fluid className='px-4'>
        <Navbar.Brand>
            <NavLink className="nav-link d-flex flex-column" to="/"><Image src={Logo} height="40"/></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='bg-white rounded-4 mx-auto'>
          <Nav
            className="my-2 my-lg-0 mx-auto"
          >
            {NavLinks.map((linkItem, index) => (
                <NavLink className="nav-link d-flex flex-column text-center mx-2" to={linkItem.link}><span>{linkItem.title}</span></NavLink>
            ))}
          </Nav>
          <div className='d-flex justify-content-center d-lg-none mb-3'><PrimaryBlueBtn>Contact</PrimaryBlueBtn></div>
        </Navbar.Collapse>
        <div className='d-none d-lg-inline'><PrimaryBlueBtn>Contact</PrimaryBlueBtn></div>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Header;