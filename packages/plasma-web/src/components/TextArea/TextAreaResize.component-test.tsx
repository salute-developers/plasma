import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const LONG_TEXT = ' VERY LONG TEXT';

describe('plasma-hope: TextArea', () => {
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

    function Demo({ minAuto, maxAuto }) {
        const [value, setValue] = React.useState('Default value');

        return (
            <TextArea
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                autoResize
                minAuto={minAuto}
                maxAuto={maxAuto}
            />
        );
    }

    it('autoResize - basic', () => {
        mount(
            <CypressTestDecorator>
                <Demo minAuto={0} maxAuto={10} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('autoResize - minAuto', () => {
        mount(
            <CypressTestDecorator>
                <Demo minAuto={5} maxAuto={10} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('autoResize - maxAuto', () => {
        mount(
            <CypressTestDecorator>
                <Demo minAuto={0} maxAuto={3} />
            </CypressTestDecorator>,
        );

        cy.get('textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });

    it('autoResize - manualResize', () => {
        mount(
            <CypressTestDecorator>
                <Demo minAuto={3} maxAuto={5} />
            </CypressTestDecorator>,
        );
        cy.root().get('textarea').last().invoke('attr', 'style', 'height: 150px;');
        cy.get('textarea').type(LONG_TEXT.repeat(10));

        cy.matchImageSnapshot();
    });
});
