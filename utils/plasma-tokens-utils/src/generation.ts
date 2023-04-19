import fs from 'fs';
import path from 'path';
import { paramCase } from 'param-case';

import { ROBO_COMMENT, ThemeColorsList } from './constants';
import { toCSSVarTokenWithValue, capitalize } from './functions';
import type { TokenDataGroup, TokenData, TokenType, TypoSystem, GeneratedFiles, TypoStyles } from './types';
import { escapeValue } from './utils';

type GeneratedTokenType = 'value' | 'css';

/**
 * Генерация одиночного токена.
 * @param {TokenData<TokenType>} token Входные данные
 * @param {GeneratedTokenType} type Тип выводимого токена
 * @param {string} prefix Префикс в CSS-токене
 * @param {boolean} withType Генерировать типы для токенов
 * @param {boolean} fromData Тема из генератора
 * @return {string}
 */
export const generateToken = ({
    token,
    type,
    name,
    prefix,
    withType,
    fromData,
}: {
    token: TokenData<TokenType>;
    type: GeneratedTokenType;
    name: string;
    prefix?: string;
    withType?: boolean;
    fromData?: boolean;
}) => {
    const { comment } = token;
    let { value } = token;
    let out = '';
    let typeHint = '';

    if (comment) {
        out += `/** ${comment} */\n`;
    }

    if (withType) {
        const typeName = capitalize(name);
        typeHint = `: ${typeName}`;

        if (typeof value === 'string' || typeof value === 'number') {
            out += `type ${typeName} = ${typeof value};`;
        } else {
            out += `type ${typeName} = {\n${Object.keys(value)
                .map((k) => `    ${k}: any`)
                .join(';\n')};\n};`;
        }

        out += '\n\n';
    }

    if (typeof value === 'string' || (typeof value === 'object' && 'origin' in value)) {
        const newValue = typeof value === 'object' ? value.origin : value;

        // type=css param is used for colors values only
        if (type === 'css') {
            value = toCSSVarTokenWithValue(`${prefix}-${paramCase(name)}`, newValue, fromData);
        } else {
            value = escapeValue(newValue);
        }

        // Для случаев, когда у токена есть префикс
        const clearName = name.split('-')[1] || name;

        out += `export const ${clearName}${typeHint} = '${value}';\n`;
    } else {
        // type=css param is used for typography values only
        const replacer = (k: string, val: string) => {
            if (k) {
                return toCSSVarTokenWithValue(`${prefix}-${paramCase(k)}`, val, fromData);
            }
            return val;
        };

        const newValue = 'origin' in value ? value.origin : value;

        const objToStr = (type === 'css'
            ? JSON.stringify(newValue, replacer, 4)
            : JSON.stringify(newValue, null, 4)
        ).replace(/"/g, "'");

        out += `export const ${name}${typeHint} = ${objToStr};`;
    }
    return out;
};

/**
 * Преобразует объект токенов в CSS Properties object.
 * @param {TokenDataGroup<TokenType>} tokens Объект токенов
 * @param {GeneratedTokenType} type Тип выводимого токена
 * @param {string} prefix Префикс в CSS-токене
 * @param {boolean} withType Генерировать типы для токенов
 * @return {string}
 */
export const generateTokens = (
    tokens: TokenDataGroup<TokenType>,
    type: GeneratedTokenType = 'value',
    prefix?: string,
    withType?: boolean,
) => {
    const { fromData, ...theme } = tokens;

    return Object.entries(theme).reduce(
        (acc, [name, token]) =>
            `${acc}${generateToken({ token, type, name, prefix, withType, fromData: Boolean(fromData) })}\n`,
        ROBO_COMMENT,
    );
};

/**
 * Генерация типографики, разложенной по типам компонентов.
 * @param {TypoSystem} Типографическая система
 * @return {GeneratedFiles}
 */
export const generateTypography = <TK extends string>(typoStyles: TypoStyles<TK>) => {
    const out: GeneratedFiles = [];
    let index = ROBO_COMMENT;

    for (const [name, styles] of Object.entries(typoStyles)) {
        index += `export { ${name} } from './${name}';\n`;

        out.push({
            file: `${name}.ts`,
            content: generateToken({
                token: { value: styles } as TokenData,
                type: 'css',
                name,
                prefix: `typo-${name}`,
                withType: true,
            }),
        });
    }

    out.push({
        file: 'index.ts',
        content: index,
    });

    return out;
};

/**
 * Генерация параметрической системы на основе встречающихся значений типографики.
 * @param {TypoSystem} Типографическая система
 * @return {GeneratedFiles}
 */
export const generateTypographyValues = <TK extends string>(typoSystem: Omit<TypoSystem<TK>, 'text'>) => {
    const { fontSizes, fonts, fontWeights, lineHeights, letterSpacings } = typoSystem;
    const out: GeneratedFiles = [];
    let index = ROBO_COMMENT;

    for (const [name, styles] of Object.entries({
        fontSizes,
        fonts,
        fontWeights,
        lineHeights,
        letterSpacings,
    })) {
        index += `export { ${name} } from './${name}';\n`;

        out.push({
            file: `${name}.ts`,
            content: generateToken({
                token: { value: styles },
                type: 'css',
                name,
                prefix: `typo-${name}`,
            }),
        });
    }

    out.push({
        file: 'index.ts',
        content: index,
    });

    return out;
};

/**
 * Генерация Theme JSON.
 */
export const generateThemeJSON = <TK extends string>(
    typoSystem: TypoSystem<TK>,
    basicTheme: Record<keyof typeof ThemeColorsList, string>,
    otherThemes: Record<string, Record<keyof typeof ThemeColorsList, string>>,
) => {
    const { fontSizes, ...rest } = typoSystem;
    // font-size is often first
    // https://system-ui.com/theme/
    const theme = {
        fontSizes,
        colors: {
            ...basicTheme,
            modes: otherThemes,
        },
        ...rest,
    };

    return `${JSON.stringify(theme, null, 4)}\n`;
};

/**
 * Запись нагенерированного в файловую систему.
 * @param {string} dir Директория для записи (если не существует, то будет создана).
 * @param {GeneratedFiles} generated Сгенерированный контент для записи.
 */
export const writeGeneratedToFS = (dir: string, generated: GeneratedFiles) => {
    fs.existsSync(dir) || fs.mkdirSync(dir);

    for (const { file, content } of generated) {
        fs.writeFileSync(path.join(dir, file), content);
    }
};
