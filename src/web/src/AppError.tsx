import {Container, Button, Card, Row, Col } from "react-bootstrap";
import {AppHeader} from "./AppHeader";
import {AppFooter} from "./AppFooter";
import {useNavigate} from "react-router-dom";
import React from "react";


export function AppError(props: {error?: string}) {
    let navigate = useNavigate();
    const clickHome = () => {
        navigate("/");
    }
    return (<>
        <Container>
            <AppHeader />
            <Row>
                <Col md={{span:8, offset:2}}>
                    <Card className="mt-2 p-2 bg-white border border-dark rounded text-center">
                        <Card.Body>
                            {props.error ? props.error : "Yikes An Unexpected Error!" }
                        </Card.Body>
                    </Card>
                    <Button variant="primary" size="lg" onClick={clickHome} >
                        Return Home
                    </Button>
                </Col>
            </Row>
            <AppFooter/>
        </Container>
    </>);
}