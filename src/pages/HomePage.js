import { Container, Row, Col, Image } from "react-bootstrap";
import { ContentBody, SectionSubTitle, SectionTitle } from "../components/typography";
import { Banner1, Banner2, Banner3, BannerItem1, BannerItem2, BannerItem3, BannerItem4, BannerItem5, CheckIcon } from "../assets";
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
                                <Image src={BannerItem1} className="position-absolute banner-item-1" />
                                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                    <BigPlayButton position="center" />
                                </Player>
                                <Image src={BannerItem2} className="position-absolute banner-item-2" />
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
                        <Image src={BannerItem3} className="position-absolute banner-item-3" width="155" />
                    <Row>
                        <Col sm={12} md={12} lg={6} className="mb-2 pe-sm-5 pe-0 d-flex justify-content-between flex-column">
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div></ContentBody><br />
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div></ContentBody><br />
                            <ContentBody><div className="pe-sm-5 pe-3 text-justify">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</div></ContentBody><br />
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
                    <Image src={BannerItem4} className="position-absolute banner-item-4 z-1" />
                    <ServiceCardList />
                    <Image src={BannerItem5} className="position-absolute banner-item-5 z-1" />
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
        </div >
    );
}

export default HomePage;