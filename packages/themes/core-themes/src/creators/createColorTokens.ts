import { getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';

import { ThemeMode, TokenType } from '../types';
import { kebabToCamel } from '../utils';

const baseColor = `  color: var(--text-primary);
  background-color: var(--background-primary);`;

const getJSVariable = (tokenName: string, description?: string, value?: string) => {
    const JSTokenName = kebabToCamel(tokenName.replace('-', ''));
    const variable = value ? `var(${tokenName}, ${value})` : `var(${tokenName})`;

    return `/** ${description} */\nexport const ${JSTokenName} = '${variable}';\n`;
};

const getCSSVariable = (tokenName: string, value: string) => {
    return `  ${tokenName}: ${value};`;
};

const getColor = (color: any, tokens: TokenType[], mode: ThemeMode, isJS = false) =>
    tokens
        .filter((token) => token.tags[0] === mode)
        .map((token) => {
            const [, category, subcategory, name] = token.name.split('.');
            const tokenName = [subcategory === 'default' ? '-' : `--${subcategory}`, category, name].join('-');
            const value = color?.[token.name];

            if (!value) {
                return getJSVariable(tokenName, token.description, value);
            }

            const restoredValue = getRestoredColorFromPalette(value, -1);

            if (isJS) {
                return getJSVariable(tokenName, token.description, restoredValue);
            }

            return getCSSVariable(tokenName, restoredValue);
        })
        .join('\n');

export const createColorTokens = (color: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: '',
            light: '',
        };
    }

    const darkColor = `${getColor(color, tokens, 'dark', isJS)}${isJS ? '' : `\n${baseColor}`}`;
    const lightColor = `${getColor(color, tokens, 'light', isJS)}${isJS ? '' : `\n${baseColor}`}`;

    return {
        dark: darkColor,
        light: lightColor,
    };
};
