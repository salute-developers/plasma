import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { GENERATE_MESSAGE_FOR_CSS, ThemeContent, webBreakpoints } from '../types';
import { getBreakpointSelector, getSelector } from '../utils';

export const generateCSSModuleThemes = (srcDir: string, themeName: string, themeContent: ThemeContent) => {
    const themesDir = path.join(srcDir, 'css');
    const { screenS, screenM, screenL } = webBreakpoints;

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

    const breakpointContent = [
        getSelector(themeContent.dark.shadowTokens, groupSelector),
        getSelector(themeContent.dark.shapeTokens, groupSelector),
        getSelector(themeContent.dark.spacingTokens, groupSelector),
        getSelector(themeContent.dark.typographyTokens.root, groupSelector),
        getBreakpointSelector(themeContent.dark.typographyTokens.screenS, screenS.from, screenS.to, groupSelector),
        getBreakpointSelector(themeContent.dark.typographyTokens.screenM, screenM.from, screenM.to, groupSelector),
        getBreakpointSelector(themeContent.dark.typographyTokens.screenL, screenL.from, screenL.to, groupSelector),
    ].join('\n');

    const file = generateCommonFile(
        `${themeName}.module`,
        'css',
        [darkContent, lightContent, breakpointContent].join('\n'),
    );

    writeGeneratedToFS(themesDir, [file], GENERATE_MESSAGE_FOR_CSS);
};
