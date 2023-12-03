import {Vector3} from "@react-three/fiber";


export type player = number;
export function CubeFaces(props: {rows: number, cols: number, faces: number}) {
    const numberOfItems = props.cols * props.rows * props.faces;
    const items: player[] = Array.from(Array(numberOfItems));
    const getPositionForItem = (position: number): Vector3 => {
        const space = 2;
        const row= Math.floor(position/ props.rows) + (position % props.rows) * space;
        const col = Math.floor(position/ props.cols) + (position % props.cols) * space;
        const face = Math.floor(position/ props.faces) + (position % props.faces) * space;

        return [row, col, face];
    }
    return (<>
            {items.map((x, position)=> {
                return (<mesh key={position} position={getPositionForItem(position)}>
                    <boxGeometry/>
                    <meshStandardMaterial/>
                </mesh>)
            })}
        </>
    )
}