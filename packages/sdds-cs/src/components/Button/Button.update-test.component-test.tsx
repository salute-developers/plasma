import React from 'react';
import { IconDownload } from '@salutejs/plasma-icons';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Button as ButtonCS } from '.';

const Icon = () => <IconDownload color="inherit" />;

describe('sdds-cs: Button', () => {
    const Button = getComponent('Button') as typeof ButtonCS;

    it('[PLASMA-T1327] Button: size=s, view=accent, contentLeft', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button" view="accent" size="s" contentLeft={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1328] Button: size=s, view=secondary, contentRight', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button" view="secondary" size="s" contentRight={<Icon />} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1329] Button: size=s, view=secondary, withValue', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button" view="secondary" size="s" value="Value" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1330] Button: view=secondary, isLoading', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button" view="secondary" isLoading />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1331] Button: view=secondary, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Button text="disabled" view="secondary" disabled />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1343] Button: contentLeft, contentRight, contentPlacing=default, stretching=auto, pin=square-square', () => {
        mount(
            <CypressTestDecorator>
                <Button
                    text="Button_stretching_auto"
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

    it('[PLASMA-T1344] Button: contentLeft, value, contentPlacing=relaxed, stretching=filled, pin=square-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button
                    text="Button_stretching_filled"
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
                <Button text="Button_stretching_fixed" size="s" stretching="fixed" pin="clear-square" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1346] Button: pin=clear-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-clear" pin="clear-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1347] Button: pin=clear-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_clear-circle" pin="clear-circle" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1348] Button: focused, pin=circle-clear', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-clear" focused pin="circle-clear" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1349] Button: square=true, pin=circle-circle', () => {
        mount(
            <CypressTestDecorator>
                <Button text="Button_pin_circle-circle" pin="circle-circle" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
