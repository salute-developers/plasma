import React from 'react';
import {
    mount,
    getComponent,
    getDescribeFN,
    hasComponent,
    getBaseVisualTests,
    skipForPackages,
    PadMe,
} from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { IconButtonProps } from '../IconButton/IconButton.types';

import type { RangeProps } from './Range.types';

const componentExists = hasComponent('Range');
const componentIconButtonExists = hasComponent('IconButton');
const describeFn = getDescribeFN('Range');
const itSkip = skipForPackages(['sdds-cs']);

const componentProps = {
    firstPlaceholder: 'От',
    secondPlaceholder: 'До',
};

getBaseVisualTests({
    component: 'Range',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Range', () => {
    const Range = componentExists ? getComponent<RangeProps>('Range') : () => null;
    const IconButton = componentIconButtonExists ? getComponent<IconButtonProps>('IconButton') : () => null;

    const Demo = ({
        label,
        disabled,
        readOnly,
        firstValueError,
        secondValueError,
        firstValueSuccess,
        secondValueSuccess,
        ...rest
    }: RangeProps) => {
        return (
            <Range
                disabled={disabled}
                readOnly={readOnly}
                firstValueError={firstValueError}
                secondValueError={secondValueError}
                firstValueSuccess={firstValueSuccess}
                secondValueSuccess={secondValueSuccess}
                label={label}
                leftHelper="Подсказка к полю"
                firstPlaceholder="Заполните поле 1"
                secondPlaceholder="Заполните поле 2"
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                contentLeft={<IconPlasma size="s" color="inherit" />}
                contentRight={
                    <IconButton size="s" view="clear">
                        <IconPlasma size="s" color="inherit" />
                    </IconButton>
                }
                {...rest}
            />
        );
    };

    it('simple', () => {
        mount(<Demo label="Лейбл" />);
        cy.matchImageSnapshot();
    });

    it('simple: filled value', () => {
        mount(
            <Range
                label="Лейбл"
                leftHelper="Подсказка к полю"
                firstValue="1"
                secondValue="10"
                firstPlaceholder="Заполните поле 1"
                secondPlaceholder="Заполните поле 2"
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                contentLeft={<IconPlasma size="s" color="inherit" />}
                contentRight={
                    <IconButton size="s" view="clear">
                        <IconPlasma size="s" color="inherit" />
                    </IconButton>
                }
            />,
        );
        cy.matchImageSnapshot();
    });

    it('simple: divider as icon', () => {
        mount(
            <Range
                label="Лейбл"
                leftHelper="Подсказка к полю"
                firstValue="1"
                secondValue="10"
                firstPlaceholder="Заполните поле 1"
                secondPlaceholder="Заполните поле 2"
                firstTextfieldTextBefore="С"
                secondTextfieldTextBefore="ПО"
                contentLeft={<IconPlasma size="s" color="inherit" />}
                contentRight={
                    <IconButton size="s" view="clear">
                        <IconPlasma size="s" color="inherit" />
                    </IconButton>
                }
                dividerVariant="icon"
                dividerIcon={<IconPlasma size="s" color="inherit" />}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('disabled & readOnly', () => {
        mount(
            <>
                <Demo label="Лейбл" disabled />
                <PadMe />
                <Demo label="Лейбл" readOnly />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('error & success', () => {
        cy.viewport(500, 750);

        mount(
            <>
                <Demo label="Лейбл" firstValueError />
                <PadMe />
                <Demo label="Лейбл" secondValueError />
                <PadMe />
                <Demo label="Лейбл" firstValueError secondValueError />
                <PadMe />
                <Demo label="Лейбл" firstValueSuccess />
                <PadMe />
                <Demo label="Лейбл" secondValueSuccess />
                <PadMe />
                <Demo label="Лейбл" firstValueSuccess secondValueSuccess />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('required', () => {
        cy.viewport(500, 599);

        mount(
            <div style={{ padding: '1rem' }}>
                <Demo required hasRequiredIndicator label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator requiredIndicatorPlacement="left" label="Лейбл" />
                <PadMe />
                <Demo required hasRequiredIndicator />
                <PadMe />
                <Demo required hasRequiredIndicator requiredIndicatorPlacement="left" />
            </div>,
        );

        cy.matchImageSnapshot();
    });

    itSkip('appearance=clear, hasClearDivider', () => {
        mount(
            <>
                <Demo appearance="clear" />
                <PadMe />
                <Demo appearance="clear" hasClearDivider />
            </>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });

    itSkip('appearance=clear, firstValueSuccess, secondValueSuccess', () => {
        mount(
            <>
                <Demo appearance="clear" firstValueSuccess hasClearDivider />
                <PadMe />
                <Demo appearance="clear" secondValueSuccess hasClearDivider />
                <PadMe />
                <Demo appearance="clear" firstValueSuccess secondValueSuccess hasClearDivider />
            </>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });

    itSkip('appearance=clear, firstValueError, secondValueError', () => {
        mount(
            <>
                <Demo appearance="clear" firstValueError hasClearDivider />
                <PadMe />
                <Demo appearance="clear" secondValueError hasClearDivider />
                <PadMe />
                <Demo appearance="clear" firstValueError secondValueError hasClearDivider />
            </>,
        );
        cy.get('input').last().click();

        cy.matchImageSnapshot();
    });
});
