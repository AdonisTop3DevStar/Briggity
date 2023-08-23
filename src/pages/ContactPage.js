import { Col, Container, Row, Button, Accordion, Card, Form, Image } from "react-bootstrap";
import { SectionTitle } from "../components/typography";
import { MailIcon, MapIcon, PhoneIcon } from "../assets";

function ContactPage() {
    return (
        <div className="ContactPage pt-5">
            <section className="my-5" >
                <Container>
                    <SectionTitle className="text-center">Contact Us Now!</SectionTitle>
                    <Card className="border-0 bg-primary-blue">
                        <Card.Body className="p-4">
                            <Row>
                                <Col sm={12} md={12} lg={6} className="mb-3">
                                    <Form>
                                        <Row>
                                            <Col sm={12} md={6} className="mb-3">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="text" placeholder="First Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12} md={6} className="mb-3">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12} md={6} className="mb-3">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12} md={6} className="mb-3">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="text" placeholder="Subject" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={10} placeholder="Write Your Message Here"/>
                                        </Form.Group>
                                        <Button className="w-100 text-center border-1 border-white bg-primary-blue">Send Message</Button>
                                    </Form>
                                </Col>
                                <Col sm={12} md={12} lg={6} className="mb-3">
                                    <div className="mb-5 d-flex align-items-center">
                                        <Image src={MailIcon} width="72" className="me-3"/><div className="text-white">Contact@Briggity.com</div>
                                    </div>
                                    <div className="mb-5 d-flex align-items-center">
                                        <Image src={PhoneIcon} width="72" className="me-3"/><div className="text-white">+92-315-4431105 , +92-315-4431105</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Image src={MapIcon} width="72" className="me-3"/><div className="text-white">Office #605, Liberty GateTower</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <section>
                <Container>
                    <SectionTitle className="text-center">Frequently Asked Questions</SectionTitle>
                    <Card className="border-0 bg-primary-blue">
                        <Card.Body>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is RelatedBoosting?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        At our website, we've established ourselves as a reliable and trustworthy game boosting service that specializes in Rocket League and League of Legends. Our number one priority is customer satisfaction, and we strive to provide top-notch support to assist you with any questions or concerns related to the game, boosting, or ranking up. No matter where you are in the world or what platform you're playing on, our services are available to you 24/7, ensuring that you can get the boost you need at any time.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What happens after I make a purchase?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>In which regions can you boost?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What happens after the booster logs into my account?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Are you capable of boosting to the top rank?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Do you provide any refunds?</Accordion.Header>
                                    <Accordion.Body className="mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <section className="build-together">
                <Container>
                    <Row>
                        <Col sm={12} md={8} className="mx-auto text-center">
                            <SectionTitle className="text-center">Let's build great things together!</SectionTitle>
                            <div className="content-body text-center">Fill out this form and one of our client success managers will contact you within 24 hours. We have notifications set to make sure your message is received.</div>
                            <Button className="mb-3 primary-blue-btn rounded-2 fw-bold px-5  bg-primary-blue btn btn-primary mt-2">Work with Us</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ContactPage;