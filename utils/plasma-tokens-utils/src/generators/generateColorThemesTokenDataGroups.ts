import fs from 'fs';
import path from 'path';

import { DataObject, TokenData, TokenDataGroup, upperFirstLetter } from '../index';
import { Theme, ThemeTokenDataGroups, TokenGroup, TokenMode } from '../types';

const isTokenData = (value: unknown): value is TokenData => {
    return typeof value === 'object' && value !== null && 'value' in value;
};

const makePath = (path: string, key: string) => {
    if (!path && key in TokenGroup) {
        return '';
    }

    if (path === TokenMode.default) {
        return key;
    }

    return path ? `${path}${upperFirstLetter(key)}` : key;
};

const dataObjectToTokenDataGroup = (dataObject: DataObject, path: string): TokenDataGroup<string> =>
    Object.entries(dataObject).reduce((acc, [key, value]) => {
        const fullPath = makePath(path, key);

        if (isTokenData(value)) {
            return { ...acc, [fullPath]: value };
        }
        if (value && typeof value === 'object') {
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

export const generateColorThemesTokenDataGroups = (themesFolder: string): Record<string, ThemeTokenDataGroups> => {
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
