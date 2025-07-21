import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import {
    GENERATE_MESSAGE_FOR_CSS,
    ThemeContent,
    ThemeMode,
    webBreakpoints,
    webBreakpoints_FOR_SDDS_INSOL,
} from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateCSSThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'css');

    // TODO: Удалить после добавление брейкпоинтов в токены
    const breakpoints = themeName === 'sdds_insol' ? webBreakpoints_FOR_SDDS_INSOL : webBreakpoints;
    const breakpointsSelectors = Object.entries(breakpoints).map(([key, value]) =>
        getBreakpointSelector(themeContent.dark.typographyTokens[key], value.from, value.to),
    );

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

    writeGeneratedToFS(
        themesDir,
        [
            generateCommonFile(`${themeName}__dark`, 'css', getContent('dark')),
            generateCommonFile(`${themeName}__light`, 'css', getContent('light')),
        ],
        GENERATE_MESSAGE_FOR_CSS,
    );
};
