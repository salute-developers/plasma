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
        _valuePlacementHorizontalVisible: false,
        _valuePlacementVerticalVisible: false,
        ...defaultArgs,
    },
    argTypes: {
        view: {
            options: componentConfig.views,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        size: {
            options: componentConfig.sizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        disabled: {
            control: { type: 'boolean' },
            table: { category: 'variation' },
        },
        pointerSize: {
            options: pointerSizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        orientation: {
            options: orientations,
            control: { type: 'select' },
            table: { category: 'layout' },
        },
        label: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        showIcon: {
            control: { type: 'boolean' },
            table: { category: 'layout' },
        },
        min: {
            control: { type: 'number' },
            table: { category: 'slider' },
        },
        max: {
            control: { type: 'number' },
            table: { category: 'slider' },
        },
        step: {
            control: { type: 'number' },
            table: { category: 'slider' },
        },
        multipleStepSize: {
            control: { type: 'number' },
            table: { category: 'slider' },
        },
        labelPlacement: {
            options: labelPlacements,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'horizontal' },
            table: { category: 'layout' },
        },
        labelReversed: {
            control: { type: 'boolean' },
            if: { arg: 'orientation', eq: 'vertical' },
            table: { category: 'layout' },
        },
        sliderAlign: {
            options: sliderAligns,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'vertical' },
            table: { category: 'layout' },
        },
        scaleAlign: {
            options: scaleAligns,
            control: { type: 'select' },
            if: { arg: 'orientation', eq: 'horizontal' },
            table: { category: 'layout' },
        },
        reversed: {
            control: { type: 'boolean' },
            if: { arg: 'orientation', eq: 'vertical' },
            table: { category: 'layout' },
        },
        showScale: {
            control: { type: 'boolean' },
            table: { category: 'slider' },
            if: { arg: 'showTicks', truthy: false },
        },
        showTicks: {
            control: { type: 'boolean' },
            table: { category: 'slider' },
        },
        showCurrentValue: {
            control: { type: 'boolean' },
            if: { arg: 'showTicks', truthy: false },
            table: { category: 'slider' },
        },
        pointerVisibility: {
            options: visibility,
            control: { type: 'select' },
            table: { category: 'slider' },
        },
        currentValueVisibility: {
            options: visibility,
            control: { type: 'select' },
            if: { arg: 'showTicks', truthy: false },
            table: { category: 'slider' },
        },
        valuePlacementHorizontal: {
            name: 'valuePlacement',
            options: valuePlacementsHorizontal,
            control: { type: 'select' },
            if: { arg: '_valuePlacementHorizontalVisible' },
            table: { category: 'slider' },
        },
        valuePlacementVertical: {
            name: 'valuePlacement',
            options: valuePlacementsVertical,
            control: { type: 'select' },
            if: { arg: '_valuePlacementVerticalVisible' },
            table: { category: 'slider' },
        },
        _valuePlacementHorizontalVisible: { table: { disable: true } },
        _valuePlacementVerticalVisible: { table: { disable: true } },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
