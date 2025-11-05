import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconEye } from '@salutejs/plasma-icons';
import { PadMe, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Icon = () => <IconEye color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Badge', () => {
    const Badge = getComponent('Badge');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1356] Badge: size=l, view=default, enableContentLeft', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_default_size_l" view="default" size="l" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1357] Badge: size=m, view=accent, enableContentRight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_accent_size_m" view="accent" size="m" contentRight={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1358] Badge: size=s, view=positive, pilled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_positive_size_s" view="positive" size="s" pilled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1359] Badge: size=xs, view=warning', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_warning_size_xs" view="warning" size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1360] Badge: size=l, view=negative', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_negative_size_l" view="negative" size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1361] Badge: size=m, view=dark', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_dark_size_m" view="dark" size="m" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1362] Badge: size=s, view=light', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_light_size_s" view="light" size="s" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1363] Badge: size=l, view=default, clear', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_default_size_l_clear" view="default" size="l" clear />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1364] Badge: size=l, view=default, transparent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_default_size_l_transparent" view="default" size="l" transparent />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1651] Badge: icon only', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge contentLeft={<Icon />} size="l" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="m" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="s" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1652] Badge: customBackgroundColor, customColor', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_custom" customBackgroundColor="red" customColor="white" size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
