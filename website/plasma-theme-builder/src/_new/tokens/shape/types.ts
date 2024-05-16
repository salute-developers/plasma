/* WEB */

export interface WebShapeToken {
    [k: string]: string;
}

/* IOS */

export interface IOSShapeToken {
    [k: string]: {
        kind: 'round';
        cornerRadius: number;
    };
}

/* ANDROID */

export interface AndroidShapeToken {
    [k: string]: {
        kind: 'round';
        cornerRadius: number;
    };
}
