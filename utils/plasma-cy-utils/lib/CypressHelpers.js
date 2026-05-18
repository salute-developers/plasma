import React from 'react';
import { mount as cyMount } from '@cypress/react';
import { CypressTestDecorator } from './CypressDecorator';
export const mount = (...args) => {
    const [jsx, opts = {}] = args;
    return cyMount(React.createElement(CypressTestDecorator, null, jsx), opts);
};
// INFO: для временного использования в plasma-ui
export const mountLegacyMode = (...args) => {
    const [jsx, opts = {}] = args;
    opts.stylesheets = ((opts === null || opts === void 0 ? void 0 : opts.stylesheets) || []).concat('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css', 'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css');
    const cm = cyMount(jsx, opts);
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css');
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css');
    cy.waitForResources('SBSansText.0.2.0.css', 'SBSansDisplay.0.2.0.css', { timeout: 1500 });
    return cm;
};
