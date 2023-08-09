import { Button } from "react-bootstrap";

export function PrimaryBlueBtn ({children}) {
    return (
        <Button className="primary-blue-btn rounded-5 fw-bold bg-primary-500 px-5 bg-primary-500">{children}</Button>
    )
}