import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: ButtonGroup', () => {
    const ButtonGroup = getComponent('ButtonGroup');
    const Button = getComponent('Button');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const getButtons = () => [
        <Button view="default" size="l" text="Button_view_default" />,
        <Button view="accent" text="Button_view_accent" />,
        <Button view="secondary" text="Button_view_secondary" />,
        <Button view="success" size="s" text="Button_view_success" />,
        <Button view="warning" text="Button_view_warning" />,
    ];

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ButtonGroup orientation="horizontal">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical">{getButtons()}</ButtonGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_orientation: single button', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ButtonGroup orientation="horizontal">
                    <Button view="default" text="Button_view_default" />
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical">
                    <Button view="default" text="Button_view_default" />
                </ButtonGroup>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_orientation: stretching - filled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ButtonGroup orientation="horizontal" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_gap', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ButtonGroup gap="none">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup gap="dense">{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup gap="wide">{getButtons()}</ButtonGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('_shape', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('custom buttons', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ButtonGroup isCommonButtonStyles={false}>{getButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup isCommonButtonStyles={false} orientation="vertical">
                    {getButtons()}
                </ButtonGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
