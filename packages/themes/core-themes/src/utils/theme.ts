// INFO: Файл частично скопирован из репозитория plasma/website/plasma-theme-builder

import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { getMediaQuery } from '@salutejs/plasma-tokens-utils';

import { ThemeMeta, Variation } from '../types';

const RETRY_STATUSES = [408, 425, 429, 500, 502, 503, 504];
const RETRY_DELAYS = [1000, 3000, 5000];
const CACHE_DIR = path.resolve(__dirname, '../../../../../../node_modules/.cache/core-themes');

const wait = (timeout: number) =>
    new Promise<void>((resolve) => {
        setTimeout(resolve, timeout);
    });

const getRetryDelay = (result: Response, retryIndex: number) => {
    const retryAfter = result.headers.get('retry-after');

    if (retryAfter) {
        const seconds = Number(retryAfter);

        if (!Number.isNaN(seconds)) {
            return seconds * 1000;
        }
    }

    return RETRY_DELAYS[retryIndex];
};

const readCachedZip = (source: string) => {
    const cachePath = path.join(CACHE_DIR, source);

    if (!fs.existsSync(cachePath)) {
        return undefined;
    }

    return fs.readFileSync(cachePath);
};

const writeCachedZip = (source: string, data: Buffer) => {
    const cachePath = path.join(CACHE_DIR, source);
    const cacheDir = path.dirname(cachePath);
    const tempPath = `${cachePath}.${process.pid}.tmp`;

    fs.mkdirSync(cacheDir, { recursive: true });
    fs.writeFileSync(tempPath, data as any);
    fs.renameSync(tempPath, cachePath);
};

const readZip = async (url: string, source: string) => {
    const cachedZip = readCachedZip(source);

    if (cachedZip) {
        return JSZip.loadAsync(cachedZip as any);
    }

    for (let retryIndex = 0; retryIndex <= RETRY_DELAYS.length; retryIndex += 1) {
        // eslint-disable-next-line no-await-in-loop
        const result = await fetch(url, {
            method: 'GET',
        });

        if (result.ok) {
            // eslint-disable-next-line no-await-in-loop
            const data = Buffer.from(await result.arrayBuffer());

            writeCachedZip(source, data);

            return JSZip.loadAsync(data as any);
        }

        const canRetry = RETRY_STATUSES.includes(result.status) && retryIndex < RETRY_DELAYS.length;

        if (!canRetry) {
            throw new Error(`Failed to load theme ${source}: ${result.status} ${result.statusText}`);
        }

        // eslint-disable-next-line no-await-in-loop
        await wait(getRetryDelay(result, retryIndex));
    }

    throw new Error(`Failed to load theme ${source}`);
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

export const readTheme = async (themeName: string, themeVersion: string) => {
    const source = `themes/${themeName}/${themeVersion}.zip`;
    const zip = await readZip(
        `https://raw.githubusercontent.com/salute-developers/theme-converter/main/${source}`,
        source,
    );

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
