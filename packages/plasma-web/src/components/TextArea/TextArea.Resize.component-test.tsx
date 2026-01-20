import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const LONG_TEXT = ' VERY LONG TEXT{enter}';

describe('plasma-web: TextArea', () => {
    const TextArea = getComponent('TextArea');

    /*
     * INFO: Необходимо исключить эту ошибку, т.к. это проблема в Cypress:
     * https://github.com/cypress-io/cypress/issues/8418#issuecomment-992564877
     */
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
            if (err.toString().match(/ResizeObserver loop limit exceeded/)) {
                return false;
            }
        });
    });

    const Demo = ({ minAuto, maxAuto, resize }) => {
        return <TextArea size="m" autoResize minAuto={minAuto} maxAuto={maxAuto} resize={resize} />;
    };

    it('autoResize - basic', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="m" autoResize minAuto={2} maxAuto={7} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').type(LONG_TEXT.repeat(10));
        cy.matchImageSnapshot();
    });

    it('autoResize - minAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="m" autoResize minAuto={5} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').type(LONG_TEXT.repeat(4));
        cy.matchImageSnapshot();
    });

    it('autoResize - maxAuto', () => {
        mount(
            <CypressTestDecorator>
                <TextArea size="m" autoResize maxAuto={7} />
            </CypressTestDecorator>,
        );

        cy.get('.textarea').type(LONG_TEXT.repeat(10));
        cy.matchImageSnapshot();
    });

    it('autoResize - manualResize', () => {
        mount(
            <CypressTestDecorator>
                <Demo minAuto={3} maxAuto={5} resize="vertical" />
            </CypressTestDecorator>,
        );
        cy.root().get('.textarea').last().invoke('attr', 'style', 'height: 150px;');
        cy.get('.textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });
});
