import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent, PadMe, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Button as ButtonWeb } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('plasma-b2c: Button', () => {
    const Button = getComponent('Button') as typeof ButtonWeb;

    it('[PLASMA-T1319] Button: size=l, view=default', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_default_size_l" view="default" size="l" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1327] Button: size=m, view=accent, contentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_accent_size_m" view="accent" size="m" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1328] Button: size=s, view=warning, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_warning_size_s" view="warning" size="s" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1329] Button: size=xs, view=dark, withValue', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_dark_size_xs" view="dark" size="xs" value="Value" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1330] Button: size=l, view=default, isLoading', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_view_default_size_l" view="default" size="l" isLoading />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1331] Button: size=l, view=default, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Button text="disabled" view="default" size="l" disabled />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1343] Button: size=l, view=success contentLeft, contentRight, contentPlacing=default, stretching=auto, pin=square-square', () => {
        mount(
            <CypressTestDecorator>
                <Button
                    text="Button_stretching_auto"
                    view="success"
                    size="l"
                    contentLeft={<Icon />}
                    contentRight={<Icon />}
                    contentPlacing="default"
                    stretching="auto"
                    pin="square-square"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1344] Button: size=m, view=critical, contentLeft, value, contentPlacing=relaxed, stretching=filled, pin=square-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button
                    text="Button_stretching_filled"
                    view="critical"
                    size="m"
                    contentLeft={<Icon />}
                    contentPlacing="relaxed"
                    stretching="filled"
                    pin="square-clear"
                />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1345] Button: size=s, stretching=fixed, pin=clear-square', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_stretching_fixed" view="default" size="s" stretching="fixed" pin="clear-square" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1346] Button: size=xs, pin=clear-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-clear" view="default" size="xs" pin="clear-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1347] Button: size=xxs, pin=clear-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-circle" view="default" size="xxs" pin="clear-circle" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1348] Button: size=l, focused, pin=circle-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-clear" view="default" size="l" focused pin="circle-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1349] Button: size=m, square=true, pin=circle-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-circle" view="default" size="m" pin="circle-circle" />
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
