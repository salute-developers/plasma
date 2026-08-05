import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Icon = () => <IconClose color="inherit" />;

describe('sdds-insol: EmbedIconButton', () => {
    const EmbedIconButton = getComponent('EmbedIconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>{children}</CypressTestDecorator>
    );

    it('[PLASMA-T1396] EmbedIconButton: size=l, view=default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1397] EmbedIconButton: size=m, view=accent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="accent" size="m">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1398] EmbedIconButton: size=s, view=warning', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="warning" size="s">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1399] EmbedIconButton: size=xs, view=dark', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="dark" size="xs">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1400] EmbedIconButton: size=l, view=default, isLoading', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" isLoading>
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1401] EmbedIconButton: size=l, view=default, disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" disabled>
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1525] EmbedIconButton: size=l, view=success, pin=square-square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="success" size="l" pin="square-square">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1526] EmbedIconButton: size=m, view=critical, pin=square-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="critical" size="m" pin="square-clear">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1527] EmbedIconButton: size=s, view=default, pin=clear-square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="s" pin="clear-square">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1528] EmbedIconButton: size=l, view=default, pin=clear-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" pin="clear-clear">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1529] EmbedIconButton: size=l, view=default, pin=clear-circle, focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" pin="clear-circle" focused>
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1530] EmbedIconButton: size=l, view=default, pin=circle-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" pin="circle-clear">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1531] EmbedIconButton: size=l, view=default, pin=circle-circle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <EmbedIconButton view="default" size="l" pin="circle-circle">
                    <Icon size="s" />
                </EmbedIconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
