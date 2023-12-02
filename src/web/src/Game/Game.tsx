import { Canvas } from '@react-three/fiber'
import {CubeFaces} from "./CubeFaces";
import {CameraControls} from "@react-three/drei";

export function NewGame(): ActiveGame {
    return {
        name: "Game",
    };
}
export interface ActiveGame {
    name: string;
}
export function Game(){

    return <div style={{width: "50vw", height: "50vh"}}>
        <Canvas flat linear>
            <CameraControls/>
            <CubeFaces rows={3} cols={3} faces={4}/>
        </Canvas>
    </div>
}