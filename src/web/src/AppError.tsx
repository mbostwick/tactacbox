import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

export function AppError(props: {error?: string}) {
    let navigate = useNavigate();
    return <>
        <Container>
            <AppHeader />
            <Row>
                <Col md={{span:8, offset:2}}>
                    <Card className="mt-2 p-2 bg-white border border-dark rounded text-center">
                        <Card.Body>
                            <Card.Title>
                                    <span className="float-end">
                                </span>
                            </Card.Title>
                            {props.error ? props.error : "Yikes An Unexpected Error!" }
                        </Card.Body>
                    </Card>
                    <div className="d-grid gap-2 mt-2 p-2">
                        <Button variant="primary" size="lg" onClick={()=> {navigate("/")}} >
                            Return Home
                        </Button>
                    </div>
                </Col>
            </Row>
            <AppFooter/>
        </Container>
    </>
}