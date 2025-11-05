import React from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Icon = () => <IconClose color="inherit" />;

describe('plasma-b2c: IconButton', () => {
    const IconButton = getComponent('IconButton');

    it('[PLASMA-T1396] IconButton: size=l, view=default', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1397] IconButton: size=m, view=accent', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="accent" size="m">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1398] IconButton: size=s, view=warning', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="warning" size="s">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1399] IconButton: size=xs, view=dark', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="dark" size="xs">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1400] IconButton: size=l, view=default, isLoading', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" isLoading>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1401] IconButton: size=l, view=default, disabled', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" disabled>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1525] IconButton: size=l, view=success, pin=square-square', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="success" size="l" pin="square-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1526] IconButton: size=m, view=critical, pin=square-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="critical" size="m" pin="square-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1527] IconButton: size=s, view=default, pin=clear-square', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="s" pin="clear-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1528] IconButton: size=l, view=default, pin=clear-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" pin="clear-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1529] IconButton: size=l, view=default, pin=clear-circle, focused', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" pin="clear-circle" focused>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1530] IconButton: size=l, view=default, pin=circle-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" pin="circle-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1531] IconButton: size=l, view=default, pin=circle-circle', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="default" size="l" pin="circle-circle">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
