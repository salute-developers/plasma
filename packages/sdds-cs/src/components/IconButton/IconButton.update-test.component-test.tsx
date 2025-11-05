import React from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { IconButton as IconButtonCS } from '.';

const Icon = () => <IconClose color="inherit" />;

describe('sdds-cs: IconButton', () => {
    const IconButton = getComponent('IconButton') as typeof IconButtonCS;

    it('[PLASMA-T1397] IconButton: size=s, view=accent', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="accent" size="s">
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

    it('[PLASMA-T1400] IconButton: isLoading', () => {
        mount(
            <CypressTestDecorator>
                <IconButton isLoading>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1401] IconButton: disabled', () => {
        mount(
            <CypressTestDecorator>
                <IconButton disabled>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1525] IconButton: pin=square-square', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="square-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1526] IconButton: pin=square-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="square-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1527] IconButton: size=s, view=secondary, pin=clear-square', () => {
        mount(
            <CypressTestDecorator>
                <IconButton view="secondary" size="s" pin="clear-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1528] IconButton: pin=clear-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="clear-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1529] IconButton: pin=clear-circle, focused', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="clear-circle" focused>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1530] IconButton: pin=circle-clear', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="circle-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1531] IconButton: pin=circle-circle', () => {
        mount(
            <CypressTestDecorator>
                <IconButton pin="circle-circle">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
