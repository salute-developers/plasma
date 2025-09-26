import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { LinkButton as LinkButtonB2C } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('plasma-web: LinkButton', () => {
    const LinkButton = getComponent('LinkButton') as typeof LinkButtonB2C;

    it('[PLASMA-T1466] LinkButton: size=l, view=default', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="l" view="default" text="Hello Plasma" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1467] LinkButton: size=l, view=default, isLoading', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="l" view="default" text="Hello Plasma" isLoading />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1468] LinkButton: size=l, view=secondary', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="l" view="secondary" text="Hello Plasma" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1469] LinkButton: size=m, view=accent, contentLeft', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="m" view="accent" text="Hello Plasma" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1470] LinkButton: disabled', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="l" view="default" text="Hello Plasma" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1471] LinkButton: size=s, view=warning, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="s" view="warning" text="Hello Plasma" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1472] LinkButton: size=xs, view=negative', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="xs" view="negative" text="Hello Plasma" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1938] LinkButton: size=xl, view=default', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="xl" view="default" text="Hello Plasma" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1941] LinkButton: size=xxs, view=default, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <LinkButton size="xxs" view="default" text="Hello Plasma" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
