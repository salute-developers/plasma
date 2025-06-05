import { mount as cyMount } from '@cypress/react';

import type { resourceOrOption } from './Portal';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace Cypress {
        interface Chainable {
            waitForResources(...resources: resourceOrOption[]): Chainable;
        }
    }
}

export const mount: typeof cyMount = (...args) => {
    const [jsx, opts = {}] = args;

    return cyMount(jsx, opts);
};

// INFO: для временного использования в plasma-ui
export const mountLegacyMode: typeof cyMount = (...args) => {
    const [jsx, opts = {}] = args;

    opts.stylesheets = (opts?.stylesheets || ([] as string[])).concat(
        'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css',
        'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css',
    );

    const cm = cyMount(jsx, opts);

    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css');
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css');
    cy.waitForResources('SBSansText.0.2.0.css', 'SBSansDisplay.0.2.0.css', { timeout: 1500 });

    return cm;
};
