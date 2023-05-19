import { paramCase } from 'param-case';

import { toCSSVarTokenWithValue } from '../functions';
import { getBoxShadow } from '../utils';
import type { TokenDataGroup, TokenData, TokenType, Shadow, GeneratedTokenType, GeneratedTokenMode } from '../types';

interface GenerateProps {
    value: TokenType;
    type: GeneratedTokenType;
    name: string;
    withPrefixDesign: boolean;
}

interface GenerateToken {
    token: TokenData<TokenType>;
    type: GeneratedTokenType;
    mode: GeneratedTokenMode;
    name: string;
}

interface GenerateTokens {
    tokens: TokenDataGroup<TokenType> | undefined;
    type: GeneratedTokenType;
    mode: GeneratedTokenMode;
}

const generateShadowTokenValue = ({ value, type, name, withPrefixDesign }: GenerateProps) => {
    let result = '';

    if (!Array.isArray(value)) {
        return value;
    }

    const newValue = getBoxShadow((value as unknown) as Array<Shadow>);

    if (type === 'css') {
        result = newValue.map((val) => toCSSVarTokenWithValue(`${paramCase(name)}`, val, withPrefixDesign)).join(', ');
    }

    return result;
};

const generateTokenValue = ({ value, type, name, withPrefixDesign }: GenerateProps) => {
    let result = '';

    if (typeof value !== 'string' && !(typeof value === 'object' && 'origin' in value)) {
        return value;
    }

    const newValue = typeof value === 'object' ? value.origin : value;

    if (type === 'css') {
        result = toCSSVarTokenWithValue(`${paramCase(name)}`, newValue, withPrefixDesign);
    }

    return result;
};

const generateMethodsMap: Record<string, (props: GenerateProps) => TokenType> = {
    color: generateTokenValue,
    shadow: generateShadowTokenValue,
    borderRadius: generateTokenValue,
};

const generateToken = ({ token, type, name, mode }: GenerateToken) => {
    const withPrefixDesign = false;
    const { comment, value } = token;

    const out = comment ? `/** ${comment} */\n` : '';

    // Для случаев, когда у токена есть префикс
    const clearName = name.split('-')[1] || name;

    const newValue = generateMethodsMap[mode]({ value, type, name, withPrefixDesign });

    return `${out}export const ${clearName} = '${newValue}';\n`;
};

/**
 * Преобразует объект токенов в CSS Properties object.
 * @param {TokenDataGroup<TokenType>} tokens Объект токенов
 * @param {GeneratedTokenType} type Тип выводимого токена
 * @param {string} name Имя токена
 * @param {GeneratedTokenMode} mode Вид выводимого токена
 * @return {string}
 */
export const generateTokenSet = ({ tokens, type, mode }: GenerateTokens) =>
    Object.entries(tokens || {}).reduce(
        (acc, [name, token]) => `${acc}${generateToken({ token, type, name, mode })}\n`,
        '',
    );
