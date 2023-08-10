import { Card, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon, StarIcon, TeamMemberAvatar1 } from "../assets";

export function ServiceCard({ icon, title, subtitle, link }) {
    return (
        <Card className="ServiceCard border-0 shadow" >
            <Card.Body className="text-center">
                <span className="bg-primary-50 p-3 mt-3 rounded-2 d-flex justify-content-center w-20 mx-auto"><Image src={icon} className="mb-2" height="32" width="32" /></span>
                <Card.Title className="my-3">{title}</Card.Title>
                <Card.Subtitle className="mb-3">{subtitle}</Card.Subtitle>
                <NavLink to={link} className="nav-link mb-3 text-primary-500 pb-1">Learn More <Image src={ArrowRightIcon} className="ms-2" width="24" /></NavLink>
            </Card.Body>
        </Card>
    )
}

export function TeamMemberCard({ avatar, name, role }) {
    return (
        <Card className="TeamMemberCard border-0">
            <Card.Body className="text-center">
                <Image src={avatar} width="200" className="rounded-5" />
                <Card.Title className="my-3">{name}</Card.Title>
                <Card.Subtitle className="mb-3">{role}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export function IntroCard() {
    return (
        <Card className="IntroCard border-0 shadow position-absolute z-3 d-none d-lg-flex">
            <Card.Body className="d-flex flex-column align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <Image src={TeamMemberAvatar1} width="32" className="me-2"/>
                    <div className="introcard-info">
                        <div className="name">Matt Case</div>
                        <div className="role">CEO Briggity</div>
                    </div>
                </div>
                <div className="mt-2 intro-content">“ This team is really the best in its field,I don't regret working with them, and will come back again thanks “</div>
            </Card.Body>
        </Card>
    )
}

export function ProjectCard() {
    return (
        <Card className="ProjectCard border-0 shadow position-absolute z-3 d-none d-lg-inline">
            <Card.Body className="p-2 d-flex flex-column align-items-center">
                <div className="d-flex align-items-center project-card-title">
                    <Image src={StarIcon} width="24" className="me-2"/>GREAT PROJECT
                </div>
                <div className="project-card-count"><strong>800+ </strong>Done</div>
            </Card.Body>
        </Card>
    )
}