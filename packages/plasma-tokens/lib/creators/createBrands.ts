import fs from 'fs';
import path from 'path';
import {
    generateTokens,
    writeGeneratedToFS,
    lowerFirstLetter,
    ThemeTokenDataGroups,
} from '@salutejs/plasma-tokens-utils';

export const createBrands = (srcDir: string, themesColorTokenGroupsFallback: ThemeTokenDataGroups) => {
    const fixedThemeType = '__dark';
    const brandsDir = path.join(srcDir, 'brands');
    fs.existsSync(brandsDir) || fs.mkdirSync(brandsDir);

    Object.keys(themesColorTokenGroupsFallback)
        .filter((brand) => brand.endsWith(fixedThemeType))
        .forEach((brand) => {
            const themeName = lowerFirstLetter(brand.replace(fixedThemeType, ''));
            const brandDir = path.join(brandsDir, themeName);
            const theme = themesColorTokenGroupsFallback[brand];

            writeGeneratedToFS(brandDir, [
                {
                    file: 'index.ts',
                    content: generateTokens(theme, 'css', 'colors'),
                },
                { file: 'values.ts', content: generateTokens(theme) },
            ]);
        });
};
