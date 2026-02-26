import { describe, test, expect } from 'vitest'
import {CubePosition, GetNumberOfShapes} from "../Game/CubeFaces";

describe('Cube Face Tests', () => {
    test('Gets Number Of Shapes (1)', () => {
        const shape: CubePosition = {
            col: 1,
            face: 1,
            row: 1
        }
        const totalShapes = GetNumberOfShapes(shape);
        expect(totalShapes).toBe(1);
    })
    test('Gets Number Of Shapes (4)', () => {
        const shape: CubePosition = {
            col: 4,
            face: 4,
            row: 4
        }
        const totalShapes = GetNumberOfShapes(shape);
        expect(totalShapes).toBe(64);
    })
});
