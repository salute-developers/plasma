import path from 'path';
import { writeGeneratedToFS, generateFile } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { ThemeContent, ThemeMode, webBreakpoints } from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'themes');
    const { screenS, screenM, screenL } = webBreakpoints;

    const indexFile = `export { ${themeName}__dark } from './${themeName}__dark';
export { ${themeName}__light } from './${themeName}__light';\n`;

    const getContent = (themeMode: ThemeMode) =>
        [
            getSelector(themeContent[themeMode].colorTokens),
            getSelector(themeContent[themeMode].gradientTokens),
            getSelector(themeContent[themeMode].shadowTokens),
            getSelector(themeContent[themeMode].shapeTokens),
            getSelector(themeContent[themeMode].typographyTokens.root),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenS, screenS.from),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenM, screenM.from, screenM.to),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenL, screenL.from, screenL.to),
        ].join('\n');

    writeGeneratedToFS(themesDir, [
        generateFile(`${themeName}__dark`, `[\`${getContent('dark')}\`] as unknown as TemplateStringsArray`),
        generateFile(`${themeName}__light`, `[\`${getContent('light')}\`] as unknown as TemplateStringsArray`),
        generateCommonFile('index', 'ts', indexFile),
    ]);
};
