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

export const enum ThemeColor {
    light = 'light',
    dark = 'dark',
}

export type ThemeColorType = keyof typeof ThemeColor;

export interface GradientToken {
    startColor: string;
    endColor: string;
    startPoint: string;
    endPoint: string;
}
