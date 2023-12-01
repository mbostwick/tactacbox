import { Canvas } from "react-three-fiber";
import {Scene} from "./Scene";

export function NewGame(): ActiveGame {
    return {
        name: "Game",
    };
}
export interface ActiveGame {
    name: string;
}
export function Game(){
    return <>
        <Canvas>
            <Scene />
        </Canvas>
    </>
}