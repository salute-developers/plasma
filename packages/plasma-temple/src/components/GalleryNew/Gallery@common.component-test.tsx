import { navigate } from '../../../../../cypress/support/commands';

import { generateWrapper, galleries } from './Gallery@helpers.component-test';

describe('Gallery', () => {
    it('render single gallery', () => {
        generateWrapper({ items: galleries[0] });
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });

    it('render multi gallery', () => {
        generateWrapper();
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });

    it('single gallery with initial state', () => {
        generateWrapper({ initialState: 5, items: galleries[0] });
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });

    it('multi gallery with initial state', () => {
        generateWrapper({ initialState: { activeGallery: 1, activeCards: [3, 5] } });
        cy.matchImageSnapshot({
            failureThreshold: 0.1,
            failureThresholdType: 'percent',
        });
    });

    it('with autofocus', () => {
        generateWrapper({ autoFocus: true });
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });

    it('voice navigation', () => {
        generateWrapper({ autoFocus: true });
        cy.sendNavigateAction([navigate.RIGHT, navigate.DOWN, navigate.RIGHT, navigate.RIGHT, navigate.UP]);
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });

    it('external navigation', () => {
        generateWrapper();
        cy.get('[data-cy="goto-gallery-1"]').click();
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent',
        });
    });
});
