import { defineConfig, devices } from '@playwright/experimental-ct-react';
import { PlaywrightTestConfig } from '@playwright/test';

type Options = {
    testDir: string;
    snapshotsDir: string;
    projects?: PlaywrightTestConfig['projects'];
};

export function createPlaywrightConfig(options: Options): PlaywrightTestConfig {
    return defineConfig({
        testDir: options.testDir,
        outputDir: './playwright-results/output',
        snapshotDir: options.snapshotsDir,

        fullyParallel: !!process.env.CI,
        forbidOnly: !!process.env.CI,
        retries: process.env.CI ? 3 : 0,
        workers: process.env.CI ? 4 : undefined,

        reporter: [
            ['list'],
            [
                'html',
                {
                    outputFolder: './playwright-results/reports',
                    open: 'never',
                },
            ],
        ],

        use: {
            headless: true,
            trace: 'retain-on-first-failure',
            screenshot: 'only-on-failure',
            video: 'off',
            ctPort: 3100,
        },

        projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },
            /* {
                name: 'firefox',
                use: { ...devices['Desktop Firefox'] },
            },
            {
                name: 'webkit',
                use: { ...devices['Desktop Safari'] },
            },

            /!* Test against mobile viewports. *!/
            {
                name: 'Mobile Chrome',
                use: { ...devices['Pixel 5'] },
            },
            {
                name: 'Mobile Safari',
                use: { ...devices['iPhone 12'] },
            },

            /!* Test against branded browsers. *!/
            {
                name: 'Microsoft Edge',
                use: { ...devices['Desktop Edge'], channel: 'msedge' },
            },
            {
                name: 'Google Chrome',
                use: { ...devices['Desktop Chrome'], channel: 'chrome' },
            },*/
        ],
    });
}
