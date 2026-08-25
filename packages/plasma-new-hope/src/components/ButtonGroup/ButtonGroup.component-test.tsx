import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { ButtonProps } from '../Button/Button.types';

import type { ButtonGroupProps } from './ButtonGroup.types';

const componentExists = hasComponent('ButtonGroup') && hasComponent('Button');
const describeFn = getDescribeFN('ButtonGroup');

const Button = getComponent<ButtonProps>('Button');

const getButtons = (itemsCount = 5) =>
    Array(itemsCount)
        .fill(true)
        .map((_, i) => <Button key={`button-${i}`} text="Button" />);

const getCustomButtons = () => [
    <Button key="default" view="default" size="l" text="Button_view_default" />,
    <Button key="accent" view="accent" text="Button_view_accent" />,
    <Button key="secondary" view="secondary" text="Button_view_secondary" />,
    <Button key="success" view="success" size="s" text="Button_view_success" />,
    <Button key="warning" view="warning" text="Button_view_warning" />,
];

const componentProps = {
    children: getButtons(),
};

getBaseVisualTests({
    component: 'ButtonGroup',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'orientation', 'gap', 'shape', 'stretching'],
    actionBeforeSnapshot: () => {
        cy.viewport(700, 700);
    },
});

describeFn('ButtonGroup', () => {
    const ButtonGroup = componentExists ? getComponent<ButtonGroupProps>('ButtonGroup') : () => null;

    it('orientation: single button', () => {
        mount(
            <>
                <ButtonGroup orientation="horizontal">
                    <Button text="Button_view_default" />
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical">
                    <Button text="Button_view_default" />
                </ButtonGroup>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('orientation: stretching - filled', () => {
        mount(
            <>
                <ButtonGroup orientation="horizontal" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
                <PadMe />
                <ButtonGroup orientation="vertical" stretching="filled">
                    {getButtons()}
                </ButtonGroup>
            </>,
        );

        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('custom buttons', () => {
        mount(
            <>
                <ButtonGroup isCommonButtonStyles={false}>{getCustomButtons()}</ButtonGroup>
                <PadMe />
                <ButtonGroup isCommonButtonStyles={false} orientation="vertical">
                    {getCustomButtons()}
                </ButtonGroup>
            </>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });
});
