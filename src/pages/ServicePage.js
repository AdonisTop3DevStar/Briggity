import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { ContentBody, SectionTitle } from "../components/typography";
import { PrimaryBlueBtn } from "../components/buttons";
import { Banner10, Banner7, Banner8, Banner9 } from "../assets";

function ServicePage() {
    return (
        <div className="ServicePage">
             <section className="my-5" >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={12} sm={12}>
                            <div className="section-subtitle text-center text-sm-start">Our Services</div>
                            <SectionTitle className="text-sm-start text-center">We provide reliable service to our client that is unbeatable</SectionTitle>
                            <ContentBody>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</ContentBody>                            
                            <div className="pe-sm-5 pe-3 text-center text-sm-start my-5"><PrimaryBlueBtn>Work With Us</PrimaryBlueBtn></div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner7} className="rounded-2" width="80%"/></Col>
                    </Row>
                </Container>
            </section>
            <section className="my-5" >
                <Container>
                    <Row className="align-items-center my-5">
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-start mb-3"><Image src={Banner8} className="rounded-4" width="80%"/></Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">01</div>
                            <SectionTitle className="text-sm-start text-center">Digital Product Design.</SectionTitle>
                            <ContentBody>The best software has both a strong back-end and a good front-end. We've got the tools and expertise to assist you in creating an intuitive and engaging user experience that your customers will love and your rivals will envy. Our UX/UI Design. Services include</ContentBody>                            
                            
                        </Col>
                    </Row>
                    <Row className="align-items-center my-5">
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">02</div>
                            <SectionTitle className="text-sm-start text-center">Website & Mobile Development</SectionTitle>
                            <ContentBody>We build custom applications to help companies save smarter, grow faster, serve better; through automation, business process management, to create unique advantages for the business. We have been trusted by many businesses to build their entire technology from the ground up. With a highly-qualified, committed, and results-driven team, we can provide modern, scalable, and easily maintainable software solutions.</ContentBody>                                                        
                        </Col>
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-start mb-3"><Image src={Banner9} className="rounded-4" width="80%"/></Col>
                    </Row>
                    <Row className="align-items-center my-5">
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-start mb-3"><Image src={Banner10} className="rounded-4" width="80%"/></Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <div className="section-subtitle text-start">03</div>
                            <SectionTitle className="text-sm-start text-center">Back-End Development</SectionTitle>
                            <ContentBody>We build custom applications to help companies save smarter, grow faster, serve better; through automation, business process management, to create unique advantages for the business. We have been trusted by many businesses to build their entire technology from the ground up. With a highly-qualified, committed, and results-driven team, we can provide modern, scalable, and easily maintainable software solutions.</ContentBody>                            
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mb-5">
                <Container>
                    <Row>
                        <Col sm={12} md={8} className="mx-auto text-center">
                        <SectionTitle className="text-center">Back-End Development</SectionTitle>
                        <div className="content-body text-center mb-3">Fill out this form and one of our client success managers will contact you within 24 hours. We have notifications set to make sure your message is received.</div>
                        <Button className="mb-3 primary-blue-btn rounded-2 fw-bold px-5  bg-primary-blue btn btn-primary">Work with Us</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ServicePage;