/* eslint-disable */
import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { IconEye } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

const Icon = () => <IconEye color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-core: Badge', () => {
    const Badge = getComponent('Badge');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with Icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge" contentLeft={<Icon />} />
                <PadMe />
                <Badge text="Badge" contentRight={<Icon />} />
                <PadMe />
                <Badge>
                    <Icon />
                </Badge>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_sizes', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_size_l" size="l" contentLeft={<Icon />} />
                <PadMe />
                <Badge text="Badge_size_m" size="m" contentLeft={<Icon />} />
                <PadMe />
                <Badge text="Badge_size_s" size="s" contentLeft={<Icon />} />
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge" view="primary" />
                <PadMe />
                <Badge text="Badge" view="accent" />
                <PadMe />
                <Badge text="Badge" view="positive" />
                <PadMe />
                <Badge text="Badge" view="warning" />
                <PadMe />
                <Badge text="Badge" view="negative" />
                <PadMe />
                <Badge text="Badge" view="dark" />
                <PadMe />
                <Badge text="Badge" view="light" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_view: transparent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge" view="primary" transparent />
                <PadMe />
                <Badge text="Badge" view="accent" transparent />
                <PadMe />
                <Badge text="Badge" view="positive" transparent />
                <PadMe />
                <Badge text="Badge" view="warning" transparent />
                <PadMe />
                <Badge text="Badge" view="negative" transparent />
                <PadMe />
                <Badge text="Badge" view="dark" transparent />
                <PadMe />
                <Badge text="Badge" view="light" transparent />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_pilled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                pilled :
                <SpaceMe />
                <Badge pilled size="l" text="18" />
                <SpaceMe />
                <Badge pilled size="m" text="18" />
                <SpaceMe />
                <Badge pilled size="s" text="18" />
                <PadMe />
                simple :
                <SpaceMe />
                <Badge size="l" text="18" />
                <SpaceMe />
                <Badge size="m" text="18" />
                <SpaceMe />
                <Badge size="s" text="18" />
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
