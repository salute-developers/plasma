import { disableProps, InSpacingDecorator } from '../..';

import {
    segmentations,
    shapes,
    inputBackgroundTypes,
    displayWithoutValueOptions,
    limitBehaviorOptions,
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
            width: 188,
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
                table: { category: 'variation' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            shape: {
                options: shapes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            segmentation: {
                options: segmentations,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            inputBackgroundType: {
                options: inputBackgroundTypes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            min: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            max: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            step: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            precision: {
                control: { type: 'number' },
                table: { category: 'value-related' },
            },
            limitBehavior: {
                options: limitBehaviorOptions,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            displayWithoutValue: {
                options: displayWithoutValueOptions,
                control: { type: 'select' },
                table: { category: 'value-related' },
            },
            isManualInput: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            textBefore: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            textAfter: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            isLoading: {
                control: { type: 'boolean' },
                table: { category: 'state' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
