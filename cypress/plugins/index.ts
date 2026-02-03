import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

export const setupNodeEvents = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    addMatchImageSnapshotPlugin(on);

    on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.args.push('--window-size=3840,2160');
        launchOptions.args.push('--disable-dev-shm-usage');

        return launchOptions;
    });

    return config;
};
