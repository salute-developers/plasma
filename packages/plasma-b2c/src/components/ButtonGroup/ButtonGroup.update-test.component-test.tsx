import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: ButtonGroup', () => {
    const ButtonGroup = getComponent('ButtonGroup');
    const Button = getComponent('Button');

    const getButtons = () => [
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
        <Button text="Button" />,
    ];

    it('[PLASMA-T820] ButtonGroup: view=default, size=m, orientation=horizontal', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="default" size="m" orientation="horizontal">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T821] ButtonGroup: view=accent, size=l, shape=default', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="accent" size="l" shape="default">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T822] ButtonGroup: view=secondary, gap=none', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="secondary" gap="none">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T823] ButtonGroup: view=success, orientation=vertical', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="success" orientation="vertical">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T824] ButtonGroup: view=warning, shape=segmented', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="warning" shape="segmented">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T825] ButtonGroup: view=critical, stretching=filled', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="critical" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T826] ButtonGroup: size=xxs, gap=wide', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup size="xxs" gap="wide">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1206] ButtonGroup: size=s, view=clear', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup size="s" view="clear">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1207] ButtonGroup: size=xs, gap=dense', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup size="xs" gap="dense">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
