import {Vector3} from "three";

export type player = number;
export function CubeFaces(props: {rows: number, cols: number, faces: number}) {
    const numberOfItems = props.cols * props.rows * props.faces;
    const items: player[] = Array.from(Array(numberOfItems));
    const getPositionForItem = (position: number): Vector3 => {
        const row= 0;
        const col = 0;
        const face = 0;

        return new Vector3(row, col, face);
    }
    return (<>
            {items.map((x, position)=> {
                return (<mesh position={getPositionForItem(position)}>
                    <boxGeometry/>
                    <meshStandardMaterial/>
                </mesh>)
            })}
        </>
    )
}