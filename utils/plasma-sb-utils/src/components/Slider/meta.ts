import React, { useEffect } from 'react';
import { useArgs } from 'storybook/preview-api';

import { disableProps, InSpacingDecorator } from '../../index';

import {
    pointerSizes,
    sliderAligns,
    labelPlacements,
    scaleAligns,
    orientations,
    visibility,
    valuePlacementsHorizontal,
    valuePlacementsVertical,
    scaleTicksVariants,
    tickTypes,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = [
    'value',
    'onChangeCommitted',
    'onChange',
    'onChangeTextField',
    'onBlurTextField',
    'onKeyDownTextField',
    'ariaLabel',
    'fontSizeMultiplier',
    'gap',
    'settings',
    'hasHoverAnimation',
    'type',
    'labelContentLeft',
    'rangeValuesPlacement',
    'name',
    'defaultValue',
    'labelContent',
    'showRangeValues',
    'hideMinValueDiff',
    'hideMaxValueDiff',
    'hasIcon',
    'labelVerticalPlacement',
];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Entry/Slider',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [
        (Story: any, context: any) => {
            const [, updateArgs] = useArgs();
            const { showTicks, showCurrentValue, orientation } = context.args;
            const isVertical = orientation === 'vertical';

            useEffect(() => {
                updateArgs({
                    _valuePlacementHorizontalVisible: !showTicks && showCurrentValue && !isVertical,
                    _valuePlacementVerticalVisible: !showTicks && showCurrentValue && isVertical,
                });
            }, [showTicks, showCurrentValue, isVertical]);

            return React.createElement(Story);
        },
        InSpacingDecorator,
    ],
    parameters: {
        controls: {
            disableSaveFromUI: true,
        },
    },
    component,
    args: {
        view: 'default',
        size: 'm',
        pointerSize: 'small',
        pointerVisibility: 'always',
        orientation: 'horizontal',
        min: 0,
        max: 150,
        step: 1,
        multipleStepSize: 10,
        label: 'Цена микрофона',
        labelPlacement: 'top',
        sliderAlign: 'center',
        scaleAlign: 'bottom',
        showScale: true,
        showCurrentValue: false,
        currentValueVisibility: 'always',
        showIcon: true,
        reversed: false,
        labelReversed: false,
        disabled: false,
        hideMinValueDiff: 3,
        hideMaxValueDiff: 5,
        showTicks: false,
        scaleTicksVariant: 'default',
        tickType: 'bullet',
        _valuePlacementHorizontalVisible: false,
        _valuePlacementVerticalVisible: false,
        ...defaultArgs,
    },
    argTypes: {
        view: {
            options: componentConfig.views,
            control: { type: 'select' },
        },
        size: {
            options: componentConfig.sizes,
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        pointerSize: {
            options: pointerSizes,
            control: { type: 'select' },
        },
        orientation: {
            options: orientations,
            control: { type: 'select' },
        },
        label: {
            control: { type: 'text' },
        },
        showIcon: {
            control: { type: 'boolean' },
        },
        min: {
            control: { type: 'number' },
        },
        max: {
            control: { type: 'number' },
        },
        step: {
            control: { type: 'number' },
        },
        multipleStepSize: {
            control: { type: 'number' },
        },
        labelPlacement: {
            options: labelPlacements,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        labelReversed: {
            control: { type: 'boolean' },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        sliderAlign: {
            options: sliderAligns,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        scaleAlign: {
            options: scaleAligns,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        reversed: {
            control: { type: 'boolean' },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        showScale: {
            control: { type: 'boolean' },
            if: { arg: 'showTicks', truthy: false },
        },
        showTicks: {
            control: { type: 'boolean' },
        },
        scaleTicksVariant: {
            options: scaleTicksVariants,
            control: { type: 'select' },
            if: { arg: 'showTicks' },
        },
        tickType: {
            options: tickTypes,
            control: { type: 'select' },
        },
        showCurrentValue: {
            control: { type: 'boolean' },
            if: { arg: 'showTicks', truthy: false },
        },
        pointerVisibility: {
            options: visibility,
            control: { type: 'select' },
        },
        currentValueVisibility: {
            options: visibility,
            control: { type: 'select' },
            if: { arg: 'showTicks', truthy: false },
        },
        valuePlacementHorizontal: {
            name: 'valuePlacement',
            options: valuePlacementsHorizontal,
            control: { type: 'select' },
            if: { arg: '_valuePlacementHorizontalVisible' },
        },
        valuePlacementVertical: {
            name: 'valuePlacement',
            options: valuePlacementsVertical,
            control: { type: 'select' },
            if: { arg: '_valuePlacementVerticalVisible' },
        },
        _valuePlacementHorizontalVisible: { table: { disable: true } },
        _valuePlacementVerticalVisible: { table: { disable: true } },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
