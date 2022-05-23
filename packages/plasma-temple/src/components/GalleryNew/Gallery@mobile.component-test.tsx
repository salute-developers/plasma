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
});
