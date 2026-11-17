import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { visit } from 'unist-util-visit';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';

import type { Site } from '../site.ts';
import type { ResolvedMcpDataConfig } from '../config.ts';
import { formatPropsMarker } from '../propsMarker.ts';

import { generateMdxLink } from './generateMdxLink.ts';
import { getValidMdxPaths } from './getValidMdxPaths.ts';

const EXCLUDED_BY_DEFAULT = ['forwardedAs', 'as', 'theme', 'ref'];
const MDX_IMPORT_REGEX = /import\s+[\s\S]*?\s+from\s+['"]([^'"]+\.mdx?)['"]/g;

/** Узел mdast/mdx в том объёме, который нужен генератору. */
interface MdxNode {
    type: string;
    value?: string;
    lang?: string | null;
    depth?: number;
    name?: string | null;
    children?: MdxNode[];
    attributes?: Array<{ name?: string; value?: unknown }>;
}

interface DocgenProp {
    name?: unknown;
    type?: unknown;
    required?: unknown;
    defaultValue?: unknown;
    description?: unknown;
    parent?: { fileName?: string };
}

export interface IndexItem {
    pageContent: string;
    metadata: {
        heading: { depth: 1; text: string };
        source: { url: string };
        category: string;
        productId: string;
    };
}

interface IndexContext {
    site: Site;
    config: ResolvedMcpDataConfig;
    importedContentCache: Map<string, string>;
    missingDocgenFiles: string[];
}

function getTreeFromMdx(mdxContent: string): MdxNode {
    return (unified().use(remarkParse).use(remarkMdx).parse(mdxContent) as unknown) as MdxNode;
}

function getMdxGroup(mdxPath: string, docsDir: string): string {
    const relativePath = path.relative(docsDir, mdxPath);
    const pathSegments = relativePath.split(path.sep);

    return pathSegments.length > 1 ? pathSegments[0] : path.basename(mdxPath, '.mdx');
}

function getMdxName(frontmatter: Record<string, unknown>, mdxPath: string, docsDir: string): string {
    const fallback = path.basename(mdxPath, '.mdx');
    const name =
        getMdxGroup(mdxPath, docsDir) === 'components'
            ? (frontmatter.title as string) || fallback
            : (frontmatter.slug as string) || fallback;

    const normalizedName = name.replace(/^\/+/, '');

    return normalizedName || (frontmatter.id as string) || fallback;
}

function getPropsTableContent(node: MdxNode, context: IndexContext): string {
    const propsTableData: { name: string; exclude: string[]; include: string[] } = {
        name: '',
        exclude: [],
        include: [],
    };

    (node.attributes ?? []).forEach((attr) => {
        if (attr.name === 'name') {
            propsTableData.name = attr.value as string;
        } else if (attr.name === 'exclude' || attr.name === 'include') {
            const expression = (attr.value as { value?: unknown } | null | undefined)?.value;

            if (typeof expression === 'string' && expression) {
                const matches = expression.match(/['"]([^'"]+)['"]/g) || [];
                propsTableData[attr.name] = matches.map((str) => str.replace(/['"]/g, ''));
            }
        }
    });

    const componentTypePath = path.join(context.site.docgenDir, `${propsTableData.name}.json`);

    if (!fs.existsSync(componentTypePath)) {
        console.warn(`Нет docgen-данных компонента: ${componentTypePath}`);
        context.missingDocgenFiles.push(componentTypePath);

        return '';
    }

    const exclude = propsTableData.exclude.concat(EXCLUDED_BY_DEFAULT);
    const { include } = propsTableData;
    const props: Record<string, DocgenProp> = JSON.parse(fs.readFileSync(componentTypePath, 'utf8'))?.props || {};

    const propsFiltered = Object.entries(props)
        .map(([key, prop]) => ({ key, prop }))
        .filter((type) => !type?.prop?.parent?.fileName?.includes('@types/react') || include?.includes(type.key))
        .filter((type) => !exclude.includes(type.key))
        .map(({ prop }) => ({
            name: prop.name,
            type: prop.type,
            required: prop.required,
            defaultValue: prop.defaultValue,
            description: prop.description,
        }));

    return `${formatPropsMarker(propsTableData.name)} ${JSON.stringify(propsFiltered)} `;
}

function extractContentWithCode(
    mdxContent: string,
    context: IndexContext,
): { content: string; frontmatter: Record<string, unknown> } {
    try {
        const { content, data: frontmatter } = matter(mdxContent);
        const tree = getTreeFromMdx(content);

        let textContent = '';

        visit(tree as never, (rawNode: unknown) => {
            const node = rawNode as MdxNode;

            if (node.type === 'text') {
                textContent += `${node.value} `;
            } else if (node.type === 'code') {
                const codeBlock = `\`\`\`${node.lang || ''}\n${node.value}\n\`\`\``;
                textContent += `${codeBlock}\n\n`;
            } else if (node.type === 'inlineCode') {
                textContent += `\`${node.value}\` `;
            } else if (node.type === 'heading') {
                let headingText = '';

                if (node.children) {
                    node.children.forEach((child) => {
                        if (child.type === 'text') {
                            headingText += child.value;
                        } else if (child.type === 'inlineCode') {
                            headingText += `\`${child.value}\``;
                        }
                    });
                }

                const hashes = '#'.repeat(node.depth ?? 1);
                textContent += `${hashes} ${headingText} `;
            } else if (
                (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
                node.name === 'PropsTable'
            ) {
                textContent += getPropsTableContent(node, context);
            }
        });

        return {
            content: textContent.trim(),
            frontmatter,
        };
    } catch (error) {
        console.error('Error processing MDX:', error);

        return { content: '', frontmatter: {} };
    }
}

function resolveImportedMdxPaths(mdxContent: string, mdxPath: string): string[] {
    const { content } = matter(mdxContent);
    const tree = getTreeFromMdx(content);
    const importedPaths: string[] = [];

    visit(tree as never, 'mdxjsEsm', (rawNode: unknown) => {
        const importStatement = (rawNode as MdxNode).value || '';

        Array.from(importStatement.matchAll(MDX_IMPORT_REGEX)).forEach((match) => {
            const importPath = match[1];

            if (!importPath.startsWith('.')) {
                return;
            }

            const resolvedPath = path.resolve(path.dirname(mdxPath), importPath);

            if (fs.existsSync(resolvedPath)) {
                importedPaths.push(resolvedPath);
            }
        });
    });

    return importedPaths;
}

function collectImportedMdxContent(mdxPath: string, context: IndexContext, visited: Set<string> = new Set()): string {
    const cached = context.importedContentCache.get(mdxPath);

    if (cached !== undefined) {
        return cached;
    }

    const currentVisited = new Set(visited);
    const collectedContent: string[] = [];
    const mdxContent = fs.readFileSync(mdxPath, 'utf8');
    const importedPaths = resolveImportedMdxPaths(mdxContent, mdxPath);

    importedPaths.forEach((importedPath) => {
        if (currentVisited.has(importedPath)) {
            return;
        }

        currentVisited.add(importedPath);

        const importedMdxContent = fs.readFileSync(importedPath, 'utf8');
        const { content } = extractContentWithCode(importedMdxContent, context);

        if (content) {
            collectedContent.push(content);
        }

        const nestedImportedContent = collectImportedMdxContent(importedPath, context, currentVisited);

        if (nestedImportedContent) {
            collectedContent.push(nestedImportedContent);
        }
    });

    const aggregatedContent = collectedContent.filter(Boolean).join('\n\n');
    context.importedContentCache.set(mdxPath, aggregatedContent);

    return aggregatedContent;
}

function mdxToJson(mdxPath: string, context: IndexContext): IndexItem | undefined {
    try {
        const { site, config } = context;
        const mdxContent = fs.readFileSync(mdxPath, 'utf8');
        const { content, frontmatter } = extractContentWithCode(mdxContent, context);
        const importedContent = collectImportedMdxContent(mdxPath, context, new Set([mdxPath]));

        const componentName = frontmatter.id as string | undefined;

        return {
            pageContent: [content, importedContent].filter(Boolean).join('\n\n'),
            metadata: {
                heading: {
                    depth: 1,
                    text: getMdxName(frontmatter, mdxPath, site.docsDir),
                },
                source: {
                    url: generateMdxLink(mdxPath, site.docsDir, componentName, config.baseUrl),
                },
                category: getMdxGroup(mdxPath, site.docsDir),
                productId: site.lib,
            },
        };
    } catch (error) {
        console.error(`Error converting ${mdxPath}:`, error);

        return undefined;
    }
}

/** Собирает страницы документации в `index.json`. */
export function generateIndex(site: Site, config: ResolvedMcpDataConfig): Array<IndexItem | undefined> {
    if (!fs.existsSync(site.docgenDir)) {
        throw new Error(
            `Нет docgen-данных: ${site.docgenDir}\n` +
                `Сначала соберите сайт: npm run build --prefix=./website/${site.lib}-docs -- --no-minify`,
        );
    }

    const context: IndexContext = {
        site,
        config,
        importedContentCache: new Map(),
        missingDocgenFiles: [],
    };

    const mdxPaths = getValidMdxPaths(site.docsDir, config.exclude);
    const data = mdxPaths.map((mdxPath) => mdxToJson(mdxPath, context));

    fs.writeFileSync(site.indexJsonPath, JSON.stringify(data, null, 2));

    if (context.missingDocgenFiles.length > 0) {
        console.warn(`Компонентов без docgen-данных: ${context.missingDocgenFiles.length}`);
    }

    console.log(`Created ${site.indexJsonPath} (${data.length} pages)`);

    return data;
}
