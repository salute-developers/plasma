export interface Variations<
    T1 extends any = any,
    T2 extends any = any,
    T3 extends any = any,
    T4 extends any = any,
    T5 extends any = any,
    T6 extends any = any
> {
    color: T1;
    gradient: T2;
    shape: T4;
    shadow: T3;
    typography: T5;
    fontFamily: T6;
}

export interface Platforms<
    T1 extends Record<string, any> = Record<string, any>,
    T2 extends Record<string, any> = Record<string, any>,
    T3 extends Record<string, any> = Record<string, any>
> {
    web: T1;
    ios: T2;
    android: T3;
}

export type Variation = keyof Variations;

export type Platform = keyof Platforms;

export interface TokenType {
    type: Variation;
    name: string;
    tags: Array<string>;
    displayName: string;
    description?: string;
    enabled: boolean;
}
