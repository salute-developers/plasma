import JSZip from 'jszip';

import { Platform, PlatformsVariations, ThemeMeta } from '../types';
import { Theme } from '../themes';
import { createMetaTokens } from './createMetaTokens';
import { createVariationTokens } from './createVariationTokens';
import { extraMetaTokenGetters } from './metaTokensGetters';
import { extraThemeTokenGetters } from './variationTokensGetters';

type ThemeFileStructure = {
    'meta.json': string;
} & Record<Platform, Record<string, string>>;

const createZip = async (content: ThemeFileStructure) => {
    var zip = new JSZip();

    Object.entries(content).forEach(([item, value]) => {
        if (typeof value === 'string') {
            zip.file(item, value);
            return;
        }

        const folder = zip.folder(item);

        Object.entries(value).forEach(([fileName, value]) => {
            folder?.file(fileName, value);
        });
    });

    return await zip.generateAsync({ type: 'blob' });
};

const getFileStructure = (meta: ThemeMeta, variations: PlatformsVariations) => {
    let tokens = {
        'meta.json': JSON.stringify(meta),
    } as ThemeFileStructure;

    Object.entries(variations).forEach(([variation, platforms]) => {
        Object.entries(platforms).forEach(([platform, value]) => {
            tokens = {
                ...tokens,
                [platform]: {
                    ...tokens[platform],
                    [`${platform}_${variation}.json`]: JSON.stringify(value),
                },
            };
        });
    });

    return tokens;
};

export const writeTheme = async (theme: Theme) => {
    const metaTokens = createMetaTokens(theme, extraMetaTokenGetters);
    const variationTokens = createVariationTokens(theme, extraThemeTokenGetters);
    const fileStructure = getFileStructure(metaTokens, variationTokens);

    return await createZip(fileStructure);
};
