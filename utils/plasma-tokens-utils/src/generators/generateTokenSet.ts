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

const getNormalizedValue = (value: string | any[] | Record<string, string>) => {
    if (Array.isArray(value)) {
        return value.map((val) => val.origin);
    }

    if (typeof value === 'object') {
        return value.origin;
    }

    return value;
};

const generateShadowTokenValue = ({ value, type, name, withPrefixDesign }: GenerateProps) => {
    if (type !== 'css') {
        return '';
    }

    if (!Array.isArray(value)) {
        return value;
    }

    const newValue = getBoxShadow((value as unknown) as Array<Shadow>);

    return newValue.map((val) => toCSSVarTokenWithValue(`${paramCase(name)}`, val, withPrefixDesign)).join(', ');
};

const generateTokenValue = ({ value, type, name, withPrefixDesign }: GenerateProps) => {
    if (
        type !== 'css' ||
        (typeof value !== 'string' && !(typeof value === 'object' && 'origin' in value) && !Array.isArray(value))
    ) {
        return value;
    }

    const newValue = getNormalizedValue(value);

    if (Array.isArray(newValue)) {
        return newValue.map((val) => toCSSVarTokenWithValue(`${paramCase(name)}`, val, withPrefixDesign)).join(', ');
    }

    return toCSSVarTokenWithValue(`${paramCase(name)}`, newValue, withPrefixDesign);
};

const generateMethodsMap: Record<string, (props: GenerateProps) => TokenType> = {
    color: generateTokenValue,
    shadow: generateShadowTokenValue,
    borderRadius: generateTokenValue,
    spacing: generateTokenValue,
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
