import { TokenType } from '../types';
import { kebabToCamel } from '../utils';

const getJSVariable = (tokenName: string, description?: string, value?: string) => {
    const JSTokenName = kebabToCamel(`border-radius-${tokenName}`);
    const variable = value ? `var(--border-radius-${tokenName}, ${value})` : `var(--border-radius-${tokenName})`;

    return `/** ${description} */\nexport const ${JSTokenName} = '${variable}';\n`;
};

const getCSSVariable = (tokenName: string, value: string) => {
    return `  --border-radius-${tokenName}: ${value};`;
};

const getShape = (shape: any, tokens: TokenType[], kind: 'round', isJS = false) =>
    tokens
        .filter((token) => token.tags[0] === kind)
        .map((token) => {
            const [, size] = token.name.split('.');
            const value = shape?.[token.name];

            if (!value) {
                return getJSVariable(size, token.description);
            }

            if (isJS) {
                return getJSVariable(size, token.description, value);
            }

            return getCSSVariable(size, value);
        })
        .join('\n');

export const createShapeTokens = (shape: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: '',
            light: '',
        };
    }

    const roundShape = getShape(shape, tokens, 'round', isJS);

    return {
        dark: roundShape,
        light: roundShape,
    };
};
