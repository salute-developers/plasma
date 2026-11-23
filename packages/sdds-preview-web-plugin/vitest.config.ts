import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { defineConfig } from 'vitest/config';
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

export default defineConfig({
    plugins: [react()],
    resolve: { alias, dedupe },
    test: {
        environment: 'jsdom',
        environmentOptions: {
            jsdom: { url: 'http://localhost:3011/', pretendToBeVisual: true },
        },
        include: ['test/**/*.{test,spec}.{ts,tsx}'],
        setupFiles: ['./test/setup.ts'],
        restoreMocks: true,
        testTimeout: 20000,
        // Пакеты plasma из workspace Vitest иначе отдал бы Node как есть: через Vite к ним применяется `resolve.alias`.
        server: { deps: { inline: [/@salutejs\//] } },
    },
});
