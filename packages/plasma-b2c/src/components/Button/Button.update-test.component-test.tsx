import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { mount, CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';

import { Button as ButtonWeb } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('plasma-b2c: Button', () => {
    const Button = getComponent('Button') as typeof ButtonWeb;

    it('[PLASMA-T678] Button: view=default, size=m', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_default_size_m" view="default" size="m" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T870] Button: view=accent, size=l', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_accent_size_l" view="accent" size="l" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T871] Button: view=success, size=s', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_success_size_s" view="success" size="s" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T872] Button: view=warning, size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_warning_size_xs" view="warning" size="xs" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T873] Button: view=critical, size=xxs', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_critical_size_xxs" view="critical" size="xxs" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T876] Button: square', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_square" square />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T877] Button: stretching=filled ', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_stretching_filled" stretching="filled" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T878] Button: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_disabled" disabled />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1012] Button: stretching=fixed', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_stretching_fixed" stretching="fixed" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1013] Button: enableContentLeft, enableContentRight', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_contentLeft_contentRight" contentLeft={<Icon />} contentRight={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1015] Button: stretching=auto', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_stretching_auto" stretching="auto" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1017] Button: pin=square-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_square-clear" pin="square-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1018] Button: pin=clear-square', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-square" pin="clear-square" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1019] Button: pin=clear-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-clear" pin="clear-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1020] Button: pin=clear-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-circle" pin="clear-circle" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1021] Button: pin=circle-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-clear" pin="circle-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1022] Button: pin=circle-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-circle" pin="circle-circle" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1023] Button: with value', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Hello" value="Plasma" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1178] Button: contentPlacing=relaxed, stretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Hello" value="Plasma" contentPlacing="relaxed" stretching="filled" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('withAutoFocus', () => {
        const withAutoFocus = getComponent('withAutoFocus');
        const Focused = withAutoFocus(Button);

        mount(
            <CypressTestDecorator>
                <PadMe />
                <SpaceMe />
                <Focused autoFocus text="Hello Plasma" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
