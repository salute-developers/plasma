/* eslint-disable */
import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconEye } from '@salutejs/plasma-icons';

import { CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

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
                <Badge view="default" text="Badge_view_default" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="default" contentLeft={<Icon />} />
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
                <Badge view="light" text="Badge_truncated_text" contentLeft={<Icon />} maxWidth="8rem" />
                <PadMe />
                <Badge view="light" text="Badge_truncated_text" maxWidth="8rem" />
                <SpaceMe />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
