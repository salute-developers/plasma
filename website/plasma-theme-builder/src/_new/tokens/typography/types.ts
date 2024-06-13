import {
    AndroidFontStyle,
    AndroidFontWeight,
    IOSFontStyle,
    IOSFontWeight,
    WebFontStyle,
    WebFontWeight,
} from '../fontFamily';

/* WEB */

export interface WebTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        fontWeight: WebFontWeight;
        fontStyle: WebFontStyle;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
    };
}

/* IOS */

export interface IOSTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        weight: IOSFontWeight;
        style: IOSFontStyle;
        size: number;
        lineHeight: number;
        kerning: number;
    };
}

/* ANDROID */

export interface AndroidTypographyToken {
    [k: string]: {
        fontFamilyRef: string;
        fontWeight: AndroidFontWeight;
        fontStyle: AndroidFontStyle;
        textSize: number;
        lineHeight: number;
        letterSpacing: number;
    };
}
