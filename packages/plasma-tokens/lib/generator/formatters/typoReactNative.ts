import type { Dictionary, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../tokensGenerator/utils';

const BASE_FONT_NAME = 'base';
const ADDITIONAL_FONT_NAME = 'additional';

const fontWeightMap: Record<string, string> = {
    '100': 'thin',
    '200': 'ultraLight',
    '300': 'light',
    '400': 'regular',
    '500': 'medium',
    '600': 'semiBold',
    '700': 'bold',
    '800': 'heavy',
    '900': 'black',
};

const getFontWeightStyles = (fontType: string, fontName: string) => `/**
 * do not use directly
 * use fonts from "relevant" section
 */
const ${fontType}Regular = styled(Text)({
  fontFamily: '${fontName}-Regular',
})

/**
 * do not use directly
 * use fonts from "relevant" section
 */
const ${fontType}SemiBold = styled(Text)({
  fontFamily: '${fontName}-SemiBold',
})

/**
 * do not use directly
 * use fonts from "relevant" section
 */
const ${fontType}Bold = styled(Text)({fontFamily: '${fontName}-Bold'})

/**
 * do not use directly
 * use fonts from "relevant" section
 */
const ${fontType}BoldUppercase = styled(${fontType}Bold)(upperCaseStyle)`;

const getFontWeightImports = (fontType: string) => `/**
   * @deprecated
   * use fonts from "relevant" section
   */
  ${fontType}Regular,
  /**
   * @deprecated
   * use fonts from "relevant" section
   */
  ${fontType}SemiBold,
  /**
   * @deprecated
   * use fonts from "relevant" section
   */
  ${fontType}Bold,
  /**
   * @deprecated
   * use fonts from "relevant" section
   */
  ${fontType}BoldUppercase,`;

const getReactNativeTemplate = (
    constTypoStylesContent: string,
    exportTypoStylesContent: string,
    baseFontFamily: string,
    additionalFontFamily: string,
) => {
    const baseFontFamilyName = baseFontFamily.replace(/ /g, '');
    const additionalFontFamilyName = additionalFontFamily.replace(/ /g, '');

    const isSameFont = baseFontFamily === additionalFontFamily;

    const header = `/* eslint-disable @typescript-eslint/no-magic-numbers */
import {Text} from 'react-native'
import styled from 'styled-components/native'

/**
 * @description
 * Design System 2.0 typo
 * do not add custom typo / custom deps here
 */

// to remove warn from styled components
const addPx = (value?: number) =>
  (value ?? null) !== null ? \`\${value}px\` : undefined

const upperCaseStyle = {textTransform: 'uppercase'} as const

${getFontWeightStyles(BASE_FONT_NAME, baseFontFamilyName)}
${isSameFont ? '' : `\n${getFontWeightStyles(ADDITIONAL_FONT_NAME, additionalFontFamilyName)}\n`}
/**
 * @deprecated
 * do not use directly
 * use fonts from "relevant" section
 */
export const createFontStyle = (fontSize: number, lineHeight: number) => ({
  fontSize: addPx(fontSize),
  lineHeight: addPx(lineHeight),
})

const createNewFontStyle = (
  fontSize: number,
  lineHeight: number,
  letterSpacing?: number,
  fontStyle: 'normal' | 'italic' = 'normal',
) => ({
  ...createFontStyle(fontSize, lineHeight),
  letterSpacing: addPx(letterSpacing),
  fontStyle,
})
`;

    const defaultTypoComponents = `\n  ${getFontWeightImports(BASE_FONT_NAME)}${
        isSameFont ? '' : `\n  ${getFontWeightImports(ADDITIONAL_FONT_NAME)}`
    }`;

    const deprecatedTypo = `  /**
   * @deprecated
   * use H3Bold
   */
  Title1: H3Bold,
  /**
   * @deprecated
   * use H4Bold
   */
  Title2: H4Bold,
  /**
   * @deprecated
   * use BodyL
   */
  Headline: BodyL,
  /**
   * @deprecated
   * use BodyLBold
   */
  HeadlineSemibold: BodyLBold,
  /**
   * @deprecated
   * use BodyM
   */
  Body: BodyM,
  /**
   * @deprecated
   * use BodyMBold
   */
  BodySemibold: BodyMBold,
  /**
   * @deprecated
   * use BodyS
   */
  Footnote: BodyS,
  /**
   * @deprecated
   * use BodySBold
   */
  FootnoteSemibold: BodySBold,
  /**
   * @deprecated
   * use BodyXs
   */
  Caption: BodyXs,
  /**
   * @deprecated
   * use H5Bold
   */
  BodyBold: H5Bold,

  /**
   * new (relevant) fonts
   */
`;

    const exportTypoStyles = `\nexport const Typography = {${defaultTypoComponents}\n${deprecatedTypo}  ${exportTypoStylesContent}\n}\n`;

    const constTypoStyles = `/**
   new (relevant) fonts
 */
${constTypoStylesContent}`;

    return [header, constTypoStyles, exportTypoStyles].join('\n');
};

const getFontFamilies = (tokenItems: TransformedToken[]): readonly [string, string] => {
    const [baseFontFamily, additionalFontFamily] = tokenItems.filter(
        ({ name }) => name === 'dsplL' || name === 'bodyL',
    );

    return [
        baseFontFamily?.value['font-family'] || 'SB Sans Display',
        additionalFontFamily?.value['font-family'] || 'SB Sans Text',
    ];
};

const getTokenValue = (token: TransformedToken, baseFontFamily: string, additionalFontFamily: string) => {
    const { name, value } = token;
    const defaultFontSize = 16;
    const isSameFont = baseFontFamily === additionalFontFamily;

    const typoMap: Record<string, string> = {
        [baseFontFamily]: BASE_FONT_NAME,
        [additionalFontFamily]: ADDITIONAL_FONT_NAME,
    };

    const fontSize = Number(value['font-size'].replace(/rem/gi, '') * defaultFontSize);
    const lineHeight = Number(value['line-height'].replace(/rem/gi, '') * defaultFontSize);
    const letterSpacing =
        value['letter-spacing'] === 'normal'
            ? undefined
            : Number(value['letter-spacing'].replace(/r?em/gi, '') * fontSize);
    const fontStyle = value['font-style'] === 'normal' ? undefined : value['font-style'];
    const family = isSameFont ? BASE_FONT_NAME : typoMap[value['font-family']];
    const fontFamily = family + upperFirstLetter(fontWeightMap[value['font-weight']]);

    const styles = [fontSize, lineHeight];

    if (letterSpacing) {
        styles.push(letterSpacing);
    }

    if (fontStyle) {
        styles.push(fontStyle);
    }

    return `const ${upperFirstLetter(name)} = styled(${fontFamily})(createNewFontStyle(${styles.join(', ')}))`;
};

const getConstTypoStyles = (tokenItems: TransformedToken[], baseFontFamily: string, additionalFontFamily: string) =>
    tokenItems.map((item) => getTokenValue(item, baseFontFamily, additionalFontFamily)).join(`\n`);

const getExportTypoStyles = (tokenItems: TransformedToken[]) =>
    tokenItems.map((item) => `${upperFirstLetter(item.name)},`).join(`\n  `);

export const typoReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const [baseFontFamily, additionalFontFamily] = getFontFamilies(dictionary.allTokens);

    const constTypoStyles = getConstTypoStyles(dictionary.allTokens, baseFontFamily, additionalFontFamily);
    const exportTypoStyles = getExportTypoStyles(dictionary.allTokens);

    return getReactNativeTemplate(constTypoStyles, exportTypoStyles, baseFontFamily, additionalFontFamily);
};
