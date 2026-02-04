import config from './config.mjs';

const LIB_NAME = 'sdds-finai-docs';
const DOCS_PATH = `${LIB_NAME}/docs`;

export default (absolutePath = '', componentName = '', baseUrl = '/') => {
    if (componentName === 'intro') {
        return config.baseUrl;
    }

    const docsIndex = absolutePath.indexOf(LIB_NAME);

    if (docsIndex === -1) {
        return absolutePath;
    }

    let relativePath = absolutePath.substring(docsIndex + DOCS_PATH.length);

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
