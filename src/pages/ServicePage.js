import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { ContentBody, SectionTitle } from "../components/typography";
import { PrimaryBlueBtn } from "../components/buttons";
import { Banner10, Banner7, Banner8, Banner9 } from "../assets";

function ServicePage() {
    return (
        <div className="ServicePage pt-5">
             <section className="my-5" >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={12} sm={12}>
                            <div className="section-subtitle text-center text-sm-start">Our Services</div>
                            <SectionTitle className="text-sm-start text-center">We provide reliable service to our client that is unbeatable</SectionTitle>
                            <ContentBody> As a trailblazing leader in the realm of software solutions, we are committed to revolutionizing businesses through cutting-edge technology. Our diverse portfolio of services caters to enterprises of all sizes, from startups seeking a competitive edge to established corporations aiming for digital transformation.</ContentBody>                            
                            <div className="pe-sm-5 pe-3 text-center text-sm-start my-5"><PrimaryBlueBtn>Work With Us</PrimaryBlueBtn></div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner7} className="rounded-2" width="90%"/></Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5" >
                <Container>
                    <Row className="align-items-center service-workflow">
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-start mb-3"><Image src={Banner8} className="rounded-4" width="80%"/></Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">01</div>
                            <SectionTitle className="text-sm-start text-center">Digital Product Design.</SectionTitle>
                            <ContentBody>The best software has both a strong back-end and a good front-end. We've got the tools and expertise to assist you in creating an intuitive and engaging user experience that your customers will love and your rivals will envy. Our UX/UI Design. Services include</ContentBody>                            
                            <ul className="mt-2">
                                <li><span className="me-2 list-icon">●</span>Design Workshops</li>
                                <li><span className="me-2 list-icon">●</span>UX & UI Consulting</li>
                                <li><span className="me-2 list-icon">●</span>Creative Direction</li>
                                <li><span className="me-2 list-icon">●</span>Prototyping</li>
                                <li><span className="me-2 list-icon">●</span>Usability Testing</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="align-items-center service-workflow">
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">02</div>
                            <SectionTitle className="text-sm-start text-center">Website & Mobile Development</SectionTitle>
                            <ContentBody>In a world dominated by digital experiences, a strong online presence is non-negotiable. Briggity excels in creating seamless web and mobile applications that captivate users and provide unparalleled functionality. Our user-centric approach focuses on intuitive design, responsiveness, and engaging user interfaces. Whether you're targeting web browsers or smartphone users, we ensure that your application delivers an exceptional experience across all platforms.</ContentBody>                                                        
                        </Col>
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-end mb-3"><Image src={Banner9} className="rounded-4" width="80%"/></Col>
                    </Row>
                    <Row className="align-items-center service-workflow">
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-start mb-3"><Image src={Banner10} className="rounded-4" width="80%"/></Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">03</div>
                            <SectionTitle className="text-sm-start text-center">Back-End Development</SectionTitle>
                            <ContentBody>At Briggity, our Back-End Development Service forms the bedrock of your software solutions. With meticulous architecture, efficient database management, and secure API development, we ensure your applications operate seamlessly. Our performance optimization and robust security implementation guarantee a smooth user experience, while our scalable solutions adapt to your evolving needs. Trust Briggity to empower your software with a strong, responsive, and secure back end that paves the way for innovation and growth.</ContentBody>                            
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="build-together">
                <Container>
                    <Row>
                        <Col sm={12} md={8} className="mx-auto text-center">
                        <SectionTitle className="text-center">Let's build great things together!</SectionTitle>
                        <div className="content-body text-center">Briggity invites you to embark on a transformative journey where technology knows no bounds. We aim to forge lasting partnerships, guided by transparency, collaboration, and shared success</div>
                        <Button className="mb-3 primary-blue-btn rounded-2 fw-bold px-5  bg-primary-blue btn btn-primary mt-2">Work with Us</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ServicePage;