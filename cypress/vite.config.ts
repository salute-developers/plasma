import path from 'path';
import fs from 'fs';

import { generateModules } from './plugins/generateModules';

const rootPath = path.resolve(__dirname, '..');
const packsPath = path.join(rootPath, 'packages');
const packageName = process.env.PACKAGE_NAME || '';
const resolveInsidePackage = (...segments: string[]) => path.join(packsPath, packageName, 'node_modules', ...segments);

// Async-функция нужна для динамического импорта @vitejs/plugin-react-swc.
// Cypress поддерживает viteConfig как функцию и вызывает её через await уже в ESM-контексте
// дев-сервера — это исключает статический require('vite') при CJS-загрузке cypress.config.ts.
export const getViteConfig = async () => {
    const { default: react } = await import('@vitejs/plugin-react-swc');

    // Генерируем реальные файлы вместо виртуальных модулей.
    // Реальные файлы esbuild умеет pre-bundle через optimizeDeps,
    // что устраняет ESM waterfall при загрузке каждого spec-файла.
    const { testPackage, testTheme, testConfigs } = generateModules(packsPath);

    return {
        plugins: [
            react({
                plugins: [['@swc/plugin-emotion', {}]],
            }),
            {
                name: 'preload-dep-chunks',
                transformIndexHtml() {
                    const depsDir = path.resolve(rootPath, 'node_modules/.vite/deps');
                    if (!fs.existsSync(depsDir)) return [];

                    const metaPath = path.join(depsDir, '_metadata.json');
                    if (!fs.existsSync(metaPath)) return [];

                    let hash: string;
                    try {
                        hash = (JSON.parse(fs.readFileSync(metaPath, 'utf-8')) as { hash: string }).hash;
                    } catch {
                        return [];
                    }

                    return fs
                        .readdirSync(depsDir)
                        .filter((f) => f.startsWith('chunk-') && f.endsWith('.js'))
                        .map((chunk) => ({
                            tag: 'link',
                            attrs: {
                                rel: 'modulepreload',
                                href: `/node_modules/.vite/deps/${chunk}?v=${hash}`,
                            },
                            injectTo: 'head' as const,
                        }));
                },
            },
            {
                name: 'cache-static-assets',
                configureServer(server: {
                    middlewares: {
                        use(
                            fn: (
                                req: { url?: string },
                                res: { setHeader(k: string, v: string): void },
                                next: () => void,
                            ) => void,
                        ): void;
                    };
                }) {
                    server.middlewares.use((req, res, next) => {
                        if (/\.(woff2?|ttf|otf|eot|png|jpg|jpeg|svg|gif|webp)$/.test(req.url ?? '')) {
                            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                        }
                        next();
                    });
                },
            },
        ],
        resolve: {
            preserveSymlinks: true,
            alias: [
                // Виртуальные модули заменены реальными сгенерированными файлами
                { find: '@plasma-cy/test-package', replacement: testPackage },
                { find: '@plasma-cy/test-theme', replacement: testTheme },
                { find: '@plasma-cy/test-configs', replacement: testConfigs },
                // /tokens/* → ESM-сборки: пакеты делают `export * from '@salutejs/plasma-themes/tokens/...'`
                // и получают CJS без этого алиаса → "exports is not defined" в ESM-контексте.
                {
                    find: /^@salutejs\/plasma-themes\/tokens(.*)/,
                    replacement: path.resolve(rootPath, 'packages/themes/plasma-themes/es/tokens$1'),
                },
                {
                    find: /^@salutejs\/sdds-themes\/tokens(.*)/,
                    replacement: path.resolve(rootPath, 'packages/themes/sdds-themes/es/tokens$1'),
                },
                // Синглтоны: явные алиасы гарантируют один экземпляр react/sc на странице
                { find: 'styled-components', replacement: resolveInsidePackage('styled-components') },
                { find: 'react', replacement: resolveInsidePackage('react') },
                { find: 'react-dom', replacement: resolveInsidePackage('react-dom') },
                { find: '@salutejs/plasma-icons', replacement: resolveInsidePackage('@salutejs', 'plasma-icons') },
                {
                    find: '@salutejs/plasma-tokens-b2c',
                    replacement: resolveInsidePackage('@salutejs', 'plasma-tokens-b2c'),
                },
                { find: '@salutejs/plasma-typo', replacement: resolveInsidePackage('@salutejs', 'plasma-typo') },
                {
                    find: '@salutejs/plasma-cy-utils',
                    replacement: path.resolve(rootPath, 'utils/plasma-cy-utils/src/index.ts'),
                },
                {
                    find: 'src/examples/components',
                    replacement: path.join(packsPath, packageName, 'src', 'components'),
                },
                { find: 'override/_Icon', replacement: resolveInsidePackage('@salutejs', 'plasma-icons') },
                // Заглушка: оригинальный platform.js падает при парсинге User Agent в Cypress/Vite среде
                { find: 'platform', replacement: path.resolve(__dirname, 'stubs/platform.ts') },
            ],
        },
        define: {
            'process.env': '{}',
        },
        optimizeDeps: {
            // CJS-пакеты конвертируются в ESM заранее — иначе `require()` в ESM-контексте
            // вызывает "Dynamic require of X is not supported".
            // Все три @plasma-cy/* — реальные сгенерированные файлы с абсолютными путями,
            // esbuild bundle-ит их в отдельные чанки, устраняя ESM waterfall запросов.
            include: [
                'cypress-plugin-tab',
                'react',
                'react-dom',
                'styled-components',
                '@salutejs/plasma-cy-utils',
                '@plasma-cy/test-package',
                '@plasma-cy/test-theme',
                '@plasma-cy/test-configs',
            ],
        },

        esbuild: { sourcemap: false },
        css: { devSourcemap: false },
        build: { sourcemap: false },
    };
};
