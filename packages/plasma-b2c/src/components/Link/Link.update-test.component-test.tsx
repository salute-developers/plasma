import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: Link', () => {
    const Link = getComponent('Link');

    it('[PLASMA-T1758] Link: view=default', () => {
        mount(
            <CypressTestDecorator>
                <Link view="default" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1759] Link: view=accent', () => {
        mount(
            <CypressTestDecorator>
                <Link view="accent" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1760] Link: view=secondary', () => {
        mount(
            <CypressTestDecorator>
                <Link view="secondary" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1761] Link: view=clear', () => {
        mount(
            <CypressTestDecorator>
                <Link view="clear" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1762] Link: view=warning', () => {
        mount(
            <CypressTestDecorator>
                <Link view="warning" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1763] Link: view=positive', () => {
        mount(
            <CypressTestDecorator>
                <Link view="positive" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1764] Link: view=negative, focused', () => {
        mount(
            <CypressTestDecorator>
                <Link view="negative" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.get('body').tab();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1765] Link: view=tertiary', () => {
        mount(
            <CypressTestDecorator>
                <Link view="tertiary" href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1766] Link: view=paragraph, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Link view="paragraph" disabled href="https://plasma.sberdevices.ru">
                    Hello Plasma
                </Link>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
