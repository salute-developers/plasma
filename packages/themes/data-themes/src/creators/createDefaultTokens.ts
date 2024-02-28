import fs from 'fs';
import path from 'path';
import { generateTokenSet, writeGeneratedToFS, ThemeTokenDataGroups } from '@salutejs/plasma-tokens-utils';

const typoMixins = `export {
    dsplL,
    dsplLBold,
    dsplM,
    dsplMBold,
    dsplS,
    dsplSBold,
    h1,
    h1Bold,
    h2,
    h2Bold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    h5,
    h5Bold,
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    bodyXXS,
    bodyXXSBold,
    textL,
    textLBold,
    textM,
    textMBold,
    textS,
    textSBold,
    textXS,
    textXSBold,
} from '@salutejs/plasma-typo';`;

export const createDefaultTokens = (srcDir: string, defaultTheme: ThemeTokenDataGroups) => {
    const brandsDir = path.join(srcDir, 'tokens');
    fs.existsSync(brandsDir) || fs.mkdirSync(brandsDir);

    const { shadow, color, borderRadius } = defaultTheme;

    writeGeneratedToFS(brandsDir, [
        {
            file: 'index.ts',
            content: `${generateTokenSet({ tokens: color, type: 'css', mode: 'color' })}\n${generateTokenSet({
                tokens: shadow,
                type: 'css',
                mode: 'shadow',
            })}\n${generateTokenSet({ tokens: borderRadius, type: 'css', mode: 'borderRadius' })}\n${typoMixins}`,
        },
    ]);
};
