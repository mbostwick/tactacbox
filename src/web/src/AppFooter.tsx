import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function AppFooter() {
    return <>
        <hr />
        <Row className="align-self-end bg-white">
            <Col className="m-2">
                <Button variant={"link"} href={"/about"}>
                    About
                </Button>
            </Col>
            <Col className="m-2">
                <Button variant={"link"} href={"/terms"}>
                    Terms
                </Button>
            </Col>
            <Col md="auto" className="m-2">
                <Button variant={"link"} href={"/privacy"}>
                    Privacy
                </Button>
            </Col>
        </Row>
    </>
}