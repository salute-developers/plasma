import { navigate } from '../../../../../cypress/support/commands';

import { generateWrapper, galleries } from './Gallery@helpers.component-test';

describe('Gallery', () => {
    it('render single gallery', () => {
        generateWrapper({ items: galleries[0] });
        cy.matchImageSnapshot();
    });

    it('render multi gallery', () => {
        generateWrapper();
        cy.matchImageSnapshot();
    });

    it('single gallery with initial state', () => {
        generateWrapper({ initialState: 5, items: galleries[0] });
        cy.matchImageSnapshot();
    });

    it('multi gallery with initial state', () => {
        generateWrapper({ initialState: { activeGallery: 1, activeCards: [3, 5] } });
        cy.matchImageSnapshot();
    });

    it('with autofocus', () => {
        generateWrapper({ autoFocus: true });
        cy.matchImageSnapshot();
    });

    it('voice navigation', () => {
        generateWrapper({ autoFocus: true });
        cy.sendNavigateAction([navigate.RIGHT, navigate.DOWN, navigate.RIGHT, navigate.RIGHT, navigate.UP]);
        cy.matchImageSnapshot();
    });

    it('external navigation', () => {
        generateWrapper();
        cy.get('[data-cy="goto-gallery-1"]').click();
        cy.matchImageSnapshot();
    });
});
