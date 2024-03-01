import path from 'path';
import {
    writeGeneratedToFS,
    ThemeTokenDataGroups,
    getThemeContent,
    generateThemesFromContent,
} from '@salutejs/plasma-tokens-utils';
import type { CreateVariablesByArcheTypeProps } from '@salutejs/plasma-typo';

export const createThemes = (
    srcDir: string,
    themeTokens: Record<string, ThemeTokenDataGroups>,
    typoTokens: CreateVariablesByArcheTypeProps,
) => {
    const themesDir = path.join(srcDir, 'themes');
    const withKebabCase = true;
    const withDesignPrefix = true;

    const content = getThemeContent(themeTokens, typoTokens, undefined, withKebabCase, withDesignPrefix);
    const result = generateThemesFromContent(content);

    writeGeneratedToFS(themesDir, result);
};
