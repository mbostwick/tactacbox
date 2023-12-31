import React from "react"
import {useGesture, UserHandlers, GestureHandlers} from "@use-gesture/react";
import {a, useSpring} from "@react-spring/three";
import { useThree } from '@react-three/fiber'
import {Euler} from "three";


function defaultSpringConfig():{
    scale: [x: number, y: number, z: number]
    position: [x: number, y: number, z: number]
    rotation: Euler
    config: {
        friction: number
    }
} {
    return {
        scale: [1, 1, 1],
        position: [0, 0, 0],
        rotation: new Euler(0, 0, 0),
        config: {friction: 10}
    };
}
function Dodecahedron() {
    const {size, viewport} = useThree()
    const aspect = size.width / viewport.width

    const [spring, set] = useSpring(() => defaultSpringConfig());
    const onDrag = ({offset: [x, y]} : {offset: [x: number, y: number]}) => set({
        position: [x / aspect, -y / aspect, 0],
        rotation: new Euler(x / aspect, y / aspect, 0)
    });
    const onHover = (e: unknown | {hovering: boolean}) => {
        console.log("hob")
        set({
            scale: !!(e as { hovering: boolean })?.hovering ? [1.2, 1.2, 1.2] : [1, 1, 1]
        });
    }
    const config: GestureHandlers = {
        onDrag,
        onHover,
    };
    // noinspection JSVoidFunctionReturnValueUsed the upstream types are the issue with this function
    const gestureConfig:() => object = useGesture(config) as unknown as () => object;
    return (<a.mesh {...gestureConfig()} {...spring} castShadow>
        <dodecahedronGeometry args={[1.4, 0]}/>
        <meshNormalMaterial/>
    </a.mesh>)
}

export function MovingShape() {
    return <>
        <ambientLight intensity={0.5}/>
        <spotLight intensity={0.6} position={[20, 10, 10]} angle={0.2} penumbra={1} shadow-mapSize-width={2048}
                   shadow-mapSize-height={2048} castShadow/>
        <Dodecahedron />
    </>

}