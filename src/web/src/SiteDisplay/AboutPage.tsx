import {AppHeader} from "../AppHeader";
import {AppFooter} from "../AppFooter";
import {Container, Row} from "react-bootstrap";

export function AboutPage() {
    return <>
        <Container>
            <Row>
                <AppHeader/>
            </Row>
            <Row>
                <div className="jumbotron">
                    <h2 className="display-4"> About </h2>
                    <p>
                        A simple game to for showing some complex subjects.
                    </p>
                </div>
            </Row>
            <Row>
                <AppFooter/>
            </Row>
        </Container>
    </>
}