import Row from "react-bootstrap/Row";
import {Logo} from "./Logo";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

export function AppHeader() {
    return <>
        <Row>
            <Logo/>
        </Row>
    </>
}