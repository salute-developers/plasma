import fs from 'fs';
import path from 'path';
import {
    generateTokenSet,
    writeGeneratedToFS,
    lowerFirstLetter,
    ThemeTokenDataGroups,
} from '@salutejs/plasma-tokens-utils';

export const createBrands = (srcDir: string, themesTokens: Record<string, ThemeTokenDataGroups>) => {
    const fixedThemeType = '__dark';
    const brandsDir = path.join(srcDir, 'brands');
    fs.existsSync(brandsDir) || fs.mkdirSync(brandsDir);

    Object.keys(themesTokens)
        .filter((brand) => brand.endsWith(fixedThemeType))
        .forEach((brand) => {
            const themeName = lowerFirstLetter(brand.replace(fixedThemeType, ''));
            const brandDir = path.join(brandsDir, themeName);

            const { shadow, color, borderRadius, spacing } = themesTokens[brand];

            writeGeneratedToFS(brandDir, [
                {
                    file: 'index.ts',
                    content:
                        generateTokenSet({ tokens: color, type: 'css', mode: 'color' }) +
                        '\n' +
                        generateTokenSet({ tokens: shadow, type: 'css', mode: 'shadow' }) +
                        '\n' +
                        generateTokenSet({ tokens: borderRadius, type: 'css', mode: 'borderRadius' }) +
                        '\n' +
                        generateTokenSet({ tokens: spacing, type: 'css', mode: 'spacing' }),
                },
            ]);
        });
};
