import { themes } from 'prism-react-renderer';
import path from 'path';
import { withCustomConfig } from 'react-docgen-typescript';
import fg from 'fast-glob';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pckgJson = require('./package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const versionsArchived = require('./versionsArchived.json');

const { VERSION_NAME, PREFIX, TYPESENSE_KEY = '', TYPESENSE_SERVICE_HOSTNAME = '', QDRANT_API_KEY = '' } = process.env;
const defaultUrl = PREFIX ? `/${PREFIX}/sdds-finai/` : '/sdds-finai/';
const baseUrl = VERSION_NAME ? `/versions/${VERSION_NAME}/` : defaultUrl;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
    title: 'sdds-finai',
    tagline: 'Дизайн-система для разработки современных веб приложений.',
    url: 'https://plasma.sberdevices.ru/',
    baseUrl,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.png',
    organizationName: 'Salute-Developers',
    trailingSlash: true,
    themes: ['@docusaurus/theme-live-codeblock', 'docusaurus-theme-search-typesense'],
    future: {
        experimental_faster: true,
    },
    themeConfig: {
        navbar: {
            title: 'SDDS-FINAI',
            items: [
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                    dropdownActiveClassDisabled: false,
                    dropdownItemsAfter: [
                        ...Object.entries(versionsArchived).map(([versionName, versionUrl]) => ({
                            label: versionName,
                            href: versionUrl,
                        })),
                    ],
                },
                {
                    href: 'https://github.com/salute-developers/plasma',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: `${baseUrl}ai-search/`,
                    label: 'AI-поиск',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Сообщество',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/salute-developers/plasma',
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: themes.github,
            darkTheme: themes.dracula,
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Whether to use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode.
            respectPrefersColorScheme: true,
        },
        typesense: {
            // Replace this with the name of your index/collection.
            // It should match the "index_name" entry in the scraper's "config.json" file.
            typesenseCollectionName: 'finai',

            typesenseServerConfig: {
                nodes: [
                    {
                        host: TYPESENSE_SERVICE_HOSTNAME,
                        port: 443,
                        protocol: 'https',
                    },
                ],
                apiKey: TYPESENSE_KEY,
            },

            // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
            typesenseSearchParameters: {},

            // Optional
            contextualSearch: true,
        },
        qdrantApiKey: QDRANT_API_KEY,
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/salute-developers/plasma/blob/master/website/sdds-finai-docs/',
                    versions: {
                        current: {
                            label: pckgJson.dependencies['@salutejs/sdds-finai'],
                            path: '',
                        },
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        function docgenPlugin() {
            // Плагин генерации документации
            return {
                name: 'docusaurus-plugin-react-docgen-typescript',
                async loadContent() {
                    // Загрузка компонентов для документации
                    return withCustomConfig(path.resolve(__dirname, 'tsconfig.json'), {
                        shouldExtractLiteralValuesFromEnum: true,
                        shouldRemoveUndefinedFromOptional: true,
                        propFilter: () => {
                            // Функция обрезки типов
                            return true;
                        },
                        componentNameResolver: (exp, source) => {
                            const filePath = source.fileName;

                            let baseName = null;

                            // 1. export const Button = ...
                            if (typeof exp?.name === 'string') {
                                baseName = exp.name;
                            }

                            // 2. export function Button() {}
                            if (!baseName && exp?.name?.escapedText) {
                                baseName = String(exp.name.escapedText);
                            }

                            // 3. fallback — имя файла
                            if (!baseName) {
                                baseName = path.basename(filePath).replace(/\.(ts|tsx)$/, '');
                            }

                            if (filePath.includes('/src/components/_beta/')) {
                                return `${baseName}Beta`;
                            }

                            return baseName;
                        },
                    }).parse(
                        await fg([
                            '../../packages/sdds-finai/src/**/*.{ts,tsx}',
                            '!../../packages/sdds-finai/src/**/*.test.*',
                        ]),
                    );
                },
                configureWebpack(config) {
                    return {
                        resolve: {
                            alias: {
                                '@docgen': path.join(
                                    config.resolve.alias['@generated'],
                                    'docusaurus-plugin-react-docgen-typescript',
                                    'default',
                                ),
                            },
                        },
                    };
                },
                async contentLoaded({ content, actions }) {
                    // Генерация массива типов
                    const names = [];
                    content
                        .filter((module) => {
                            const result =
                                !names.includes(module.displayName) &&
                                /^[A-Z]/.test(module.displayName) &&
                                (module.props || module.description) &&
                                module.displayName !== 'Default';

                            if (result) {
                                names.push(module.displayName);
                                return true;
                            }

                            return false;
                        })
                        .forEach(async (component) =>
                            actions.createData(
                                `${component.displayName}.json`,
                                JSON.stringify({
                                    props: Object.entries(component.props).reduce(
                                        (acc, [key, { declarations, ...rest }]) => ({
                                            ...acc,
                                            [key]: rest,
                                        }),
                                        {},
                                    ),
                                    description: component.description,
                                }),
                            ),
                        );
                },
            };
        },
        function aliasPlugin() {
            return {
                name: 'docusaurus-plugin-aliases',
                configureWebpack() {
                    return {
                        resolve: {
                            symlinks: false,
                            alias: {
                                react: path.dirname(require.resolve('react/package.json', { paths: [__dirname] })),
                                'react-dom': path.dirname(
                                    require.resolve('react-dom/package.json', { paths: [__dirname] }),
                                ),
                                'styled-components': path.dirname(
                                    require.resolve('styled-components/package.json', { paths: [__dirname] }),
                                ),
                            },
                        },
                    };
                },
            };
        },
        [
            'docusaurus-plugin-llms',
            {
                excludeImports: true,
                removeDuplicateHeadings: true,
                generateLLMsTxt: true,
                generateLLMsFullTxt: true,
                // routeBasePath доков — '/', как в preset-classic; иначе плагин строит ссылки с /docs/
                docsDir: [{ path: 'docs', routeBasePath: '/' }],
                // .md-копии страниц в выдаче сборки: ссылки в llms.txt ведут на них (конвенция llmstxt.org)
                generateMarkdownFiles: true,
                // Docusaurus (_examples, components/_*) не имеют маршрутов
                ignoreFiles: ['**/_*/**', '**/_*.md', '**/_*.mdx'],
                title: 'Библиотека компонентов SDDS FINAI',
                description:
                    'React-компоненты дизайн-системы SDDS FINAI для веб-приложений. Три варианта поставки: styled-components (по умолчанию), предсобранный CSS и emotion.',
                version: pckgJson.dependencies['@salutejs/sdds-finai'],
                // страницы guides/* имеют абсолютный slug (/next, /how-to-mcp, ...) — плагин не учитывает
                // его при сопоставлении с маршрутами, поэтому вычищаем служебные сегменты из URL вручную
                pathTransformation: {
                    ignorePaths: ['docs', 'guides'],
                },
                includeOrder: [
                    'intro*',
                    'guides/next*',
                    'guides/how-to-mcp*',
                    'guides/how-to-icons*',
                    'guides/react_17*',
                    'guides/FAQ*',
                    'components/**',
                    'beta/**',
                    'utils/**',
                    'form/**',
                ],
                rootContent: [
                    'Установка: `npm install @salutejs/sdds-finai @salutejs/sdds-themes` (peer-зависимости: react и react-dom версии 16.13.1 или выше, styled-components версии 5.3.1 или @emotion/react и @emotion/styled версии 11 или выше — в зависимости от точки входа).',
                    'Точки входа: `@salutejs/sdds-finai` — styled-components (поставка по умолчанию), `@salutejs/sdds-finai/css` — предсобранный CSS, `@salutejs/sdds-finai/emotion` — нужны пакеты @emotion/*. Beta-компоненты — из `@salutejs/sdds-finai/beta` (варианты `/beta/css` и `/beta/emotion`).',
                    'Темы: `sdds_finai__light`, `sdds_finai__dark` из `@salutejs/sdds-themes`; дизайн-токены — из `@salutejs/sdds-themes/tokens`.',
                    'MCP-сервер с актуальной документацией: `npx -y @salutejs/sdds-mcp@latest --lib sdds-finai`.',
                ].join('\n\n'),
            },
        ],
    ],
    markdown: {
        format: 'detect',
        mdx1Compat: {
            comments: true,
            admonitions: true,
            headingIds: true,
        },
    },
};

export default config;
