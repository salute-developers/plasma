import { TokenType } from '../types';
import { kebabToCamel } from '../utils';

const getJSVariable = (tokenName: string, description?: string, value?: string) => {
    const JSTokenName = kebabToCamel(`spacing-${tokenName}`);
    const variable = value ? `var(--spacing-${tokenName}, ${value})` : `var(--spacing-${tokenName})`;

    return `/** ${description} */\nexport const ${JSTokenName} = '${variable}';\n`;
};

const getCSSVariable = (tokenName: string, value: string) => {
    return `  --spacing-${tokenName}: ${value};`;
};

const getSpacing = (spacing: any, tokens: TokenType[], kind: 'spacing', isJS = false) =>
    tokens
        .filter((token) => token.tags[0] === kind)
        .map((token) => {
            const [, size] = token.name.split('.');
            const value = spacing?.[token.name];

            if (!value) {
                return getJSVariable(size, token.description);
            }

            if (isJS) {
                return getJSVariable(size, token.description, value);
            }

            return getCSSVariable(size, value);
        })
        .join('\n');

export const createSpacingTokens = (spacing: any, tokens?: Array<TokenType>, isJS = false) => {
    if (!tokens?.length) {
        return {
            dark: '',
            light: '',
        };
    }

    const spacingTokens = getSpacing(spacing, tokens, 'spacing', isJS);

    return {
        dark: spacingTokens,
        light: spacingTokens,
    };
};
