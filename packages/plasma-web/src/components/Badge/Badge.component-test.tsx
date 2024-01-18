/* eslint-disable */
import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconEye } from '@salutejs/plasma-icons';

import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

const Icon = () => <IconEye color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Badge', () => {
    const Badge = getComponent('Badge');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge view="primary" text="Badge_view_default" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="primary" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="accent" text="Badge_view_accent" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="accent" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="positive" text="Badge_view_positive" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="positive" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="warning" text="Badge_view_warning" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="warning" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="negative" text="Badge_view_negative" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="negative" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="dark" text="Badge_view_dark" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="dark" contentLeft={<Icon />} />
                <PadMe />
                <Badge view="light" text="Badge_view_light" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="light" contentLeft={<Icon />} />
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
