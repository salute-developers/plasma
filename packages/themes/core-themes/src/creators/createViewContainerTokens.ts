import { ThemeMode, TokenType } from '../types';

const getCSSVariable = (tokenName: string, value: string) => {
    return `        ${tokenName}: var(${value});`;
};

const getOppositeValue = (mode: ThemeMode, category: string, subcategory: string, name: string) => {
    const [darkSubcategory, lightSubcategory] = category === 'background' ? ['dark', 'light'] : ['on-dark', 'on-light'];

    if ((mode === 'dark' && subcategory === 'default') || (mode === 'light' && subcategory === 'inverse')) {
        return ['-', darkSubcategory, category, name].join('-');
    }

    if ((mode === 'dark' && subcategory === 'inverse') || (mode === 'light' && subcategory === 'default')) {
        return ['-', lightSubcategory, category, name].join('-');
    }

    return '';
};

const getToken = (tokens: TokenType[], mode: ThemeMode) =>
    tokens
        .filter((token) => token.tags[0] === mode)
        .map((token) => {
            const [, category, subcategory, name] = token.name.split('.');

            if (['dark', 'on-dark', 'light', 'on-light'].includes(subcategory)) {
                return undefined;
            }

            const tokenName = [subcategory === 'default' ? '-' : `--${subcategory}`, category, name].join('-');
            const tokenValue = getOppositeValue(mode, category, subcategory, name);

            return getCSSVariable(tokenName, tokenValue);
        })
        .filter(Boolean)
        .join('\n');

export const createViewContainerTokens = (colorTokens?: Array<TokenType>, gradientTokens: Array<TokenType> = []) => {
    if (!colorTokens?.length) {
        return '';
    }

    const darkTokens = `${getToken([...colorTokens, ...gradientTokens], 'dark')}`;
    const lightTokens = `${getToken([...colorTokens, ...gradientTokens], 'light')}`;

    return `\nexport const viewContainer = {
      dark: \`
${darkTokens}
      \`,
      light: \`
${lightTokens}
      \`,
    };\n`;
};
