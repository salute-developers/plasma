import path from 'path';
import {
    writeGeneratedToFS,
    generateColorThemes,
    generateThemes,
    generateColorThemeValues,
    generateTokens,
    ThemeTokenDataGroups,
} from '@salutejs/plasma-tokens-utils';

import { colorThemes as legacyColorThemes } from '../../data';

export const createThemes = (srcDir: string, themesTokens: Record<string, ThemeTokenDataGroups>) => {
    const legacyColorsDir = path.join(srcDir, 'colors');
    const themesDir = path.join(srcDir, 'themes');
    const legacyThemesValuesDir = path.join(srcDir, 'themesValues');
    const withDeprecated = true;
    const withKebabCase = true;

    // Генерация цветов
    writeGeneratedToFS(legacyColorsDir, [
        // Файл с токенами CSS-Variables (с дефолтными значениями)
        { file: 'index.ts', content: generateTokens(legacyColorThemes.salutejs_sber__dark, 'css', 'colors') },
        // Файл с токенами (JS-переменными) для инъекции значения напрямую
        { file: 'values.ts', content: generateTokens(legacyColorThemes.salutejs_sber__dark) },
    ]);
    // Генерация и запись файлов тем для создания глобальных стилей
    writeGeneratedToFS(themesDir, generateThemes(themesTokens, undefined, withDeprecated, withKebabCase));
    // Генерация и запись файлов старых тем для создания глобальных стилей
    writeGeneratedToFS(themesDir, generateColorThemes(legacyColorThemes, undefined, withDeprecated));
    // Отдельные файлы для импорта в компонентах
    writeGeneratedToFS(legacyThemesValuesDir, generateColorThemeValues({ ...legacyColorThemes }));
};
