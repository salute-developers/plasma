import fs from 'fs';
import path from 'path';
import { generateTokenSet, writeGeneratedToFS, ThemeTokenDataGroups } from '@salutejs/plasma-tokens-utils';

export const createDefaultBrand = (srcDir: string, defaultTheme: ThemeTokenDataGroups) => {
    const brandsDir = path.join(srcDir, 'brands');
    fs.existsSync(brandsDir) || fs.mkdirSync(brandsDir);

    const { shadow, color, borderRadius } = defaultTheme;

    writeGeneratedToFS(brandsDir, [
        {
            file: 'index.ts',
            content:
                generateTokenSet({ tokens: color, type: 'css', mode: 'color' }) +
                '\n' +
                generateTokenSet({ tokens: shadow, type: 'css', mode: 'shadow' }) +
                '\n' +
                generateTokenSet({ tokens: borderRadius, type: 'css', mode: 'borderRadius' }),
        },
    ]);
};
