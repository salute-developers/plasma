import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Icon = () => <IconClose color="inherit" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: IconButton', () => {
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1396] IconButton: size=l, view=default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1397] IconButton: size=m, view=accent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="accent" size="m">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1398] IconButton: size=s, view=warning', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="warning" size="s">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1399] IconButton: size=xs, view=dark', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="dark" size="xs">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1400] IconButton: size=l, view=default, isLoading', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" isLoading>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1401] IconButton: size=l, view=default, disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" disabled>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1525] IconButton: size=l, view=success, pin=square-square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="success" size="l" pin="square-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1526] IconButton: size=m, view=critical, pin=square-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="critical" size="m" pin="square-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1527] IconButton: size=s, view=default, pin=clear-square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="s" pin="clear-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1528] IconButton: size=l, view=default, pin=clear-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" pin="clear-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1529] IconButton: size=l, view=default, pin=clear-circle, focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" pin="clear-circle" focused>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1530] IconButton: size=l, view=default, pin=circle-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" pin="circle-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1531] IconButton: size=l, view=default, pin=circle-circle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="l" pin="circle-circle">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
