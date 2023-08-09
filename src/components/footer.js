import { Col, Container, Image, Row } from "react-bootstrap";
import { ContentBody, FooterSectiontitle } from "./typography";
import { FaceBookIcon, LinkedinIcon, Logo, MailIcon, MapIcon, PhoneIcon, TwitterIcon } from "../assets";
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <div className="Footer pt-5">
            <Container>
                <Row>
                    <Col md={3} sm={12} className="mb-3">
                        <Image src={Logo} height="40" className="mb-3" />
                        <ContentBody>The goal is to deliver quality-focused Software products to aspiring businesses.</ContentBody>
                        <div className="d-flex align-items-center my-3">
                            <NavLink className="nav-link" to="/" target="_black"><Image src={FaceBookIcon} className="me-2" /></NavLink>
                            <NavLink className="nav-link" to="/" target="_black"><Image src={TwitterIcon} className="me-2" /></NavLink>
                            <NavLink className="nav-link" to="/" target="_black"><Image src={LinkedinIcon} className="me-2" /></NavLink>
                        </div>
                    </Col>
                    <Col md={3} sm={12} className="mb-3">
                        <FooterSectiontitle>Quick Links</FooterSectiontitle>
                        <NavLink to="" className="nav-link mb-2">Home</NavLink>
                        <NavLink to="" className="nav-link mb-2">About Us</NavLink>
                        <NavLink to="" className="nav-link mb-2">Services</NavLink>
                        <NavLink to="" className="nav-link mb-2">Blogs</NavLink>
                    </Col>
                    <Col md={3} sm={12} className="mb-3">
                        <FooterSectiontitle>Services</FooterSectiontitle>
                        <NavLink to="" className="nav-link mb-2">UX/UI Design</NavLink>
                        <NavLink to="" className="nav-link mb-2">App Development</NavLink>
                        <NavLink to="" className="nav-link mb-2">Web Development</NavLink>
                        <NavLink to="" className="nav-link mb-2">Quality Assurance</NavLink>
                        <NavLink to="" className="nav-link mb-2">Machine Learning</NavLink>
                    </Col>
                    <Col md={3} sm={12} className="mb-3">
                        <FooterSectiontitle>Reach us</FooterSectiontitle>
                        <div className="d-flex align-items-center mb-2"><Image src={MailIcon} height="32" className="me-2"/><ContentBody>contact@Briggity.com</ContentBody></div>
                        <div className="d-flex align-items-center mb-2"><Image src={PhoneIcon} height="32" className="me-2"/><ContentBody>+92-315-4431105</ContentBody></div>
                        <div className="d-flex align-items-center mb-2"><Image src={MapIcon} height="32" className="me-2"/><ContentBody>Office #605, Liberty Gate Tower, MM Alam Road, Gullberg 3 Lahore, Pakistan</ContentBody></div>
                    </Col>
                </Row>
                <hr className="text-base-200"/>
                <div className="d-flex flex-sm-row flex-column">
                    <Col className="mb-3 text-center text-sm-start"><ContentBody>Copyright ©  2022 Briggity. All Right reserved</ContentBody></Col>
                    <Col className="mb-3 text-center text-sm-end"><ContentBody><NavLink to="" className="nav-link d-inline">Terms & Conditions</NavLink> | <NavLink to="" className="nav-link d-inline">Privacy Policy</NavLink></ContentBody></Col>
                </div>
            </Container>
        </div>
    );
}
