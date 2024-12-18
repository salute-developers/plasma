import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { GENERATE_MESSAGE_FOR_CSS, ThemeContent, ThemeMode, webBreakpoints } from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateCSSThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'css');
    const { screenS, screenM, screenL } = webBreakpoints;

    const getContent = (themeMode: ThemeMode) =>
        [
            getSelector(themeContent[themeMode].colorTokens),
            getSelector(themeContent[themeMode].gradientTokens),
            getSelector(themeContent[themeMode].shadowTokens),
            getSelector(themeContent[themeMode].shapeTokens),
            getSelector(themeContent[themeMode].spacingTokens),
            getSelector(themeContent[themeMode].typographyTokens.root),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenS, screenS.from),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenM, screenM.from, screenM.to),
            getBreakpointSelector(themeContent[themeMode].typographyTokens.screenL, screenL.from, screenL.to),
        ].join('\n');

    writeGeneratedToFS(
        themesDir,
        [
            generateCommonFile(`${themeName}__dark`, 'css', getContent('dark')),
            generateCommonFile(`${themeName}__light`, 'css', getContent('light')),
        ],
        GENERATE_MESSAGE_FOR_CSS,
    );
};
