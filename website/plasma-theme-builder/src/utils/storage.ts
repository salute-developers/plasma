import { getPrefix } from '.';
import type { SavedTheme, Theme as ThemeType } from '../types';

export const saveTheme = (themeData: ThemeType, themeName?: string, branchName?: string) => {
    const data: SavedTheme = {
        themeData,
        date: new Date().toString(),
    };
    const prefix = getPrefix(themeName, branchName);
    localStorage.setItem(`$${prefix}${themeData.config.name}`, JSON.stringify(data));
};

export const rewriteTheme = (themeNameSource: string, themeNameTarget: string) => {
    const themeDataSource = loadTheme(themeNameSource);

    localStorage.setItem(`$${themeNameTarget}`, JSON.stringify(themeDataSource));
    deleteTheme(themeNameSource);
};

export const loadTheme = (themeName: string): SavedTheme | undefined => {
    const savedThemeData = localStorage.getItem(`$${themeName}`);
    return savedThemeData ? JSON.parse(savedThemeData) : undefined;
};

export const deleteTheme = (themeName: string) => {
    localStorage.removeItem(`$${themeName}`);
};
