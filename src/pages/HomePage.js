import { Container, Row, Col, Image } from "react-bootstrap";
import { ContentBody, SectionSubTitle, SectionTitle } from "../components/typography";
import { Banner1, Banner2, Banner3, CheckIcon } from "../assets";
import { PrimaryBlueBtn } from "../components/buttons";
import { ServiceCardList, TeamMemberCardList } from "../components/layouts";
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import { IntroCard, ProjectCard } from "../components/cards";

function HomePage() {
    return (
        <div className="HomePage pt-5">
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={10} className="mx-auto fw-bold">
                            <div className="banner-title text-center mb-4 text-white">Turning Your Business Dream Into Tomorrow's Reality.</div>
                            <div className="banner-subtitle text-center">when you need us for improve your business,<br /> then come with us to help your business have reach it, you just sit and feel that goal</div>
                            <div className="text-center mb-5"><PrimaryBlueBtn>Start Project</PrimaryBlueBtn></div><hr className="text-transparent"/>
                            <div className="position-relative pt-5">
                                <ProjectCard />
                                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                    <BigPlayButton position="center" />
                                </Player>
                                <IntroCard />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <SectionSubTitle>About Us</SectionSubTitle>
                    <SectionTitle className="text-center">Who We Are</SectionTitle>
                    <div  className="position-relative">
                    <Row>
                        <Col sm={12} md={12} lg={6} className="mb-2 pe-sm-5 pe-0 d-flex justify-content-between flex-column">
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">Welcome to Briggity, your premier destination for cutting-edge software services that transform your business ideas into reality. At Briggity, we're not just a company; we're your technology partner, working hand-in-hand to innovate, create, and elevate your digital presence.</div></ContentBody><br />
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">With a team of skilled and experienced professionals, Briggity is your go-to source for a wide range of software services. Integrity and transparency are the cornerstones of our business. We believe in open communication, honest practices, and maintaining the highest ethical standards throughout our interactions with clients, partners, and team members.</div></ContentBody><br />
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">Let's work together to turn your software dreams into reality.</div></ContentBody><br />
                            <div className="pe-sm-5 pe-3 text-center text-sm-start"><PrimaryBlueBtn>Leard More</PrimaryBlueBtn></div>
                        </Col>
                        <Col sm={12} md={12} lg={6} className="mb-2">
                            <Row>
                                <Col md={4} sm={12} className="d-flex justify-content-between mt-2">
                                    <Row className="justify-content-between">
                                        <Col md={12} className="overflow-hidden rounded-3 mb-2"><Image src={Banner2} height="100%" width="100%" className="rounded-3" /></Col>
                                        <Col md={12} className="overflow-hidden"><Image src={Banner3} width="100%" height="100%" className="rounded-3" /></Col>
                                    </Row>
                                </Col>
                                <Col md={8} sm={12} className="overflow-hidden rounded-3 mt-2"><Image src={Banner1} width="100%" className="rounded-3 position-relative z-3" /></Col>
                            </Row>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section >
            <section className="">
                <Container>
                    <SectionSubTitle>Our Services</SectionSubTitle>
                    <SectionTitle className="text-center">What We Can Do For You</SectionTitle>
                    <div className="position-relative">
                    <ServiceCardList />
                    </div>
                </Container>
            </section>
            <section className="">
                <SectionSubTitle>Our Team</SectionSubTitle>
                <SectionTitle className="text-center">Meet our team member</SectionTitle>
                <Container>
                    <TeamMemberCardList />
                </Container>
            </section>
            <section className="half-bg" >
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="mb-5">
                            <SectionTitle className="text-sm-start text-center">Why Briggity is best To Work With.</SectionTitle>
                            <ContentBody>At Briggity, we bring a wealth of experience and deep technical knowledge to the table. Our skilled team of professionals is well-versed in the latest software development trends, ensuring that your projects are in the hands of experts.</ContentBody>
                            <div className="check-list d-flex align-items-start mt-4">
                                <Image src={CheckIcon} width="40" />
                                <div className="ms-3">
                                    <div className="check-list-title">User-Centric Design</div>
                                    <div className="check-list-subtitle">We believe in putting users first. Our UX design team focuses on creating intuitive interfaces that enhance user engagement, resulting in software that users love to interact with.</div>
                                </div>
                            </div>
                            <div className="check-list d-flex align-items-start my-3">
                                <Image src={CheckIcon} width="40" />
                                <div className="ms-3">
                                    <div className="check-list-title">Clients as Collaborators</div>
                                    <div className="check-list-subtitle">When you choose Briggity, you're not just a client – you're a collaborator. We involve you in the creative process, ensuring that the end result is a true reflection of your vision and objectives.</div>
                                </div>
                            </div>
                            <div className="pe-sm-5 pe-3 text-center text-sm-start mb-5"><PrimaryBlueBtn>Lets Work Together</PrimaryBlueBtn></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
}

export default HomePage;