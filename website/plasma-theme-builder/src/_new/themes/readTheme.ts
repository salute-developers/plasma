import JSZip from 'jszip';

import { getFileSource } from '../../api';
import { PlatformsVariations, ThemeMeta } from '../types';

const deserializeZip = async (content: string) => {
    const buf = Buffer.from(content, 'base64');

    return await JSZip.loadAsync(buf);
};

const getAllRelativePath = async (zip: JSZip) => {
    const allFiles: Array<string> = [];

    zip.forEach((relativePath) => {
        allFiles.push(relativePath);
    });

    return allFiles;
};

const getThemeContent = async (zip: JSZip, allFiles: Array<string>) => {
    let meta = {} as ThemeMeta;
    let variation = {} as PlatformsVariations;

    for (const relativePath of allFiles) {
        const data = await zip.file(relativePath)?.async('string');

        if (!data) {
            continue;
        }

        const res = JSON.parse(data);

        const [, platform, variant] = relativePath.match(/\/(.*)_(.*)\.json/im) || [];

        if (!platform || !variant) {
            meta = res;
            continue;
        }

        variation = {
            ...variation,
            [variant]: {
                ...variation[variant as keyof PlatformsVariations],
                [platform]: res,
            },
        };
    }

    return { meta, variation };
};

export const readTheme = async (themeName: string, themeVersion: string) => {
    const response = await getFileSource(
        undefined,
        'salute-developers',
        'theme-converter',
        `themes/${themeName}/${themeVersion}.zip`,
        'main',
        '',
        'full',
    );

    const content = (response && 'content' in response && response.content) || '';

    const zip = await deserializeZip(content);

    const allFiles = await getAllRelativePath(zip);

    return await getThemeContent(zip, allFiles);
};
