import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-b2c: ButtonGroup', () => {
    const ButtonGroup = getComponent('ButtonGroup');
    const Button = getComponent('Button');

    const getButtons = () => [
        <Button view="default" size="l" text="Button_view_default" />,
        <Button view="accent" text="Button_view_accent" />,
        <Button view="secondary" text="Button_view_secondary" />,
        <Button view="success" size="s" text="Button_view_success" />,
        <Button view="warning" text="Button_view_warning" />,
    ];

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup view="default">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="accent">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="secondary">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="success">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="warning">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="critical">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup view="clear">{getButtons()}</ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup size="l">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup size="m">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup size="s">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup size="xs">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup size="xxs">{getButtons()}</ButtonGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup orientation="horizontal">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical">{getButtons()}</ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single button', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup orientation="horizontal">
                    <Button view="default" text="Button_view_default" />
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical">
                    <Button view="default" text="Button_view_default" />
                </ButtonGroup>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup orientation="horizontal" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_gap', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup gap="none">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup gap="dense">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup gap="wide">{getButtons()}</ButtonGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup shape="segmented" gap="none">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup shape="segmented" gap="dense">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup shape="segmented" gap="wide">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup shape="default" gap="none">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup shape="default" gap="dense">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup shape="default" gap="wide">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom buttons', () => {
        mount(
            <CypressTestDecorator>
                <ButtonGroup isCommonButtonStyles={false}>{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup isCommonButtonStyles={false} orientation="vertical">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecorator>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
