import path from 'path';
import { writeGeneratedToFS, generateFile } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { ThemeContent, ThemeMode, webBreakpoints, webBreakpoints_FOR_SDDS_INSOL } from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'themes');

    // TODO: Удалить после добавление брейкпоинтов в токены
    const breakpoints =
        themeName === 'sdds_insol' || themeName === 'sdds_insol_next' ? webBreakpoints_FOR_SDDS_INSOL : webBreakpoints;
    const breakpointsSelectors = Object.entries(breakpoints).map(([key, value]) =>
        getBreakpointSelector(themeContent.dark.typographyTokens[key], value.from, value.to),
    );

    const indexFile = `export { ${themeName}__dark } from './${themeName}__dark';
export { ${themeName}__light } from './${themeName}__light';\n`;

    const getContent = (themeMode: ThemeMode) =>
        [
            getSelector(themeContent[themeMode].colorTokens),
            getSelector(themeContent[themeMode].gradientTokens),
            getSelector(themeContent[themeMode].shadowTokens),
            getSelector(themeContent[themeMode].shapeTokens),
            getSelector(themeContent[themeMode].spacingTokens),
            getSelector(themeContent[themeMode].typographyTokens.root),
            ...breakpointsSelectors,
        ].join('\n');

    writeGeneratedToFS(themesDir, [
        generateFile(`${themeName}__dark`, `[\`${getContent('dark')}\`] as unknown as TemplateStringsArray`),
        generateFile(`${themeName}__light`, `[\`${getContent('light')}\`] as unknown as TemplateStringsArray`),
        generateCommonFile('index', 'ts', indexFile),
    ]);
};
