import React from 'react';
import { IconEye } from '@salutejs/plasma-icons';
import { PadMe, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Icon = () => <IconEye color="inherit" size="s" />;

describe('sdds-cs: Badge', () => {
    const Badge = getComponent('Badge');

    it('[PLASMA-T1356] Badge: size=s, view=default, enableContentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_default_size_s" view="default" size="s" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1357] Badge: size=s, view=accent, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_accent_size_s" view="accent" size="s" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1358] Badge: size=s, view=positive, pilled', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_positive_size_s" view="positive" size="s" pilled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1359] Badge: size=s, view=warning', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_warning_size_s" view="warning" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1360] Badge: size=s, view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_negative_size_s" view="negative" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1361] Badge: size=s, view=dark', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_dark_size_s" view="dark" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1362] Badge: size=s, view=light', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_light_size_s" view="light" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1363] Badge: size=s, view=default, clear', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_default_size_s_clear" view="default" size="s" clear />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1364] Badge: size=s, view=default, transparent', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_view_default_size_s_transparent" view="default" size="s" transparent />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1651] Badge: icon only', () => {
        mount(
            <CypressTestDecorator>
                <Badge contentLeft={<Icon />} size="s" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="s" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="s" />
                <PadMe />
                <Badge contentLeft={<Icon />} size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1652] Badge: customBackgroundColor, customColor', () => {
        mount(
            <CypressTestDecorator>
                <Badge text="Badge_custom" customBackgroundColor="red" customColor="white" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
