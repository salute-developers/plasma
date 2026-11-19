import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

/**
 * Unit-тесты ядра.
 * - `*.test.ts` — чистая логика, выполняется в Node.
 * - `*.test.tsx` — поведение компонентов, выполняется в Chromium (Vitest Browser Mode).
 */
export default defineConfig({
    resolve: {
        dedupe: ['react', 'react-dom'],
        alias: {
            src: fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        clearMocks: true,
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    environment: 'node',
                    include: ['src/**/*.test.ts'],
                },
            },
            {
                extends: true,
                test: {
                    name: 'browser',
                    include: ['src/**/*.test.tsx'],
                    setupFiles: ['./vitest.setup.browser.ts'],
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
                        viewport: { width: 1000, height: 800 },
                        screenshotFailures: false,
                    },
                },
            },
        ],
    },
});
