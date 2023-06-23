export type GradientType = '.linear' | '.radial';

export type PointNameSwift = 'startPoint' | 'endPoint';

export type PointNameXML = PointNameSwift | 'center' | 'radius';

export interface Point {
    x: number;
    y: number;
}

export interface Swift {
    kind: string;
    type: GradientType;
    colors: string[];
    locations: number[];
    startPoint: Point;
    endPoint: Point;
}

export interface XML {
    kind: string;
    type: GradientType;
    colors: string[];
    locations: number[];
    startPoint?: Point;
    endPoint?: Point;
    center?: Point;
    radius?: Point;
}
