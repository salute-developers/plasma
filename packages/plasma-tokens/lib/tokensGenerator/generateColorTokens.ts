import fs from 'fs';
import path from 'path';
import { DataObject, TokenData, TokenDataGroup } from '@salutejs/plasma-tokens-utils';

import { Theme, ThemeTokenDataGroups, TokenGroup, TokenType } from './types';

import { upperFirstLetter } from './utils';
import { mapDeprecatedColorTokens } from './mapDeprecatedColorTokens';

const isTokenData = (value: unknown): value is TokenData => {
    return typeof value === 'object' && value !== null && 'value' in value;
};

const makePath = (path: string, key: string) => {
    if (!path && key in TokenGroup) {
        return '';
    }

    if (path === TokenType.default) {
        return key;
    }

    return path ? `${path}${upperFirstLetter(key)}` : key;
};

const dataObjectToTokenDataGroup = (dataObject: DataObject, path: string): TokenDataGroup<string> =>
    Object.entries(dataObject).reduce((acc, [key, value]) => {
        const fullPath = makePath(path, key);

        if (isTokenData(value)) {
            return { ...acc, [fullPath]: value };
        } else if (value && typeof value === 'object') {
            return { ...acc, ...dataObjectToTokenDataGroup(value, fullPath) };
        }

        return acc;
    }, {});

const themeToColorTokenDataGroups = (theme: Theme): Record<string, ThemeTokenDataGroups> => {
    const {
        config: { name },
        dark,
        light,
    } = theme;

    return {
        [name]: {
            [`${name}__dark`]: dataObjectToTokenDataGroup((dark as unknown) as DataObject, ''),
            [`${name}__light`]: dataObjectToTokenDataGroup((light as unknown) as DataObject, ''),
        },
    };
};

const generateColorThemesTokenDataGroups = (): Record<string, ThemeTokenDataGroups> => {
    const themesFolder = path.join(__dirname, '../../data/themes');

    if (!fs.existsSync(themesFolder)) {
        return {};
    }

    return fs
        .readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
        .reduce((colorSchemas, item) => {
            const fileContent = fs.readFileSync(path.join(themesFolder, item.name), 'utf-8');

            const themeTokens = themeToColorTokenDataGroups(JSON.parse(fileContent));

            return {
                ...colorSchemas,
                ...themeTokens,
            };
        }, {});
};

// Генерация токенов для кастомных тем из data/themes
export const themesColorTokenGroups = generateColorThemesTokenDataGroups();

// Добавляем старые токены для обратной совместимости
export const themesColorTokenGroupsFallback = mapDeprecatedColorTokens(themesColorTokenGroups);
