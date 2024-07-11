import { TokenType } from '../types';
import { kebabToCamel } from '../utils';

const getJSVariable = (tokenName: string, description?: string, value?: string) => {
    const JSTokenName = kebabToCamel(`shadow-${tokenName}`);
    const variable = value ? `var(--shadow-${tokenName}, ${value})` : `var(--shadow-${tokenName})`;

    return `/** ${description} */\nexport const ${JSTokenName} = '${variable}';\n`;
};

const getCSSVariable = (tokenName: string, value: string[]) => {
    return `  --shadow-${tokenName}: ${value.join(', ')};`;
};

const getShadow = (shadow: any, tokens: TokenType[], direction: 'down' | 'up', isJS = false) =>
    tokens
        .filter((token) => token.tags[0] === direction)
        .map((token) => {
            const tokenName = token.name.split('.').join('-');
            const value = shadow?.[token.name];

            if (!value) {
                return getJSVariable(tokenName, token.description);
            }

            if (isJS) {
                return getJSVariable(tokenName, token.description, value);
            }

            return getCSSVariable(tokenName, value);
        })
        .join('\n');

export const createShadowTokens = (shadow: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: '',
            light: '',
        };
    }

    const shadows = `${getShadow(shadow, tokens, 'down', isJS)}\n${getShadow(shadow, tokens, 'up', isJS)}`;

    return {
        dark: shadows,
        light: shadows,
    };
};
