import type { CSSObject } from 'styled-components';

export {
    dsplL,
    dsplLBold,
    dsplM,
    dsplMBold,
    dsplS,
    dsplSBold,
    h1,
    h1Bold,
    h2,
    h2Bold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    h5,
    h5Bold,
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    bodyXXS,
    bodyXXSBold,
    textL,
    textLBold,
    textM,
    textMBold,
    textS,
    textSBold,
    textXS,
    textXSBold,
    body1,
    body2,
    body3,
    button1,
    button2,
    caption,
    display1,
    display2,
    display3,
    footnote1,
    footnote2,
    headline1,
    headline2,
    headline3,
    headline4,
    paragraph1,
    paragraph2,
    underline,
} from '@salutejs/plasma-new-hope/styled-components';

export const fieldTypo = ({
    fontFamily: 'var(--plasma-field-font-family)',
    fontSize: 'var(--plasma-field-font-size)',
    fontStyle: 'var(--plasma-field-font-style)',
    fontWeight: 'var(--plasma-field-font-weight)',
    letterSpacing: 'var(--plasma-field-letter-spacing)',
    lineHeight: 'var(--plasma-field-line-height)',
} as unknown) as CSSObject;

export const fieldHelperTextTypo = ({
    fontFamily: 'var(--plasma-field-helper-text-font-family)',
    fontSize: 'var(--plasma-field-helper-text-font-size)',
    fontStyle: 'var(--plasma-field-helper-text-font-style)',
    fontWeight: 'var(--plasma-field-helper-text-font-weight)',
    letterSpacing: 'var(--plasma-field-helper-text-letter-spacing)',
    lineHeight: 'var(--plasma-field-helper-text-line-height)',
} as unknown) as CSSObject;

export const headline5 = ({
    fontFamily: "var(--plasma-typo-headline5-font-family, 'SB Sans Text',sans-serif)",
    fontWeight: 'var(--plasma-typo-headline5-font-weight, 600)',
    fontStyle: 'var(--plasma-typo-headline5-font-style, normal)',
    fontSize: 'var(--plasma-typo-headline5-font-size, 1rem)',
    letterSpacing: 'var(--plasma-typo-headline5-letter-spacing, -0.0190em)',
    lineHeight: 'var(--plasma-typo-headline5-line-height, 1.25rem)',
} as unknown) as CSSObject;

export const inputTypo = ({
    fontFamily: 'var(--plasma-input-font-family)',
    fontSize: 'var(--plasma-input-font-size)',
    fontStyle: 'var(--plasma-input-font-style)',
    fontWeight: 'var(--plasma-input-font-weight)',
    letterSpacing: 'var(--plasma-input-letter-spacing)',
    lineHeight: 'var(--plasma-input-line-height)',
} as unknown) as CSSObject;

export const inputLabelTypo = ({
    fontFamily: 'var(--plasma-input-label-font-family)',
    fontSize: 'var(--plasma-input-label-font-size)',
    fontStyle: 'var(--plasma-input-label-font-style)',
    fontWeight: 'var(--plasma-input-label-font-weight)',
    letterSpacing: 'var(--plasma-input-label-letter-spacing)',
    lineHeight: 'var(--plasma-input-label-line-height)',
} as unknown) as CSSObject;

export const subtitle = ({
    fontFamily: "var(--plasma-typo-subtitle-font-family, 'SB Sans Text',sans-serif)",
    fontWeight: 'var(--plasma-typo-subtitle-font-weight, 400)',
    fontStyle: 'var(--plasma-typo-subtitle-font-style, normal)',
    fontSize: 'var(--plasma-typo-subtitle-font-size, 1.25rem)',
    letterSpacing: 'var(--plasma-typo-subtitle-letter-spacing, -0.0190em)',
    lineHeight: 'var(--plasma-typo-subtitle-line-height, 1.5rem)',
} as unknown) as CSSObject;
