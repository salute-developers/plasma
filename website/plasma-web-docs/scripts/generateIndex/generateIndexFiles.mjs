import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { visit } from 'unist-util-visit';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import { fileURLToPath } from 'url';

import config from './config.mjs';
import generateMdxLink from './generateMdxLink.mjs';
import getValidMdxPaths from './getValidMdxPaths.mjs';

const EXCLUDED_BY_DEFAULT = ['forwardedAs', 'as', 'theme', 'ref'];
const MDX_IMPORT_REGEX = /import\s+[\s\S]*?\s+from\s+['"]([^'"]+\.mdx?)['"]/g;

function getTreeFromMdx(mdxContent) {
    return unified().use(remarkParse).use(remarkMdx).parse(mdxContent);
}

function getMdxGroup(mdxPath) {
    const relativePath = path.relative(config.pathToDocs, mdxPath);
    const pathSegments = relativePath.split(path.sep);

    return pathSegments.length > 1 ? pathSegments[0] : path.basename(mdxPath, '.mdx');
}

async function extractContentWithCode(mdxContent) {
    try {
        const { content, data: frontmatter } = matter(mdxContent);
        const tree = getTreeFromMdx(content);

        let textContent = '';

        visit(tree, (node) => {
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

                const hashes = '#'.repeat(node.depth);
                textContent += `${hashes} ${headingText} `;
            } else if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
                if (node.name === 'PropsTable') {
                    const propsTableData = { name: '', exclude: [], include: [] };

                    node.attributes.forEach((attr) => {
                        if (attr.name === 'name') {
                            propsTableData.name = attr.value;
                        } else if ((attr.name === 'exclude' || attr.name === 'include') && attr.value?.value) {
                            const matches = attr.value.value.match(/['"]([^'"]+)['"]/g) || [];
                            propsTableData[attr.name] = matches.map((str) => str.replace(/['"]/g, ''));
                        }
                    });

                    const componentTypesFolder = path.join(
                        fileURLToPath(import.meta.url),
                        '../../../.docusaurus/docusaurus-plugin-react-docgen-typescript/default',
                    );
                    const componentTypePath = path.join(componentTypesFolder, `${propsTableData.name}.json`);

                    if (fs.existsSync(componentTypePath)) {
                        const exclude = propsTableData.exclude.concat(EXCLUDED_BY_DEFAULT);
                        const { include } = propsTableData;
                        const props = JSON.parse(fs.readFileSync(componentTypePath, 'utf8'))?.props || {};

                        const propsFiltered = Object.entries(props)
                            .map((item) => {
                                return {
                                    key: item[0], // Ключ параметра
                                    prop: item[1], // Информация о параметре
                                };
                            })
                            .filter(
                                (type) =>
                                    !type?.prop?.parent?.fileName?.includes('@types/react') ||
                                    include?.includes(type.key),
                            )
                            .filter((type) => !exclude.includes(type.key))
                            .map((item) => ({ name: item.prop.name, type: item.prop.type }));

                        textContent += `Props (свойства) для компонента ${propsTableData.name}: ${JSON.stringify(
                            propsFiltered,
                        )} `;
                    } else {
                        console.log(componentTypePath, 'File does not exist');
                    }
                }
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

function resolveImportedMdxPaths(mdxContent, mdxPath) {
    const { content } = matter(mdxContent);
    const tree = getTreeFromMdx(content);
    const importedPaths = [];

    visit(tree, 'mdxjsEsm', (node) => {
        const importStatement = node.value || '';

        for (const match of importStatement.matchAll(MDX_IMPORT_REGEX)) {
            const importPath = match[1];

            if (!importPath.startsWith('.')) {
                continue;
            }

            const resolvedPath = path.resolve(path.dirname(mdxPath), importPath);

            if (fs.existsSync(resolvedPath)) {
                importedPaths.push(resolvedPath);
            }
        }
    });

    return importedPaths;
}

const importedContentCache = new Map();

async function collectImportedMdxContent(mdxPath, visited = new Set()) {
    if (importedContentCache.has(mdxPath)) {
        return importedContentCache.get(mdxPath);
    }

    const currentVisited = new Set(visited);
    const collectedContent = [];
    const mdxContent = fs.readFileSync(mdxPath, 'utf8');
    const importedPaths = resolveImportedMdxPaths(mdxContent, mdxPath);

    for (const importedPath of importedPaths) {
        if (currentVisited.has(importedPath)) {
            continue;
        }

        currentVisited.add(importedPath);

        const importedMdxContent = fs.readFileSync(importedPath, 'utf8');
        const { content } = await extractContentWithCode(importedMdxContent);

        if (content) {
            collectedContent.push(content);
        }

        const nestedImportedContent = await collectImportedMdxContent(importedPath, currentVisited);

        if (nestedImportedContent) {
            collectedContent.push(nestedImportedContent);
        }
    }

    const aggregatedContent = collectedContent.filter(Boolean).join('\n\n');
    importedContentCache.set(mdxPath, aggregatedContent);

    return aggregatedContent;
}

async function mdxToJson(mdxPath) {
    try {
        const mdxContent = fs.readFileSync(mdxPath, 'utf8');
        const { content, frontmatter } = await extractContentWithCode(mdxContent);
        const importedContent = await collectImportedMdxContent(mdxPath, new Set([mdxPath]));

        const componentName = frontmatter.id;

        return {
            pageContent: [content, importedContent].filter(Boolean).join('\n\n'),
            metadata: {
                heading: {
                    depth: 1,
                    text: frontmatter.slug || path.basename(mdxPath, '.mdx'),
                },
                source: {
                    url: generateMdxLink(mdxPath, componentName, config.baseUrl),
                },
                category: getMdxGroup(mdxPath),
                productId: config.productId,
            },
        };
    } catch (error) {
        console.error(`Error converting ${mdxPath}:`, error);
    }
}

export default async function generateIndexFiles() {
    const mdxPaths = getValidMdxPaths(config.pathToDocs, config.exclude);

    const data = [];

    for (const path of mdxPaths) {
        // eslint-disable-next-line no-await-in-loop
        const currentData = await mdxToJson(path);
        data.push(currentData);
    }

    // Генерация JSON нужна исключительно для отладки.
    const outputFilename = 'index.json';
    const outputPath = path.join(process.cwd(), outputFilename);
    await fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}
