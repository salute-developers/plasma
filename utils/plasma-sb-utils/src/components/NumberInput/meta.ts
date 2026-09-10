import { disableProps, InSpacingDecorator } from '../..';

import {
    segmentations,
    shapes,
    inputBackgroundTypes,
    displayWithoutValueOptions,
    limitBehaviorOptions,
    decimalSeparators,
    thousandSeparators,
    thousandsGroupStyles,
} from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        decorators: [InSpacingDecorator],
        component,
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
        args: {
            view: 'default',
            size: 'l',
            shape: 'cornered',
            inputBackgroundType: 'fill',
            segmentation: 'default',
            min: 0,
            max: 9,
            step: 1,
            precision: 2,
            value: 5,
            thousandSeparator: '',
            decimalSeparator: '.',
            thousandsGroupStyle: 'thousand',
            decimalScale: 2,
            fixedDecimalScale: false,
            allowNegative: true,
            allowLeadingZeros: false,
            width: 288,
            isManualInput: false,
            textBefore: '',
            textAfter: '',
            isLoading: false,
            disabled: false,
            limitBehavior: 'disabled',
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
            shape: {
                options: shapes,
                control: { type: 'select' },
            },
            segmentation: {
                options: segmentations,
                control: { type: 'select' },
            },
            inputBackgroundType: {
                options: inputBackgroundTypes,
                control: { type: 'select' },
            },
            disabled: {
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
            precision: {
                control: { type: 'number', min: 0 },
            },
            thousandSeparator: {
                options: thousandSeparators,
                control: { type: 'select' },
            },
            decimalSeparator: {
                options: decimalSeparators,
                control: { type: 'select' },
            },
            thousandsGroupStyle: {
                options: thousandsGroupStyles,
                control: { type: 'select' },
            },
            decimalScale: {
                control: { type: 'number', min: 0 },
            },
            fixedDecimalScale: {
                control: { type: 'boolean' },
            },
            allowNegative: {
                control: { type: 'boolean' },
            },
            allowLeadingZeros: {
                control: { type: 'boolean' },
            },
            limitBehavior: {
                options: limitBehaviorOptions,
                control: { type: 'select' },
            },
            displayWithoutValue: {
                options: displayWithoutValueOptions,
                control: { type: 'select' },
            },
            isManualInput: {
                control: { type: 'boolean' },
            },
            textBefore: {
                control: { type: 'text' },
            },
            textAfter: {
                control: { type: 'text' },
            },
            width: {
                control: { type: 'number' },
            },
            isLoading: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
