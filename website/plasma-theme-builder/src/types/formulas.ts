interface Operation {
    hover: (value: number) => number;
    active: (value: number) => number;
    brightness?: (value: number) => number;
}

interface ConditionHSL {
    lightness: [number, number];
    hue: [number, number];
    saturation: [number, number];
}

interface ConditionAlpha {
    alpha: [number, number];
}

interface SolidCondition {
    condition: ConditionHSL;
    operation: Operation;
}

interface TransparentCondition {
    condition: ConditionAlpha;
    operation: Operation;
}

interface SolidMode {
    light: Array<SolidCondition>;
    dark: Array<SolidCondition>;
}

interface TransparentMode {
    light: Array<TransparentCondition>;
    dark: Array<TransparentCondition>;
}

interface OpacityMode {
    solid: SolidMode;
    transparent: TransparentMode;
}

export interface Formula {
    stroke: OpacityMode;
    fill: OpacityMode;
}

export type FormulaMode = keyof Formula;

export type OperationKind = keyof Operation;
