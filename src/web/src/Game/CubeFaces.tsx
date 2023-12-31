
export interface CubePosition {
    row: number
    col: number
    face: number
}

export const Spacer = 2;

export function GetNumberOfShapes(shape: CubePosition){
    return (shape.row * shape.col ) * shape.face;
}
export function buildShapes(farPointShape: CubePosition): CubePosition[]{
    const numberOfShapes = GetNumberOfShapes(farPointShape);
    const shapes: CubePosition[] = Array.from(Array(numberOfShapes));
    let shapeKey = numberOfShapes-1;
    for(const [rowI]  of Array.from(Array(farPointShape.row)).entries()){
        for(const [colI] of Array.from(Array(farPointShape.col)).entries()){
            for(const [faceI] of Array.from(Array(farPointShape.face)).entries()){
                shapes[shapeKey] = {
                    row: rowI,
                    col: colI,
                    face: faceI,
                }
                shapeKey -= 1;
            }
        }
    }
    return shapes;
}
export function getPositionForShape(givenPosition: CubePosition): [x: number, y: number, z: number] {

    return [
        (givenPosition.row * Spacer) + Spacer,
        (givenPosition.col * Spacer) + Spacer,
        (givenPosition.face * Spacer) + Spacer
    ];
}

export type player = number;
export function CubeFaces(props: CubePosition) {
    const shapes = buildShapes(props);

    return (<>
            {shapes.map((x, position)=> {
                return (<mesh key={position} position={getPositionForShape(x)}>
                    <boxGeometry/>
                    <meshStandardMaterial/>
                </mesh>)
            })}
        </>
    )
}