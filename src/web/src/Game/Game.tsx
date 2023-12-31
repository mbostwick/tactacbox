import { Canvas } from '@react-three/fiber'
import {CubeFaces} from "./CubeFaces";
import {CameraControls} from "../Vendor/CameraControls";
import {MovingShape} from "./MovingShape";

export function NewGame(): ActiveGame {
    return {
        name: "Game",
    };
}
export interface ActiveGame {
    name: string;
}
export function Game(){
    /*
            <CubeFaces row={3} col={3} face={3}/>
            <CameraControls />
     */
    return <div style={{ width: "100%"}}>
        <Canvas flat linear className="mvh-100">
            <MovingShape />
        </Canvas>
    </div>
}