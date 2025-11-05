import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-giga: Radiobox', () => {
    const Radiobox = getComponent('Radiobox');

    it('[PLASMA-1416] RadioBox: size=m, label, description, checked', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1417] RadioBox: size=s, label, description, not checked', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="s" view="accent" label="Label" description="Description" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1418] RadioBox: size=m, label, checked', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="accent" label="Label" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1420] RadioBox: size=m, label, description, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="accent" label="Label" description="Description" checked disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1485] RadioBox: view=default, singleLine', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ width: '200px' }}>
                    <Radiobox
                        size="m"
                        view="default"
                        label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        checked
                        singleLine
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1486] RadioBox: size=s, view=secondary', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="s" view="secondary" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1487] RadioBox: view=tertiary', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="tertiary" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1488] RadioBox: view=paragraph', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="paragraph" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1490] RadioBox: view=positive', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="positive" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1491] RadioBox: view=warning', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="warning" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1492] RadioBox: view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Radiobox size="m" view="negative" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
