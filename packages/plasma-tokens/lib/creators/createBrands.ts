import fs from 'fs';
import path from 'path';
import {
    generateTokenSet,
    writeGeneratedToFS,
    lowerFirstLetter,
    ThemeTokenDataGroups,
} from '@salutejs/plasma-tokens-utils';

export const createBrands = (srcDir: string, themesColorTokenGroupsFallback: Record<string, ThemeTokenDataGroups>) => {
    const fixedThemeType = '__dark';
    const brandsDir = path.join(srcDir, 'brands');
    fs.existsSync(brandsDir) || fs.mkdirSync(brandsDir);

    Object.keys(themesColorTokenGroupsFallback)
        .filter((brand) => brand.endsWith(fixedThemeType))
        .forEach((brand) => {
            const themeName = lowerFirstLetter(brand.replace(fixedThemeType, ''));
            const brandDir = path.join(brandsDir, themeName);

            const { shadow, color } = themesColorTokenGroupsFallback[brand];

            writeGeneratedToFS(brandDir, [
                {
                    file: 'index.ts',
                    content:
                        generateTokenSet({ tokens: color, type: 'css', mode: 'color' }) +
                        '\n' +
                        generateTokenSet({ tokens: shadow, type: 'css', mode: 'shadow' }),
                },
            ]);
        });
};
