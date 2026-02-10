import React, { useState } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { ButtonProps } from './Button.types';

const componentExists = hasComponent('Button');
const describeFn = getDescribeFN('Button');

const Icon = <IconPlasma size="s" color="inherit" />;
const buttonProps = {
    text: 'Button',
};

getBaseVisualTests({
    component: 'Button',
    componentProps: buttonProps,
    configPropsForMatrix: ['view', 'size', 'stretching'],
});

describeFn('plasma-new-hope: Button', () => {
    const Button = componentExists ? getComponent<ButtonProps>('Button') : () => null;

    it('with loader', () => {
        mount(<Button isLoading />);

        cy.matchImageSnapshot();
    });

    it('with value', () => {
        mount(<Button value="Value" text="Button" />);

        cy.matchImageSnapshot();
    });

    it('with content', () => {
        mount(
            <>
                <Button text="contentLeft" contentLeft={Icon} />
                <PadMe />
                <Button text="contentRight" contentRight={Icon} />
                <PadMe />
                <Button text="contentLeft, contentRight" contentLeft={Icon} contentRight={Icon} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('contentPlacing', () => {
        mount(
            <>
                <Button value="Value" contentPlacing="default" text="default" />
                <PadMe />
                <Button value="Value" contentPlacing="relaxed" text="relaxed" />
                <PadMe />
                <Button value="Value" contentPlacing="default" stretching="filled" text="default, filled" />
                <PadMe />
                <Button value="Value" contentPlacing="relaxed" stretching="filled" text="relaxed, filled" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('pin', () => {
        mount(
            <>
                <Button pin="square-square" text="square-square" />
                <PadMe />
                <Button pin="square-clear" text="square-clear" />
                <PadMe />
                <Button pin="clear-square" text="clear-square" />
                <PadMe />
                <Button pin="clear-clear" text="clear-clear" />
                <PadMe />
                <Button pin="clear-circle" text="clear-circle" />
                <PadMe />
                <Button pin="circle-clear" text="circle-clear" />
                <PadMe />
                <Button pin="circle-circle" text="circle-circle" />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<Button disabled text="disabled" />);

        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(<Button text="focused" />);

        cy.get('body').tab().focused().trigger('keydown', { code: 'Tab' });
        cy.get('button').should('be.focused');

        cy.matchImageSnapshot();
    });

    it.skip('as', () => {
        // INFO: Почему и как может сломаться?
        // https://plasma.sberdevices.ru/ui/types/as-and-forwardedas/#forwardedas

        mount(<Button as="a">Hello Plasma</Button>);

        cy.get('[type="button"]').first().should('have.prop', 'tagName').should('eq', 'A');
    });
});
