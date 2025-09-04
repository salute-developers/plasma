import {
    ROBO_COMMENT,
    generateThemes,
    getThemeTokenDataGroups,
    getThemesWithRestoredColors,
    generateTokenSet,
    getThemesTokensFallback,
} from '@salutejs/plasma-tokens-utils';

import type { ThemeTokenDataGroups } from '@salutejs/plasma-tokens-utils';

import { isString, prettify } from '.';
import { getFileSource } from '../api';

const getFilesPath = (name?: string) => ({
    theme: `packages/plasma-tokens/data/themes/${name}.json`,
    themesIndex: `packages/plasma-tokens/src/themes/index.ts`,
    themesDark: `packages/plasma-tokens/src/themes/${name}__dark.ts`,
    themesLight: `packages/plasma-tokens/src/themes/${name}__light.ts`,
    brandsIndex: `packages/plasma-tokens/src/brands/${name}/index.ts`,
});

const getFileName = (exp: string) => {
    const name = exp.match(/from\s+['"](.+?)['"]/);
    return name ? name[1] : exp;
};

const getSortedExports = (input: string) => {
    // Собираем все экспорты целиком
    const exportRegex = /export\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"]\s*;/g;
    const matches = input.match(exportRegex) || [];

    const exportsArray = Array.from(new Set(matches.map((s) => s.trim())));

    const [newExports, legacyExports] = exportsArray.reduce<[string[], string[]]>(
        ([first, second], item) => {
            if (item === '') {
                return [first, second];
            }

            if (item.includes('salutejs_')) {
                second.push(item);
                return [first, second];
            }

            first.push(item);
            return [first, second];
        },
        [[], []],
    );

    newExports.sort((a, b) => getFileName(a).localeCompare(getFileName(b)));

    return [...newExports, ...legacyExports].join('\n') + '\n';
};

export const getThemesTokenSet = (content: string) => {
    const themesTokenDataGroups = getThemesWithRestoredColors(getThemeTokenDataGroups(JSON.parse(content)));
    return getThemesTokensFallback(themesTokenDataGroups);
};

export const getThemes = async (
    tokensSet: Record<string, ThemeTokenDataGroups>,
    owner: string,
    repo: string,
    defaultBranch: string,
) => {
    const pathToIndex = getFilesPath().themesIndex;
    const filesSource = await getFileSource(undefined, owner, repo, pathToIndex, defaultBranch);
    const tokensThemeIndex = isString(filesSource) ? filesSource : '';
    const themes = generateThemes(tokensSet, undefined, true, true);

    const [darkTokens, lightTokens, newExports] = themes.map((item) => prettify(item.content));

    const [, exports] = prettify(tokensThemeIndex + newExports).split('\n\n');
    const sortedExports = getSortedExports(exports);

    return [ROBO_COMMENT + sortedExports, ROBO_COMMENT + darkTokens, ROBO_COMMENT + lightTokens];
};

export const getBrands = (tokensSet: Record<string, ThemeTokenDataGroups>, themeName: string) => {
    const fixedThemeType = '__dark';
    const { shadow, color, borderRadius } = tokensSet[`${themeName}${fixedThemeType}`];

    const brands = [
        generateTokenSet({ tokens: color, type: 'css', mode: 'color' }),
        generateTokenSet({ tokens: shadow, type: 'css', mode: 'shadow' }),
        generateTokenSet({ tokens: borderRadius, type: 'css', mode: 'borderRadius' }),
    ].join('\n');

    return ROBO_COMMENT + prettify(brands);
};

export const getFilesTree = (content: string[], name: string) =>
    Object.values(getFilesPath(name)).reduce(
        (acc, value, index) => ({
            ...acc,
            [value]: content[index],
        }),
        {},
    );
