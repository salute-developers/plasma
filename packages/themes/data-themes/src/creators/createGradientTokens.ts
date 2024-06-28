import { ThemeMode, TokenType } from '../types';
import { kebabToCamel } from '../utils';

const getJSVariable = (tokenName: string, description?: string, value?: string) => {
    const JSTokenName = kebabToCamel(tokenName.replace('-', ''));
    const variable = value ? `var(${tokenName}, ${value})` : `var(${tokenName})`;

    return `/** ${description} */\nexport const ${JSTokenName} = '${variable}';\n`;
};

const getCSSVariable = (tokenName: string, value: string) => {
    return `  ${tokenName}: ${value};`;
};

const getGradient = (gradient: any, tokens: TokenType[], mode: ThemeMode, isJS = false) =>
    tokens
        .filter((token) => token.tags[0] === mode)
        .map((token) => {
            const [, category, subcategory, name] = token.name.split('.');
            const tokenName = [subcategory === 'default' ? '-' : `--${subcategory}`, category, name].join('-');
            const value = gradient?.[token.name];

            if (!value) {
                return getJSVariable(tokenName, token.description);
            }

            if (isJS) {
                return getJSVariable(tokenName, token.description, value);
            }

            return getCSSVariable(tokenName, value);
        })
        .join('\n');

export const createGradientTokens = (gradient: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: '',
            light: '',
        };
    }

    const darkGradient = getGradient(gradient, tokens, 'dark', isJS);
    const lightGradient = getGradient(gradient, tokens, 'light', isJS);

    return {
        dark: darkGradient,
        light: lightGradient,
    };
};
