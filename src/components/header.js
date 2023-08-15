import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { NavLinks } from '../contents';
import { ContactBtn} from './buttons';
import { Logo } from '../assets';

function Header() {
  return (
    <Container>
    <Navbar expand="lg" className="Header rounded-4 bg-primary-blue">
      <Container fluid className='px-4'>
        <Navbar.Brand>
            <NavLink className="nav-link d-flex flex-column" to="/"><Image src={Logo} height="40"/></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='rounded-4 mx-auto bg-primary-blue'>
          <Nav
            className="my-2 my-lg-0 mx-auto"
          >
            {NavLinks.map((linkItem, index) => (
                <NavLink className="nav-link d-flex flex-column text-center mx-2" to={linkItem.link}><span>{linkItem.title}</span></NavLink>
            ))}
          </Nav>
          <div className='d-flex justify-content-center d-lg-none mb-3'><ContactBtn>Contact</ContactBtn></div>
        </Navbar.Collapse>
        <div className='d-none d-lg-inline'><ContactBtn>Contact</ContactBtn></div>
      </Container>
    </Navbar>
    </Container>
  );
}

export default Header;