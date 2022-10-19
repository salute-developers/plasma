import type { Dictionary, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const BASE_FONT_NAME = 'baseRegular';
const ADDITIONAL_FONT_NAME = 'additionalRegular';

const getReactNativeTemplate = (
    constTypoStyles: string,
    exportTypoStylesContent: string,
    baseFontFamily: string,
    additionalFontFamily: string,
) => {
    const isSameFont = baseFontFamily === additionalFontFamily;

    const header = `/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { TextStyle } from "react-native";
import styled from "styled-components/native";

export interface ColoredTextProps {
  color?: string;
  textAlign?: TextStyle["textAlign"];
  flexShrink?: number;
}

//to remove warn from styled components
const addPx = (value?: number) =>
  (value ?? null) !== null ? \`\${value}px\` : undefined;

const upperCaseStyle = { textTransform: "uppercase" } as const;

const ${BASE_FONT_NAME} = styled({ fontFamily: "${baseFontFamily}" });
const ${BASE_FONT_NAME}Uppercase = styled(${BASE_FONT_NAME})(upperCaseStyle);
${
    isSameFont
        ? ''
        : `
const ${ADDITIONAL_FONT_NAME} = styled({ fontFamily: "${additionalFontFamily}" });
const ${ADDITIONAL_FONT_NAME}Uppercase = styled(${ADDITIONAL_FONT_NAME})(upperCaseStyle);
`
}
export const createFontStyle = (
  fontSize: number,
  lineHeight: number,
  fontWeight: number,
  letterSpacing: string,
  fontStyle: string,
) => ({
  fontSize: addPx(fontSize),
  lineHeight: addPx(lineHeight),
  fontWeight,
  letterSpacing,
  fontStyle,
});
`;
    const defaultTypoComponents = `\n  ${BASE_FONT_NAME},\n  ${BASE_FONT_NAME}Uppercase,${
        isSameFont ? '' : `\n  ${ADDITIONAL_FONT_NAME},\n  ${ADDITIONAL_FONT_NAME}Uppercase,`
    }`;
    const exportTypoStyles = `\nexport const Typography = {${defaultTypoComponents}\n  ${exportTypoStylesContent}\n};`;

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

    const fontFamily = isSameFont ? BASE_FONT_NAME : typoMap[value['font-family']];

    const fontSize = Number(value['font-size'].replace(/rem/gi, '') * defaultFontSize);
    const lineHeight = Number(value['line-height'].replace(/rem/gi, '') * defaultFontSize);
    const fontWeight = value['font-weight'];
    const letterSpacing = `'${value['letter-spacing']}'`;
    const fontStyle = `'${value['font-style']}'`;

    return `const ${upperFirstLetter(name)} = styled(${fontFamily})(createFontStyle(${[
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing,
        fontStyle,
    ].join(', ')}));`;
};

const getConstTypoStyles = (tokenItems: TransformedToken[], baseFontFamily: string, additionalFontFamily: string) =>
    tokenItems.map((item) => getTokenValue(item, baseFontFamily, additionalFontFamily)).join(`\n`);

const getExportTypoStyles = (tokenItems: TransformedToken[]) =>
    tokenItems.map((item) => upperFirstLetter(item.name)).join(`,\n  `);

export const typoReactNativeCustomFormatter = ({ dictionary }: { dictionary: Dictionary }) => {
    const [baseFontFamily, additionalFontFamily] = getFontFamilies(dictionary.allTokens);

    const constTypoStyles = getConstTypoStyles(dictionary.allTokens, baseFontFamily, additionalFontFamily);
    const exportTypoStyles = getExportTypoStyles(dictionary.allTokens);

    return getReactNativeTemplate(constTypoStyles, exportTypoStyles, baseFontFamily, additionalFontFamily);
};
