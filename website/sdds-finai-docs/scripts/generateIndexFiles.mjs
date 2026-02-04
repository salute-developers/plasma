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

async function extractContentWithCode(mdxContent) {
    try {
        const { content, data: frontmatter } = matter(mdxContent);

        const tree = unified().use(remarkParse).use(remarkMdx).parse(content);

        let textContent = '';
        const codeBlocks = [];

        visit(tree, (node) => {
            if (node.type === 'text') {
                textContent += `${node.value} `;
            } else if (node.type === 'code') {
                const codeBlock = `\`\`\`${node.lang || ''}\n${node.value}\n\`\`\``;
                codeBlocks.push(codeBlock);
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
                textContent += `${hashes} `;
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
                        '../../.docusaurus/docusaurus-plugin-react-docgen-typescript/default',
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
            codeBlocks,
        };
    } catch (error) {
        console.error('Error processing MDX:', error);

        return { content: '', frontmatter: {}, codeBlocks: [] };
    }
}

async function mdxToJson(mdxPath) {
    try {
        const mdxContent = await fs.readFileSync(mdxPath);
        const { content, frontmatter } = await extractContentWithCode(mdxContent);

        const componentName = frontmatter.id;

        return {
            pageContent: content,
            metadata: {
                heading: {
                    depth: 1,
                    text: frontmatter.slug || path.basename(mdxPath, '.mdx'),
                },
                source: {
                    url: generateMdxLink(mdxPath, componentName, config.baseUrl),
                },
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
    // const outputFilename = 'output.json';
    // const outputPath = path.join(process.cwd(), outputFilename);
    // await fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}
