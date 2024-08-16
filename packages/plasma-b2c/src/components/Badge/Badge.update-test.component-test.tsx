import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { IconEye } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

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

    it('[PLASMA-T707] Badge: view=default, size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_default_size_m" view="default" size="m" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T708] Badge: view=positive, size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_positive_size_s" view="positive" size="s" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T709] Badge: view=negative, with Icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_negative_with_icon" view="negative" contentLeft={<Icon />} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T716] Badge: view=accent, pilled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_accent_pilled" view="accent" pilled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T717] Badge: view=warning, size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_warning_size_l" view="warning" size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T718] Badge: view=dark', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_dark" view="dark" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T719] Badge: view=light', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_light" view="light" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T720] Badge: view=default, transparent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Badge text="Badge_view_default_transparent" view="default" transparent />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
