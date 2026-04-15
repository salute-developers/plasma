import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

export const setupNodeEvents = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    addMatchImageSnapshotPlugin(on);

    try {
        const { webkit } = await import('playwright-webkit');

        config.browsers = [
            ...config.browsers,
            {
                name: 'webkit',
                family: 'webkit',
                channel: 'stable',
                displayName: 'WebKit',
                version: 'unknown',
                majorVersion: 'unknown',
                path: webkit.executablePath(),
                isHeaded: false,
                isHeadless: false,
            },
        ];
    } catch (e) {
        // playwright-webkit не установлен, webkit недоступен
    }

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
            launchOptions.args.push('--window-size=3840,2160');
            launchOptions.args.push('--disable-dev-shm-usage');
        }

        return launchOptions;
    });

    return config;
};
