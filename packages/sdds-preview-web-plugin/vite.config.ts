import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// React — общий для plasma (19, в корне node_modules). У ядра в своих node_modules лежит React 18 (devDependency),
// и `import 'react'` из его dist нашёл бы эту копию: в бандле оказалось бы два React (invalid hook call).
// Поэтому React, react-dom и styled-components всегда берутся из зависимостей плагина.
const require = createRequire(import.meta.url);
const own = (name: string) => dirname(require.resolve(`${name}/package.json`));
const alias = ['react', 'react-dom', 'styled-components'].map((name) => ({
    find: new RegExp(`^${name}(?=/|$)`),
    replacement: own(name),
}));
const dedupe = ['react', 'react-dom', 'styled-components'];

// Плагин раздаётся с отдельного origin (порт 3011): клиент читает `preview-plugin.json` через fetch,
// поэтому нужен CORS.
// `base: './'` — относительные пути в сборке, чтобы плагин работал из любого каталога (локально и на стенде).
export default defineConfig({
    base: './',
    plugins: [react()],
    resolve: { alias, dedupe },
    define: {
        'process.env': {},
    },
    server: {
        port: 3011,
        strictPort: true,
        cors: true,
    },
    preview: {
        port: 3011,
        strictPort: true,
        cors: true,
        allowedHosts: true,
    },
});
