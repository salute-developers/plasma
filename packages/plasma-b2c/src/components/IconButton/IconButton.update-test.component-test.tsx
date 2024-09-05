import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

    it('[PLASMA-T925] IconButton: view=default, size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default" size="m">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T926] IconButton: view=accent, size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="accent" size="l">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T927] IconButton: view=secondary, size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="secondary" size="s">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T928] IconButton: view=success, size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="success" size="xs">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T929] IconButton: view=warning, isLoading', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="warning" isLoading>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T930] IconButton: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton disabled>
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T931] IconButton: view=critical, pin=square-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="critical" pin="square-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T932] IconButton: view=clear, pin=clear-square', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="clear" pin="clear-square">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T933] IconButton: pin=clear-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton pin="clear-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T934] IconButton: pin=clear-circle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton pin="clear-circle">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T935] IconButton: pin=circle-clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton pin="circle-clear">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T936] IconButton: pin=circle-circle', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton pin="circle-circle">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
