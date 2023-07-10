import React from 'react';
import styled from 'styled-components';

import { getFormatDate } from '.';
import { THEME_BUILDER_PREFIX } from '../types';
import type { SavedTheme, Theme as ThemeType } from '../types';

const StyledDate = styled.div`
    opacity: 0.5;
    position: absolute;
    right: 3rem;
    margin-top: -0.5rem;
`;

export const saveTheme = (themeData: ThemeType) => {
    const data: SavedTheme = {
        themeData,
        date: new Date(),
    };

    window.sessionStorage.setItem(`${THEME_BUILDER_PREFIX}-${themeData.config.name}`, JSON.stringify(data));
};

export const loadTheme = (themeName: string): SavedTheme | undefined => {
    const savedThemeData = window.sessionStorage.getItem(`${THEME_BUILDER_PREFIX}-${themeName}`);
    return savedThemeData ? JSON.parse(savedThemeData) : undefined;
};

export const loadAllThemeNames = (): (readonly [string, Date])[] => {
    const themes = Object.keys(sessionStorage)
        .filter((key) => key.startsWith(THEME_BUILDER_PREFIX))
        .map((item) => {
            const name = item.replace(`${THEME_BUILDER_PREFIX}-`, '');
            const date = loadTheme(item)?.date || new Date();

            return [name, date] as const;
        });

    return themes;
};

export const deleteTheme = (themeName: string) => {
    window.sessionStorage.removeItem(`${THEME_BUILDER_PREFIX}-${themeName}`);
};

export const getSavedThemes = () =>
    loadAllThemeNames().map(([name, date]) => ({
        value: name,
        label: name,
        contentLeft: <StyledDate>{getFormatDate(date)}</StyledDate>,
    }));
