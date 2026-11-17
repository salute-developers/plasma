import path from 'node:path';

/**
 * Строит URL страницы: путь файла относительно `docs`, где последний сегмент заменён на `id` из frontmatter.
 * Страница `intro` открывается по `baseUrl`.
 */
export function generateMdxLink(mdxPath: string, docsDir: string, componentName = '', baseUrl = '/'): string {
    if (componentName === 'intro') {
        return baseUrl;
    }

    const relativeToDocs = path.relative(docsDir, mdxPath);

    if (!relativeToDocs || relativeToDocs.startsWith('..') || path.isAbsolute(relativeToDocs)) {
        return mdxPath;
    }

    let relativePath = relativeToDocs.replace(/\\/g, '/');

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
}
