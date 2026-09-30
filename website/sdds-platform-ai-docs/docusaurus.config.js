import { themes } from 'prism-react-renderer';
import path from 'path';
import { withCustomConfig } from 'react-docgen-typescript';
import fg from 'fast-glob';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pckgJson = require('./package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const versionsArchived = require('./versionsArchived.json');

const { VERSION_NAME, PREFIX } = process.env;
const defaultUrl = PREFIX ? `/${PREFIX}/sdds-platform-ai/` : '/sdds-platform-ai/';
const baseUrl = VERSION_NAME ? `/versions/${VERSION_NAME}/` : defaultUrl;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
    title: 'sdds-platform-ai',
    tagline: 'Дизайн-система для разработки современных веб приложений.',
    url: 'https://plasma.sberdevices.ru/',
    baseUrl,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.png',
    organizationName: 'Salute-Developers',
    trailingSlash: true,
    themes: ['@docusaurus/theme-live-codeblock'],
    themeConfig: {
        navbar: {
            title: 'SDDS-PLATFORM-AI',
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
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/salute-developers/plasma/blob/master/website/sdds-platform-ai-docs/',
                    versions: {
                        current: {
                            label: pckgJson.dependencies['@salutejs/sdds-platform-ai'],
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
                    }).parse(
                        await fg([
                            '../../packages/sdds-platform-ai/src/**/*.{ts,tsx}',
                            '!../../packages/sdds-platform-ai/src/**/*.test.*',
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
                title: 'Библиотека компонентов SDDS PLATFORM AI',
                description:
                    'React-компоненты дизайн-системы SDDS PLATFORM AI для веб-приложений. Два варианта поставки: предсобранный CSS (по умолчанию) и styled-components.',
                version: pckgJson.dependencies['@salutejs/sdds-platform-ai'],
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
                    'utils/**',
                    'form/**',
                ],
                rootContent: [
                    'Установка: `npm install @salutejs/sdds-platform-ai @salutejs/sdds-themes` (peer-зависимости: react и react-dom версии 16.13.1 или выше).',
                    'Точки входа: `@salutejs/sdds-platform-ai` — предсобранный CSS (поставка по умолчанию), `@salutejs/sdds-platform-ai/styled-components` — нужен styled-components@5.3.1.',
                    'Темы: `sdds_platform_ai__light`, `sdds_platform_ai__dark` из `@salutejs/sdds-themes`; дизайн-токены — из `@salutejs/sdds-themes/tokens`.',
                    'MCP-сервер с актуальной документацией: `npx -y @salutejs/sdds-mcp@latest --lib sdds-platform-ai`.',
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
