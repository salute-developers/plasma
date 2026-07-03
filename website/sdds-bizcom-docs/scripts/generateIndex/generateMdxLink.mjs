import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import config from './config.mjs';

const LIB_NAME = path.basename(path.resolve(dirname(fileURLToPath(import.meta.url)), '../..'));
const DOCS_PATH = `${LIB_NAME}/docs`;

export default (absolutePath = '', componentName = '', baseUrl = '/') => {
    if (componentName === 'intro') {
        return config.baseUrl;
    }

    const normalizedAbsolutePath = absolutePath.replace(/\\/g, '/');
    const docsIndex = normalizedAbsolutePath.indexOf(DOCS_PATH);

    if (docsIndex === -1) {
        return absolutePath;
    }

    let relativePath = normalizedAbsolutePath.substring(docsIndex + DOCS_PATH.length);

    relativePath = relativePath.replace(/^[\\/]+|[\\/]+$/g, '');

    relativePath = relativePath.replace(/\.mdx?$/, '');

    const pathSegments = relativePath.split(/[\\/]/);

    if (pathSegments.length > 0) {
        pathSegments[pathSegments.length - 1] = componentName;
    }

    const newPath = pathSegments.join('/');

    let normalizedBaseUrl = baseUrl;
    if (!normalizedBaseUrl.endsWith('/')) {
        normalizedBaseUrl += '/';
    }

    return `${normalizedBaseUrl}${newPath}/`;
};
