import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma, IconClose } from 'override/_Icon';

import type { TextFieldSliderProps } from './TextFieldSlider.types';

const componentExists = hasComponent('TextFieldSlider');
const describeFn = getDescribeFN('TextFieldSlider');

const textFieldSliderProps: TextFieldSliderProps = {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
};

const stepValues = [0, 25, 50, 75, 100];
const decimalValues = [0, 1300, 5000, 7500, 10000];

getBaseVisualTests({
    component: 'TextFieldSlider',
    componentProps: textFieldSliderProps,
    configPropsForMatrix: ['view', 'size', 'sliderView'],
});

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
const changeRangeInputValue = (rangeElement: HTMLInputElement) => (value: number) => {
    if (!nativeInputValueSetter) {
        return;
    }

    nativeInputValueSetter.call(rangeElement, value);
    rangeElement.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
};

describeFn('plasma-new-hope: TextFieldSlider', () => {
    const TextFieldSlider = componentExists ? getComponent<TextFieldSliderProps>('TextFieldSlider') : () => null;

    it('appearance=clear', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} appearance="clear" />);

        cy.matchImageSnapshot();
    });

    it('hasPointer=false', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} hasPointer={false} />);

        cy.matchImageSnapshot();
    });

    it('hasScale', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} hasScale />);

        cy.matchImageSnapshot();
    });

    it('step values', () => {
        mount(
            <>
                {stepValues.map((value) => (
                    <>
                        <TextFieldSlider {...textFieldSliderProps} value={value} />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('with step', () => {
        mount(
            <>
                {decimalValues.map((value) => (
                    <>
                        <TextFieldSlider min={0} max={10000} step={500} value={value} hasScale />
                        <br />
                    </>
                ))}
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} disabled />);

        cy.matchImageSnapshot();
    });

    it('readOnly', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} readOnly />);

        cy.matchImageSnapshot();
    });

    it('with titleCaption', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} titleCaption="Объём" />);

        cy.matchImageSnapshot();
    });

    it('with textBefore and textAfter', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} textBefore="от" textAfter="до" style={{ width: '400px' }} />);

        cy.matchImageSnapshot();
    });

    it('with contentLeft and contentRight', () => {
        mount(
            <TextFieldSlider
                {...textFieldSliderProps}
                contentLeft={<IconPlasma size="s" color="inherit" />}
                contentRight={<IconClose size="s" color="inherit" />}
            />,
        );

        cy.matchImageSnapshot();
    });

    it('required', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} required hasRequiredIndicator />);

        cy.matchImageSnapshot();
    });

    it('optional', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} optional optionalText="опционально" />);

        cy.matchImageSnapshot();
    });

    it('with decimalScale', () => {
        mount(
            <>
                <TextFieldSlider min={0} max={100} step={0.01} value={50.555} decimalScale={2} hasScale />
                <br />
                <TextFieldSlider min={0} max={100} step={0.001} value={50.555} decimalScale={3} hasScale />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('with thousandSeparator', () => {
        mount(<TextFieldSlider min={0} max={100000} step={1000} value={50000} thousandSeparator=" " hasScale />);

        cy.matchImageSnapshot();
    });

    it('fixedDecimalScale', () => {
        mount(
            <>
                <TextFieldSlider {...textFieldSliderProps} decimalScale={2} fixedDecimalScale hasScale />
                <br />
                <TextFieldSlider
                    {...textFieldSliderProps}
                    defaultValue={50.5}
                    decimalScale={2}
                    fixedDecimalScale
                    hasScale
                />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('rounded value to step', () => {
        mount(
            <>
                <TextFieldSlider min={0} max={10000} step={500} value={1300} hasScale />
                <br />
                <TextFieldSlider min={0} max={10000} step={500} value={1500} hasScale />
                <br />
                <TextFieldSlider min={0} max={10000} step={500} value={7800} hasScale />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('manual input: type valid value', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} />);

        cy.get('input').first().clear().type('75');
        cy.get('input').first().should('have.value', '75');

        cy.matchImageSnapshot();
    });

    it('manual input: type value greater than max', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} hasScale />);

        cy.get('input').first().clear().type('150');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.get('input').first().should('have.value', '100');

        cy.matchImageSnapshot();
    });

    it('manual input: type value less than min', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} min={10} hasScale />);

        cy.get('input').first().clear().type('5');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(350);

        cy.get('input').first().should('have.value', '10');

        cy.matchImageSnapshot();
    });

    it('slider: move to different position', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} hasScale />);

        cy.get('input')
            .last()
            .then((range) => {
                changeRangeInputValue(range[range.length - 1] as HTMLInputElement)(75);
            });

        cy.get('input').first().should('have.value', '75');

        cy.matchImageSnapshot();
    });

    it('slider: move with step', () => {
        mount(<TextFieldSlider min={0} max={10000} step={500} defaultValue={5000} hasScale />);

        cy.get('input')
            .last()
            .then((range) => {
                changeRangeInputValue(range[range.length - 1] as HTMLInputElement)(7500);
            });

        cy.get('input').first().should('have.value', '7500');

        cy.matchImageSnapshot();
    });

    it('disabled: should not accept manual input', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} disabled />);

        cy.get('input').first().should('be.disabled');
        cy.get('input').last().should('be.disabled');
    });

    it('readOnly: should not accept manual input', () => {
        mount(<TextFieldSlider {...textFieldSliderProps} readOnly />);

        cy.get('input').first().should('have.attr', 'readonly');
        cy.get('input').last().should('have.attr', 'readonly');
    });
});
