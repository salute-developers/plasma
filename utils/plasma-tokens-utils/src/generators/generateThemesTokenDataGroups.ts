import fs from 'fs';
import path from 'path';

import { getThemeTokenDataGroups, getThemesWithRestoredColors } from '../index';
import type { ThemeTokenDataGroups } from '../types';

export const generateThemesTokenDataGroups = (
    themesFolder: string,
    themesInclude?: string[],
): Record<string, Record<string, ThemeTokenDataGroups>> => {
    if (!fs.existsSync(themesFolder)) {
        return {};
    }

    const themes = fs
        .readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
        .filter(
            (item) =>
                path.parse(item.name).name === 'default' ||
                !themesInclude?.length ||
                themesInclude?.find((name) => name === path.parse(item.name).name),
        )
        .reduce((colorSchemas, item) => {
            const fileContent = fs.readFileSync(path.join(themesFolder, item.name), 'utf-8');

            const themeTokens = getThemeTokenDataGroups(JSON.parse(fileContent));

            return {
                ...colorSchemas,
                ...themeTokens,
            };
        }, {});

    return getThemesWithRestoredColors(themes);
};
