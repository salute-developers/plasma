/* WEB */

export interface WebGradientToken {
    [k: string]: Array<string>;
}

/* IOS */

export interface IOSLinearGradient {
    kind: 'linear';
    locations: Array<number>;
    colors: Array<string>;
    angle: number;
}

export interface IOSRadialGradient {
    kind: 'radial';
    locations: Array<number>;
    colors: Array<string>;
    startPointX: number;
    startPointY: number;
    endPointX: number;
    endPointY: number;
}

export interface IOSAngularGradient {
    kind: 'angular';
    locations: Array<number>;
    colors: Array<string>;
    startAngle: number;
    endAngle: number;
    centerX: number;
    centerY: number;
}

export interface IOSColorGradient {
    kind: 'color';
    background: string;
}

export interface IOSGradientToken {
    [k: string]: Array<IOSLinearGradient | IOSRadialGradient | IOSAngularGradient | IOSColorGradient>;
}

/* ANDROID */

export interface AndroidLinearGradient {
    kind: 'linear';
    locations: Array<number>;
    colors: Array<string>;
    angle: number;
}

export interface AndroidRadialGradient {
    kind: 'radial';
    locations: Array<number>;
    colors: Array<string>;
    centerX: number;
    centerY: number;
    radius: number;
}

export interface AndroidAngularGradient {
    kind: 'angular';
    locations: Array<number>;
    colors: Array<string>;
    centerX: number;
    centerY: number;
}

export interface AndroidColorGradient {
    kind: 'color';
    background: string;
}

export interface AndroidGradientToken {
    [k: string]: Array<AndroidLinearGradient | AndroidRadialGradient | AndroidAngularGradient | AndroidColorGradient>;
}
