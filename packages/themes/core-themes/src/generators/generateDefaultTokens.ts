import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { generateCommonFile } from '@salutejs/plasma-tokens-utils/lib/generators/generateFile';

import { ThemeContent } from '../types';

export const generateDefaultTokens = (srcDir: string, themeContent: ThemeContent['dark']) => {
    const themesDir = path.join(srcDir, 'tokens');

    const content = [
        themeContent.colorTokens,
        themeContent.gradientTokens,
        themeContent.shadowTokens,
        themeContent.shapeTokens,
        themeContent.spacingTokens,
        themeContent.typographyTokens.screenS,
    ].join('\n');

    writeGeneratedToFS(themesDir, [generateCommonFile('index', 'ts', content)]);
};
