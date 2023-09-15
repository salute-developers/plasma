import fs from 'fs';
import path from 'path';

import { getThemeTokenDataGroups, getThemesWithRestoredColors } from '../index';
import type { ThemeTokenDataGroups } from '../types';

export const generateThemesTokenDataGroups = (
    themesFolder: string,
): Record<string, Record<string, ThemeTokenDataGroups>> => {
    if (!fs.existsSync(themesFolder)) {
        return {};
    }

    const themes = fs
        .readdirSync(themesFolder, { withFileTypes: true })
        .filter((item) => item.isFile() && path.extname(path.join(themesFolder, item.name)) === '.json')
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
