import React from 'react';
import styled from 'styled-components';

import { createTheme } from '../builder/createTheme';
import { getFilesSource } from '../api';
import { getFormatDate, loadTheme } from '.';
import { THEME_BUILDER_PREFIX, BASE_PREFIX } from '../types';
import type { Theme as ThemeType } from '../types';

const StyledDate = styled.div`
    opacity: 0.5;
    position: absolute;
    right: 3rem;
    margin-top: -0.5rem;
`;

// TODO: Убрать эту функцию, когда во всех JSON схемах будет новая структура: text, surface, background, overlay
export const getNormalizeThemeSections = (data?: ThemeType): ThemeType | undefined => {
    if (!data) {
        return undefined;
    }

    const legacySectionMap: Record<string, string> = {
        textIcons: 'text',
        controlsSurfaces: 'surface',
        banners: 'banner',
        backgrounds: 'background',
    };

    const legacySections = Object.keys(legacySectionMap);
    const themeSections = Object.keys(data.light).filter((key) => legacySections.includes(key)) as Array<
        keyof ThemeType['dark' | 'light']
    >;

    const copyData = JSON.parse(JSON.stringify(data));

    return themeSections.reduce((prev, section) => {
        const objectDark = prev.dark[section];
        const objectLight = prev.light[section];

        delete prev.dark[section];
        delete prev.light[section];

        return {
            ...prev,
            dark: {
                ...prev.dark,
                [legacySectionMap[section]]: objectDark,
            },
            light: {
                ...prev.light,
                [legacySectionMap[section]]: objectLight,
            },
        };
    }, copyData);
};

export const getThemeData = async (
    themeName: string,
    branchName?: string,
    owner = 'salute-developers',
    repo = 'plasma',
    token?: string,
): Promise<ThemeType> => {
    console.log('branchName', branchName);

    const response = await getFilesSource(
        undefined,
        owner,
        repo,
        `packages/plasma-tokens/data/themes/${themeName}.json`,
        branchName,
        token,
    );

    return JSON.parse(response);
};

export const getResetThemeData = async (
    themeData?: ThemeType,
    themeNameFromParam?: string,
    branchNameFromParam?: string,
) => {
    if (!themeData) {
        return;
    }

    if (!themeNameFromParam || (!themeNameFromParam && !branchNameFromParam)) {
        const { light, dark } = createTheme(themeData.config);
        return { ...themeData, dark, light };
    }

    return await getThemeData(themeNameFromParam, branchNameFromParam);
};

export const createThemeURLParams = (name: string) => {
    const params: [string?, string?][] = [];

    if (name.startsWith(BASE_PREFIX)) {
        const [, themeName] = name.split(`${BASE_PREFIX}-`);

        params.push(['theme', themeName]);
    }

    if (name.startsWith(THEME_BUILDER_PREFIX)) {
        const [, themeName] = name.split(`${THEME_BUILDER_PREFIX}-`);
        const branchName = name;

        params.push(['theme', themeName], ['branch', branchName]);
    }

    return params;
};

export const loadAllThemeNames = (): (readonly [string, string])[] => {
    const themes = Object.keys(localStorage)
        .filter((key) => key.startsWith('$'))
        .map((item) => {
            const name = item.replace(`$`, '');
            const date = loadTheme(name)?.date || new Date().toString();

            return [name, date] as const;
        });

    return themes;
};

export const getSavedThemes = () =>
    loadAllThemeNames().map(([name, date]) => ({
        value: name,
        label: name,
        contentLeft: <StyledDate>{getFormatDate(date)}</StyledDate>,
    }));

export const getPrefix = (themeName?: string, branchName?: string) => {
    if (themeName && !branchName) {
        return `${BASE_PREFIX}-`;
    }

    if (themeName && branchName) {
        return `${THEME_BUILDER_PREFIX}-`;
    }

    return '';
};

export const getFullThemeName = (themeName?: string, branchName?: string) =>
    `${getPrefix(themeName, branchName)}${themeName}`;
