import fs from 'fs';
import path from 'path';
import { DataObject, TokenData, TokenDataGroup } from '@salutejs/plasma-tokens-utils';

import { Theme, ThemeTokenDataGroups, TokenGroup, TokenType } from './types';

const themesFolder = path.join(__dirname, '../../data/themes');

const isTokenData = (value: unknown): value is TokenData => {
    return typeof value === 'object' && value !== null && 'value' in value;
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const makePath = (path: string, key: string) => {
    if (!path && key in TokenGroup) {
        return '';
    }

    if (path === TokenType.default) {
        return key;
    }

    return path ? `${path}${capitalize(key)}` : key;
};

const dataObject2TokenDataGroup = (dataObject: DataObject, path: string): TokenDataGroup<string> => {
    return Object.entries(dataObject).reduce((acc, [key, value]) => {
        const fullPath = makePath(path, key);

        if (isTokenData(value)) {
            return { ...acc, [fullPath]: value };
        } else if (value && typeof value === 'object') {
            return { ...acc, ...dataObject2TokenDataGroup(value, fullPath) };
        }

        return acc;
    }, {});
};

const theme2ColorTokenDataGroups = (theme: Theme): ThemeTokenDataGroups => {
    const {
        config: { name },
        dark,
        light,
    } = theme;

    return {
        [`dark${capitalize(name)}`]: dataObject2TokenDataGroup((dark as unknown) as DataObject, ''),
        [`light${capitalize(name)}`]: dataObject2TokenDataGroup((light as unknown) as DataObject, ''),
    };
};

export const generateColorThemesTokenDataGroups = (): ThemeTokenDataGroups => {
    if (!fs.existsSync(themesFolder)) {
        return {};
    }

    return fs
        .readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
        .reduce((colorSchemas, item) => {
            const fileContent = fs.readFileSync(path.join(themesFolder, item.name), 'utf-8');

            const themeTokens = theme2ColorTokenDataGroups(JSON.parse(fileContent));

            return {
                ...colorSchemas,
                ...themeTokens,
            };
        }, {});
};
