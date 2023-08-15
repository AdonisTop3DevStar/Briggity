import { Button } from "react-bootstrap";

export function PrimaryBlueBtn ({children}) {
    return (
        <Button className="primary-blue-btn rounded-2 fw-bold px-5  bg-primary-blue">{children}</Button>
    )
}

export function ContactBtn ({children}) {
    return (
        <Button className="rounded-2 fw-bold px-5 bg-white">{children}</Button>
    )
}