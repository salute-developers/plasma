import { TokenType } from '../types';
import { kebabToCamel } from '../utils';

const fontMap: Record<string, string> = {
    display: 'var(--plasma-typo-display-font-family)',
    body: 'var(--plasma-typo-body-font-family)',
    header: 'var(--plasma-typo-header-font-family)',
    text: 'var(--plasma-typo-text-font-family)',
};

const fontWeightMap: Record<string, string> = {
    bold: 'bold',
    medium: 'medium',
    normal: '',
};

const formattedTokenName = (nameParts: string[]) => {
    const nameMap: Record<string, string> = {
        display: 'dspl',
        text: 'text',
        body: 'body',
    };

    const tokenName = [...nameParts];
    tokenName[0] = nameMap[tokenName[0]];
    tokenName[2] = fontWeightMap[tokenName[2]];

    return tokenName.filter(Boolean).join('-');
};

const geBaseFonts = (display: string, body: string, header: string, text: string) => `  font-size: 16px;
  --plasma-typo-overflow-wrap: break-word;
  --plasma-typo-hyphens: auto;
  --plasma-typo-display-font-family: '${display}', sans-serif;
  --plasma-typo-body-font-family: '${body}', sans-serif;
  --plasma-typo-header-font-family: '${header}', sans-serif;
  --plasma-typo-text-font-family: '${text}', sans-serif;`;

const getTypographyBase = (typography: any, fontFamily: any, tokens: TokenType[], size: 'screen-s') => {
    const fonts = tokens
        .filter((token) => token.tags[0] === size)
        .reduce((acc: Record<string, string>, token) => {
            const [, ...rest] = token.name.split('.');
            const kind = rest[0];
            const value = typography?.[token.name];

            if (acc[kind] || !value) {
                return acc;
            }

            const fontFamilyRef = fontFamily?.[value.fontFamilyRef.split('.')[1]].name;

            return {
                [kind]: fontFamilyRef,
                ...acc,
            };
        }, {});

    return geBaseFonts(fonts.display, fonts.body, fonts.header, fonts.text);
};

const getTypographyRoot = (typography: any, tokens: TokenType[], size: 'screen-s') =>
    tokens
        .filter((token) => token.tags[0] === size)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const tokenName = formattedTokenName(rest);
            const value = typography?.[token.name];

            if (!value) {
                return '';
            }

            const fontFamily = fontMap[value.fontFamilyRef.split('.')[1]];
            const { letterSpacing, fontStyle } = value;

            return `  --plasma-typo-${tokenName}-font-family: ${fontFamily};
  --plasma-typo-${tokenName}-letter-spacing: ${letterSpacing};
  --plasma-typo-${tokenName}-font-style: ${fontStyle};`;
        })
        .join('\n');

const getJSVariable = (tokenName: string, description?: string) => {
    // INFO: Приведение размера Xs+ в верхний регистр для сохранения обратной совместимости
    const JSTokenName = kebabToCamel(tokenName).replace(/(Xx*s)/gm, (_, group) => group.toUpperCase());

    return `/** ${description} */
export const ${JSTokenName} = {
    fontFamily: 'var(--plasma-typo-${tokenName}-font-family)',
    fontSize: 'var(--plasma-typo-${tokenName}-font-size)',
    fontStyle: 'var(--plasma-typo-${tokenName}-font-style)',
    fontWeight: 'var(--plasma-typo-${tokenName}-font-weight)',
    letterSpacing: 'var(--plasma-typo-${tokenName}-letter-spacing)',
    lineHeight: 'var(--plasma-typo-${tokenName}-line-height)',
};
`;
};

const getCSSVariable = (tokenName: string, value: any) => {
    return `  --plasma-typo-${tokenName}-font-size: ${value.fontSize};
  --plasma-typo-${tokenName}-font-weight: ${value.fontWeight};
  --plasma-typo-${tokenName}-line-height: ${value.lineHeight};`;
};

const getResponsiveTypography = (
    typography: any,
    tokens: TokenType[],
    size: 'screen-s' | 'screen-m' | 'screen-l',
    isJS = false,
) =>
    tokens
        .filter((token) => token.tags[0] === size)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const tokenName = formattedTokenName(rest);
            const value = typography?.[token.name];

            if (isJS || !value) {
                return getJSVariable(tokenName, token.description);
            }

            return getCSSVariable(tokenName, value);
        })
        .join('\n');

export const createTypographyTokens = (typography: any, fontFamily: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: {
                root: '',
                screenS: '',
                screenM: '',
                screenL: '',
            },
            light: {
                root: '',
                screenS: '',
                screenM: '',
                screenL: '',
            },
        };
    }

    const rootTypography = `${getTypographyBase(typography, fontFamily, tokens, 'screen-s')}\n${getTypographyRoot(
        typography,
        tokens,
        'screen-s',
    )}`;

    const screenSTypography = getResponsiveTypography(typography, tokens, 'screen-s', isJS);
    const screenMTypography = getResponsiveTypography(typography, tokens, 'screen-m', isJS);
    const screenLTypography = getResponsiveTypography(typography, tokens, 'screen-l', isJS);

    const data = {
        root: rootTypography,
        screenS: screenSTypography,
        screenM: screenMTypography,
        screenL: screenLTypography,
    };

    return {
        dark: data,
        light: data,
    };
};
