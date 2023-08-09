import { Card, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon, IntroIcon } from "../assets";

export function ServiceCard ({icon, title, subtitle, link}) {
    return (
        <Card className="ServiceCard border-0 shadow" >
            <Card.Body className="text-center">
                <span className="bg-primary-50 p-3 mt-3 rounded-2 d-flex justify-content-center w-20 mx-auto"><Image src={icon} className="mb-2" height="32" width="32"/></span>                
                <Card.Title className="my-3">{title}</Card.Title>
                <Card.Subtitle className="mb-3">{subtitle}</Card.Subtitle>
                <NavLink to={link} className="nav-link mb-3 text-primary-500 pb-1">Learn More <Image src={ArrowRightIcon} className="ms-2" width="24"/></NavLink>
            </Card.Body>
        </Card>
    )
}

export function TeamMemberCard({avatar, name, role}) {
    return (
        <Card className="TeamMemberCard border-0">
            <Card.Body className="text-center">                
                <Image src={avatar} width="200" className="rounded-5"/>
                <Card.Title className="my-3">{name}</Card.Title>
                <Card.Subtitle className="mb-3">{role}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export function IntroCard () {
    return (
        <Card className="IntroCard border-0 shadow">

        </Card>
    )
}