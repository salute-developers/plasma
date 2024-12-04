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

const { PR_NAME, VERSION_NAME } = process.env;
const prefix = VERSION_NAME || !PR_NAME ? '' : `/pr/${PR_NAME}`;
const baseUrl = VERSION_NAME ? `/versions/${VERSION_NAME}/` : `${prefix}/b2c/`;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Plasma B2C',
    tagline: 'Дизайн-система для разработки современных приложений.',
    url: 'https://plasma.sberdevices.ru/',
    baseUrl,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.png',
    organizationName: 'Salute-Developers',
    projectName: 'Plasma',
    trailingSlash: true,
    themes: ['@docusaurus/theme-live-codeblock'],
    themeConfig: {
        navbar: {
            title: 'Plasma',
            logo: {
                alt: 'Plasma',
                src: 'images/plasma-logo.png',
            },
            items: [
                {
                    href: `https://plasma.sberdevices.ru${prefix}/ui/`,
                    position: 'left',
                    label: 'UI',
                },
                {
                    href: `https://plasma.sberdevices.ru${prefix}/web/`,
                    position: 'left',
                    label: 'WEB',
                },
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'intro',
                    label: 'B2C',
                },
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
                    title: 'Документация',
                    items: [
                        {
                            label: 'Plasma UI',
                            to: `https://plasma.sberdevices.ru${prefix}/ui/`,
                        },
                        {
                            label: 'Plasma WEB',
                            to: `https://plasma.sberdevices.ru${prefix}/web/`,
                        },
                        {
                            label: 'Plasma B2C',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Сообщество',
                    items: [
                        {
                            label: 'Telegram',
                            href: 'https://t.me/smartmarket_community',
                        },
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
                    editUrl: 'https://github.com/salute-developers/plasma/blob/master/website/plasma-b2c-docs/',
                    versions: {
                        current: {
                            label: pckgJson.dependencies['@salutejs/plasma-b2c'],
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
                    return docgen
                        .withCustomConfig('./tsconfig.json', {
                            shouldExtractLiteralValuesFromEnum: true,
                            shouldRemoveUndefinedFromOptional: true,
                            propFilter: () => {
                                // Функция обрезки типов
                                return true;
                            },
                        })
                        .parse(
                            await fg([
                                '../../packages/plasma-b2c/src/**/*.{ts,tsx}',
                                '!../../packages/plasma-b2c/src/**/*.test.*',
                                '../../packages/plasma-hope/src/**/*.{ts,tsx}',
                                '!../../packages/plasma-hope/src/**/*.test.*',
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
                                react: path.resolve(__dirname, 'node_modules', 'react'),
                                'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
                                'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
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
