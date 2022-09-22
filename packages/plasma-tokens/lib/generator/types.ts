export type Point = {
    x: number;
    y: number;
};

export interface Gradient {
    colors: Array<string>;
    locations?: Array<string>;
    angle?: number;
    start?: Point;
    end?: Point;
}
