/* eslint-disable */
/// <reference types="cypress" />

import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';
import coverage from '@cypress/code-coverage/task';

const windowSize = {
    sberportal: '1300,800',
    sberbox: '2000,1080',
    mobile: '2000,1080',
};

export const setupNodeEvents = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
    addMatchImageSnapshotPlugin(on);

    coverage(on, config);

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
            if (process.env.PLATFORM_TESTS) {
                let windowSizeArg = windowSize.sberbox;

                if (config.userAgent) {
                    windowSizeArg = windowSize[config.userAgent];
                }

                launchOptions.args.push(`--window-size=${windowSizeArg}`);
            } else {
                launchOptions.args.push(`--window-size=3840,2160`);
            }

            launchOptions.args.push('--disable-dev-shm-usage');
        }

        return launchOptions;
    });

    // это нужно для вывода отчета axe
    on('task', {
        log(message) {
            console.log(message);

            return null;
        },
        table(message) {
            console.table(message);

            return null;
        },
    });

    return config;
};
