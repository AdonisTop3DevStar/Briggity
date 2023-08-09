import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { Col, Row } from "react-bootstrap";
import { Services, TeamMembers } from "../contents";
import { ServiceCard, TeamMemberCard } from "./cards";

export default function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export function ServiceCardList() {
    return (
        <Row>
            {Services.map((serviceItem, index) => (
                <Col sm={12} md={6} lg={4} className="mb-4">
                    <ServiceCard key={index} icon={serviceItem.icon} title={serviceItem.title} subtitle={serviceItem.subtitle} link={serviceItem.link}/>
                </Col>
            ))}

        </Row>
    )
}

export function TeamMemberCardList() {
    return (
        <Row>
            {TeamMembers.map((teammemberItem, index) => (
                <Col sm={12} md={4} lg={3} className="mb-4">
                    <TeamMemberCard key={index} avatar={teammemberItem.avatar} name={teammemberItem.name} role={teammemberItem.role}/>
                </Col>
            ))}

        </Row>
    )
}
