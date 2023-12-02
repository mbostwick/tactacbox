import {useAppStore} from "../AppState";
import {Container} from "react-bootstrap";
import {AppHeader} from "../AppHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {AppFooter} from "../AppFooter";
import {useNavigate} from "react-router-dom";
import {RustApp} from "../App";
import {Game} from "../Game/Game";

export function GameLanding(props: {rustFeatures: RustApp}){
    const activeGame = useAppStore(state => state.game);
    const navigate = useNavigate();
    return <>
            <Container>
                <AppHeader />
                <Row>
                    <Game />
                </Row>
                <AppFooter/>
            </Container>
    </>
}