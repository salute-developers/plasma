// INFO: Файл частично скопирован из репозитория plasma/website/plasma-theme-builder

import JSZip from 'jszip';
import { getMediaQuery } from '@salutejs/plasma-tokens-utils';

import { ThemeMeta, Variation } from '../types';

const deserializeZip = (content: string) => {
    const buf = Buffer.from(content, 'base64') as any;

    return JSZip.loadAsync(buf);
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
    let variations = {} as Record<Variation, any>;

    for (const relativePath of allFiles) {
        // eslint-disable-next-line no-await-in-loop
        const data = await zip.file(relativePath)?.async('string');

        if (!data) {
            // eslint-disable-next-line no-continue
            continue;
        }

        const res = JSON.parse(data);

        const [, platform, variant] = relativePath.match(/\/(.*)_(.*)\.json/im) || [];

        if (!platform || !variant) {
            meta = res;
            // eslint-disable-next-line no-continue
            continue;
        }

        if (platform !== 'web') {
            // eslint-disable-next-line no-continue
            continue;
        }

        variations = {
            ...variations,
            [variant]: {
                ...variations[variant as Variation],
                ...res,
            },
        };
    }

    return { meta, variations };
};

const getFileSource = async (owner: string, repo: string, path: string, branchName?: string) => {
    const result = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branchName}`, {
        headers: {
            accept: 'application/vnd.github.v3.full',
        },
        method: 'GET',
    });

    const data = await result.json();

    return data;
};

export const readTheme = async (themeName: string, themeVersion: string) => {
    const response = await getFileSource(
        'salute-developers',
        'theme-converter',
        `themes/${themeName}/${themeVersion}.zip`,
        'main',
    );

    const zip = await deserializeZip(response.content);

    const allFiles = await getAllRelativePath(zip);

    const result = await getThemeContent(zip, allFiles);

    return result;
};

export const getSelector = (content: string, selector = ':root') => `
${selector} {
${content}
}`;

export const getBreakpointSelector = (content: string, from?: number, to?: number, selector = ':root') => {
    const indent = '    ';
    const mediaQuery = getMediaQuery(from, to);

    return `
${mediaQuery} {
  ${selector} {
${content.replace(/ {2}/gim, indent)}
  }
}`;
};
