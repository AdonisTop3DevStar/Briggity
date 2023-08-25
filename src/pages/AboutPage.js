import { Col, Container, Image, Row } from "react-bootstrap";
import { ContentBody, SectionSubTitle, SectionTitle } from "../components/typography";
import { PrincipleCardList, TeamMemberCardList } from "../components/layouts";
import { Banner5, Banner6, CheckIcon, TeamMemberAvatar1 } from "../assets";
import { PrimaryBlueBtn } from "../components/buttons";

function AboutPage() {
    return (
        <div className="AboutPage pt-5">
            <section className="my-5" >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={12} sm={12}>
                            <div className="section-subtitle text-center text-sm-start">Who We Are</div>
                            <SectionTitle className="text-sm-start text-center">We Listen, We Understand & We Deliver</SectionTitle>
                            <ContentBody>At Briggity, we are not just a company; we are a dynamic team of tech enthusiasts, innovators, and problem solvers dedicated to reshaping the digital world through cutting-edge software services.</ContentBody>
                            <div className="pe-sm-5 pe-3 text-center text-sm-start my-5"><PrimaryBlueBtn>Work With Us</PrimaryBlueBtn></div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner5} className="rounded-2" width="90%" /></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <SectionSubTitle>Our Principles</SectionSubTitle>
                <SectionTitle className="text-center">Core values that define who we are</SectionTitle>
                <Container>
                    <PrincipleCardList />
                </Container>
            </section>
            <section>
                <SectionSubTitle>A Message</SectionSubTitle>
                <SectionTitle className="text-center">A Message From Our CEO</SectionTitle>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={12} sm={12}>
                            <SectionTitle className="text-sm-start text-center">Build the right team to scale</SectionTitle>
                            <ContentBody>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)</ContentBody>
                            <ContentBody>Our delivery model helps you cut costs and deliver within budget.</ContentBody>
                            <div className="text-white px-3 w-75 my-3 message-p-content">"At Briggity, we're not just in the business of creating software – we're in the business of transformation. Every line of code we write, every solution we deliver, and every challenge we overcome is a testament to our unwavering commitment to innovation and excellence."</div>
                            <div className="d-flex flex-row align-items-center mb-3">
                                <Image src={TeamMemberAvatar1} width="41" className="me-2 rounded-circle" />
                                <div className="ceo-info">
                                    <div className="ceo-name">Matt Case</div>
                                    <div className="ceo-role">CEO</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner6} className="rounded-2" width="100%" /></Col>
                    </Row>
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
        </div>
    );
}

export default AboutPage;