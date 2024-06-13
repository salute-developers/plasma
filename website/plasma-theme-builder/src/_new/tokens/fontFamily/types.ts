/* WEB */

export type WebFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type WebFontStyle = 'normal' | 'italic';

export interface WebFont {
    src: Array<string>;
    fontWeight: WebFontWeight;
    fontStyle: WebFontStyle;
}

export interface WebFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<WebFont>;
    };
}

/* IOS */

export type IOSFontWeight =
    | 'black'
    | 'bold'
    | 'heavy'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'thin'
    | 'ultraLight';

export type IOSFontStyle = 'normal' | 'italic';

export interface IOSFont {
    link: string;
    weight: IOSFontWeight;
    style: IOSFontStyle;
}

export interface IOSFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<IOSFont>;
    };
}

/* ANDROID */

export type AndroidFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type AndroidFontStyle = 'normal' | 'italic';

export interface AndroidFont {
    link: string;
    fontWeight: AndroidFontWeight;
    fontStyle: AndroidFontStyle;
}

export interface AndroidFontFamilyToken {
    [k: string]: {
        name: string;
        fonts: Array<AndroidFont>;
    };
}
