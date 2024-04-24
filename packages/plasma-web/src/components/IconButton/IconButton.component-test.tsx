import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

const Icon = () => <IconClose color="inherit" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: IconButton', () => {
    const IconButton = getComponent('IconButton');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton size="m">
                    <Icon size="s" />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('with Loader', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton size="l" view="default" isLoading>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="m" view="default" isLoading>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="s" view="default" isLoading>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="xs" view="default" isLoading>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="default" isLoading />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton view="default">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="default" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="accent">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="accent" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="secondary">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="secondary" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="success">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="success" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="warning">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="warning" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="critical">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="critical" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton view="clear">
                    <Icon />
                </IconButton>
                <SpaceMe />
                <IconButton view="clear" disabled>
                    <Icon />
                </IconButton>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton size="l">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="m">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="s">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton size="xs">
                    <Icon size="xs" />
                </IconButton>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_pin', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <IconButton pin="square-square">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="square-clear">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="clear-square">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="clear-clear">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="clear-circle">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="circle-clear">
                    <Icon />
                </IconButton>
                <PadMe />
                <IconButton pin="circle-circle">
                    <Icon />
                </IconButton>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
