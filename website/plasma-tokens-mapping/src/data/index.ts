import fs from 'fs-extra';
import path from 'path';

export interface Theme {
    name: string;
    path: string;
    value: JSON;
}

export async function getThemeNames(): Promise<string[]> {
    const dirs = await fs.readdir('themes');

    return dirs;
}

export async function getThemes(): Promise<Theme[]> {
    const dirs = await getThemeNames();

    const res: Theme[] = [];

    for (const dir of dirs) {
        const themeFilePath = path.join('themes', dir, 'theme.json');
        const value = await fs.readJSON(themeFilePath);

        res.push({
            name: dir,
            path: themeFilePath,
            value,
        });
    }

    return res;
}

export async function saveTheme(theme: Theme) {
    await fs.writeJSON(theme.path, theme.value, { spaces: 4 });
}

export async function getTheme(themeName: string): Promise<Theme> {
    const themeFilePath = path.join('themes', themeName, 'theme.json');
    try {
        const value = await fs.readJSON(themeFilePath);

        return {
            name: themeName,
            path: themeFilePath,
            value,
        };
    } catch (err) {
        console.error(err);
        throw new Error(`No such theme: ${themeName}`);
    }
}
