import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconMic } from 'override/_Icon';

import type { SliderProps } from './Slider.types';

const componentExists = hasComponent('Slider');
const describeFn = getDescribeFN('Slider');

const componentProps = {
    min: 0,
    max: 100,
    value: 50,
};

getBaseVisualTests({
    component: 'Slider',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
const changeRangeInputValue = (rangeElement: HTMLInputElement) => (value: number) => {
    if (!nativeInputValueSetter) {
        return;
    }

    nativeInputValueSetter.call(rangeElement, value);
    rangeElement.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
};

describeFn('Slider', () => {
    const Slider = componentExists ? getComponent<SliderProps>('Slider') : () => null;
    const sliderThumbSelector = '[type="range"]';

    it('simple', () => {
        mount(
            <>
                <Slider min={0} max={100} value={50} />
                <PadMe />
                <Slider min={0} max={100} value={[25, 75]} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('focus', () => {
        mount(<Slider value={25} min={0} max={100} />);

        cy.get(sliderThumbSelector).focus();

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <>
                <Slider value={50} min={0} max={100} disabled />
                <PadMe />
                <Slider value={[25, 75]} min={0} max={100} disabled />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('orientation, labelPlacement', () => {
        mount(
            <>
                <Slider value={50} min={0} max={100} orientation="horizontal" label="Подпись" labelPlacement="top" />
                <PadMe />
                <Slider value={50} min={0} max={100} orientation="horizontal" label="Подпись" labelPlacement="left" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('orientation, sliderAlign, showScale', () => {
        mount(
            <div style={{ display: 'flex', gap: '1rem', height: '20rem' }}>
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    label="Подпись"
                    sliderAlign="left"
                    showScale
                />
                <PadMe />
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    label="Подпись"
                    sliderAlign="right"
                    showScale
                />
                <PadMe />
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    label="Подпись"
                    sliderAlign="center"
                    showScale
                />
                <PadMe />
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    label="Подпись"
                    sliderAlign="none"
                    showScale
                />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('orientation, reversed, sliderTicks', () => {
        const commonArgs = {
            value: 50,
            min: 0,
            max: 100,
            scaleTicks: [0, 20, 40, 60, 80, 100],
            orientation: 'vertical',
        } as SliderProps;

        mount(
            <div style={{ display: 'flex', gap: '1rem', height: '20rem' }}>
                <Slider {...commonArgs} />
                <PadMe />
                <Slider {...commonArgs} value={0} />
                <PadMe />
                <Slider {...commonArgs} value={100} />
                <PadMe />
                <Slider {...commonArgs} value={50} reversed />
                <PadMe />
                <Slider {...commonArgs} value={0} reversed />
                <PadMe />
                <Slider {...commonArgs} value={100} reversed />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('showCurrentValue, hideMinValueDiff, hideMaxValueDiff', () => {
        mount(
            <>
                <Slider value={50} min={0} max={100} orientation="horizontal" showScale showCurrentValue />
                <PadMe />
                <Slider
                    value={2}
                    min={0}
                    max={100}
                    orientation="horizontal"
                    showScale
                    showCurrentValue
                    hideMinValueDiff={3}
                />
                <PadMe />
                <Slider
                    value={100}
                    min={0}
                    max={96}
                    orientation="horizontal"
                    showScale
                    showCurrentValue
                    hideMaxValueDiff={5}
                />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('valuePlacement, horizontal', () => {
        mount(
            <>
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    showCurrentValue
                    valuePlacement="bottom"
                    label="bottom (default)"
                />
                <PadMe />
                <Slider value={50} min={0} max={100} showCurrentValue valuePlacement="top" label="top" />
                <PadMe />
                <Slider value={50} min={0} max={100} showCurrentValue valuePlacement="none" label="none" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('valuePlacement, vertical', () => {
        mount(
            <div style={{ display: 'flex', gap: '1rem', height: '20rem' }}>
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    showCurrentValue
                    valuePlacement="right"
                    label="right (default)"
                />
                <PadMe />
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    showCurrentValue
                    valuePlacement="left"
                    label="left"
                />
                <PadMe />
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    orientation="vertical"
                    showCurrentValue
                    valuePlacement="none"
                    label="none"
                />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('pointerSize', () => {
        mount(
            <>
                <Slider value={50} min={0} max={100} pointerSize="small" showScale />
                <PadMe />
                <Slider value={2} min={0} max={100} pointerSize="large" showScale />
                <PadMe />
                <Slider value={100} min={0} max={96} pointerSize="none" showScale />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('pointerVisibility', () => {
        mount(
            <>
                <div
                    style={{
                        display: 'flex',
                        height: '5rem',
                        flexDirection: 'column',
                    }}
                >
                    <Slider
                        id="horizontal"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="horizontal"
                        pointerVisibility="hover"
                    />
                    <PadMe />
                    <Slider
                        id="horizontal-all"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="horizontal"
                        pointerVisibility="hover"
                        showCurrentValue
                        showScale
                    />
                    <PadMe />
                </div>
                <div
                    style={{
                        display: 'flex',
                        height: '20rem',
                        flexDirection: 'row',
                    }}
                >
                    <Slider
                        id="vertical"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="vertical"
                        pointerVisibility="hover"
                    />
                    <PadMe />
                    <Slider
                        id="vertical-all"
                        value={30}
                        min={0}
                        max={100}
                        size="s"
                        orientation="vertical"
                        pointerVisibility="hover"
                        showCurrentValue
                        showScale
                    />
                </div>
            </>,
        );

        cy.matchImageSnapshot('before-hover');

        cy.get('#horizontal').trigger('pointerover');
        cy.get('#horizontal-all').trigger('pointerover');
        cy.get('#vertical').trigger('pointerover');
        cy.get('#vertical-all').trigger('pointerover');

        cy.matchImageSnapshot();
    });

    it('step, clampedValue', () => {
        mount(
            <>
                <Slider
                    value={50}
                    min={0}
                    max={100}
                    step={5}
                    showCurrentValue
                    showScale
                    hideMinValueDiff={3}
                    hideMaxValueDiff={5}
                />
                <PadMe />
                <Slider
                    value={0}
                    min={0}
                    max={100}
                    step={5}
                    showCurrentValue
                    showScale
                    hideMinValueDiff={3}
                    hideMaxValueDiff={5}
                />
                <PadMe />
                <Slider
                    value={100}
                    min={0}
                    max={96}
                    step={5}
                    showCurrentValue
                    showScale
                    hideMinValueDiff={3}
                    hideMaxValueDiff={5}
                />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('prop: onChange', () => {
        const onChange = cy.stub().as('onChange');

        mount(<Slider min={0} max={100} value={50} onChange={onChange} />);

        cy.get(sliderThumbSelector).then((range) => {
            changeRangeInputValue(range[0] as HTMLInputElement)(75);
        });

        cy.get('@onChange').should('have.been.calledOnce');
        cy.get('@onChange').should('have.been.calledWith', 75);
    });
});
