/* WEB */

export interface WebShadowToken {
    [k: string]: Array<string>;
}

/* IOS */

export interface IOSShadowToken {
    [k: string]: {
        color: string;
        offset: {
            width: number;
            height: number;
        };
        opacity: number;
        radius: number;
    };
}

/* ANDROID */

export interface AndroidShadowToken {
    [k: string]: {
        color: string;
        elevation: number;
    };
}
