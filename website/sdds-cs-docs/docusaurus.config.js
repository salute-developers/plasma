import { themes } from 'prism-react-renderer';

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/order
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const docgen = require('react-docgen-typescript');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fg = require('fast-glob');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pckgJson = require('./package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const versionsArchived = require('./versionsArchived.json');

const { VERSION_NAME, PREFIX = '', TYPESENSE_KEY = '', TYPESENSE_SERVICE_HOSTNAME = '' } = process.env;
const defaultUrl = PREFIX ? `/${PREFIX}/sdds-cs/` : '/sdds-cs/';
const baseUrl = VERSION_NAME ? `/versions/${VERSION_NAME}/` : defaultUrl;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'SDDS CS',
    tagline: 'Дизайн-система для разработки современных приложений.',
    url: 'https://plasma.sberdevices.ru/',
    baseUrl,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.png',
    organizationName: 'Salute-Developers',
    projectName: 'sdds-cs',
    trailingSlash: true,
    themes: ['@docusaurus/theme-live-codeblock', 'docusaurus-theme-search-typesense'],
    future: {
        experimental_faster: true,
    },
    themeConfig: {
        navbar: {
            title: 'SDDS CS',
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
            typesenseCollectionName: 'cs',

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
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/salute-developers/plasma/blob/master/website/sdds-cs-docs/',
                    versions: {
                        current: {
                            label: pckgJson.dependencies['@salutejs/sdds-cs'],
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
                // Загрузка компонентов для документации
                async loadContent() {
                    return docgen
                        .withCustomConfig(path.resolve(__dirname, 'tsconfig.json'), {
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
                        })
                        .parse(
                            await fg([
                                '../../packages/sdds-cs/src/**/*.{ts,tsx}',
                                '!../../packages/sdds-cs/src/**/*.test.*',
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
