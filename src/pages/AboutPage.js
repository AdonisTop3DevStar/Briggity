import { Col, Container, Image, Row } from "react-bootstrap";
import { ContentBody, SectionSubTitle, SectionTitle } from "../components/typography";
import { PrincipleCardList, TeamMemberCardList } from "../components/layouts";
import { Banner5, Banner6, CheckIcon, TeamMemberAvatar1 } from "../assets";
import { PrimaryBlueBtn } from "../components/buttons";

function AboutPage() {
    return (
        <div className="AboutPage">
            <section className="my-5" >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={12} sm={12}>
                            <div className="section-subtitle text-center text-sm-start">Who We Are</div>
                            <SectionTitle className="text-sm-start text-center">We Listen, We Understand & We Deliver</SectionTitle>
                            <ContentBody>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</ContentBody>                            
                            <div className="pe-sm-5 pe-3 text-center text-sm-start my-5"><PrimaryBlueBtn>Work With Us</PrimaryBlueBtn></div>
                        </Col>
                        <Col lg={5} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner5} className="rounded-2" width="80%"/></Col>
                    </Row>
                </Container>
            </section>
            <section>
                <SectionSubTitle>Our Principles</SectionSubTitle>
                <SectionTitle className="text-center">Core values that define who we are</SectionTitle>
                <Container>
                    <PrincipleCardList/>
                </Container>
            </section>
            <section>
                <SectionSubTitle>A Message</SectionSubTitle>
                <SectionTitle className="text-center">A Message From Our CEO</SectionTitle>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={12} sm={12}>
                            <SectionTitle className="text-sm-start text-center">Build the right team to scale</SectionTitle>
                            <ContentBody>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term not the case with freelancers</ContentBody>                            
                            <ContentBody>Our delivery model helps you cut costs and deliver within budget.</ContentBody>                            
                            <div className="text-white px-3 w-75 my-3 message-p-content">"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</div>
                            <div className="d-flex flex-row align-items-center mb-3">
                                <Image src={TeamMemberAvatar1} width="41" className="me-2 rounded-circle"/>
                                <div className="ceo-info">
                                    <div className="ceo-name">Matt Case</div>
                                    <div className="ceo-role">CEO</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="text-center text-sm-end"><Image src={Banner6} className="rounded-2" width="100%"/></Col>
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
                        <Col lg={6} md={12} sm={12}>
                            <SectionTitle className="text-sm-start text-center">Why Briggity is best To Work With.</SectionTitle>
                            <ContentBody>Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.</ContentBody>
                            <div className="check-list d-flex align-items-start mt-4">
                                <Image src={CheckIcon} width="40" />
                                <div className="ms-3">
                                    <div className="check-list-title">User Experience Design Team.</div>
                                    <div className="check-list-subtitle">Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignsim tortor in tellus dictum pellentesque. </div>
                                </div>
                            </div>
                            <div className="check-list d-flex align-items-start my-3">
                                <Image src={CheckIcon} width="40" />
                                <div className="ms-3">
                                    <div className="check-list-title">User Experience Design Team.</div>
                                    <div className="check-list-subtitle">Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignsim tortor in tellus dictum pellentesque. </div>
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