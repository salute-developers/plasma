import path from 'path';
import { defineConfig, devices } from '@playwright/experimental-ct-react';

const getPackageTestsPath = (packageName: string) =>
    path.resolve(__dirname, '..', 'packages', packageName, 'src', 'components');
const resolveInsidePackage = (packageName: string, libName: string) =>
    path.resolve(__dirname, '..', 'packages', packageName, 'node_modules', libName);
const resolveComponentExport = (packageName: string) => path.resolve(__dirname, '..', 'packages', packageName);

const packageName = process.env.PACKAGE;

if (!packageName) {
    throw new Error('Provide PACKAGE env to cli command');
}

export default defineConfig({
    testMatch: '**/*.spec.{ts,tsx}',
    outputDir: `./results/${packageName}`,
    snapshotPathTemplate: './snapshots/{projectName}/{platform}/{testFileName}/{testName}{ext}',
    timeout: 10 * 1000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['list'],
        [
            'html',
            {
                open: 'never',
                outputFolder: `./results/reports/${packageName}`,
            },
        ],
    ],
    use: {
        headless: true,
        trace: 'retain-on-first-failure',
        screenshot: 'on',
        video: 'off',
        ctPort: 3100,
        ctViteConfig: {
            resolve: {
                extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.jsx', '.json', '.map'],
                alias: {
                    'styled-components': resolveInsidePackage(packageName, 'styled-components'),
                    react: resolveInsidePackage(packageName, 'react'),
                    'react-dom': resolveInsidePackage(packageName, 'react-dom'),
                    '@salutejs/plasma-icons': resolveInsidePackage(packageName, '@salutejs/plasma-icons'),
                    '@salutejs/plasma-playwright-utils': resolveInsidePackage(
                        packageName,
                        '@salutejs/plasma-playwright-utils',
                    ),
                    './component.export': resolveComponentExport(packageName),
                },
            },
            define: {
                'import.meta.env.PACKAGE': `"${packageName}"`,
            },
        },
    },
    projects: [
        {
            name: packageName,
            testDir: getPackageTestsPath(packageName),
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
