import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { GENERATE_MESSAGE_FOR_CSS, ThemeContent, webBreakpoints, webBreakpoints_FOR_SDDS_INSOL } from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateCSSModuleThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'css');

    const darkSelector = '.dark';
    const lightSelector = '.light';
    const groupSelector = [darkSelector, lightSelector].join(', ');

    const darkContent = [
        getSelector(themeContent.dark.colorTokens, darkSelector),
        getSelector(themeContent.dark.gradientTokens, darkSelector),
    ].join('\n');

    const lightContent = [
        getSelector(themeContent.light.colorTokens, lightSelector),
        getSelector(themeContent.light.gradientTokens, lightSelector),
    ].join('\n');

    // TODO: Удалить после добавление брейкпоинтов в токены
    const breakpoints =
        themeName === 'sdds_insol' || themeName === 'sdds_insol_next' ? webBreakpoints_FOR_SDDS_INSOL : webBreakpoints;
    const breakpointsSelectors = Object.entries(breakpoints).map(([key, value]) =>
        getBreakpointSelector(themeContent.dark.typographyTokens[key], value.from, value.to, groupSelector),
    );

    const breakpointContent = [
        getSelector(themeContent.dark.shadowTokens, groupSelector),
        getSelector(themeContent.dark.shapeTokens, groupSelector),
        getSelector(themeContent.dark.spacingTokens, groupSelector),
        getSelector(themeContent.dark.typographyTokens.root, groupSelector),
        ...breakpointsSelectors,
    ].join('\n');

    const file = generateCommonFile(
        `${themeName}.module`,
        'css',
        [darkContent, lightContent, breakpointContent].join('\n'),
    );

    writeGeneratedToFS(themesDir, [file], GENERATE_MESSAGE_FOR_CSS);
};
