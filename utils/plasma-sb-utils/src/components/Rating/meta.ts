import { disableProps, InSpacingDecorator } from '../../index';

import { scorePrecisions, valuePlacements, iconsCount, helperTextStretchings } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['iconSlot', 'iconSlotOutline', 'iconSlotHalf'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Rating',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            view: 'default',
            size: 'l',
            hasValue: true,
            value: 3.8,
            precision: 1,
            decimalSeparator: '.',
            valuePlacement: 'before',
            hasIcons: true,
            iconQuantity: 5,
            helperText: 'Helper text',
            helperTextStretching: 'filled',
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
            hasValue: {
                control: { type: 'boolean' },
                table: { category: 'value-related' },
            },
            value: {
                control: { type: 'number' },
                if: { arg: 'hasValue', truthy: true },
                table: { category: 'value-related' },
            },
            precision: {
                options: scorePrecisions,
                control: { type: 'select' },
                if: { arg: 'hasValue', truthy: true },
                table: { category: 'value-related' },
            },
            decimalSeparator: {
                control: { type: 'text' },
                if: { arg: 'hasValue', truthy: true },
                table: { category: 'value-related' },
            },
            valuePlacement: {
                options: valuePlacements,
                control: { type: 'select' },
                if: { arg: 'hasValue', truthy: true },
                table: { category: 'value-related' },
            },
            hasIcons: {
                control: { type: 'boolean' },
                if: { arg: 'hasValue', truthy: true },
                table: { category: 'layout' },
            },
            iconQuantity: {
                options: iconsCount,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            helperText: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            helperTextStretching: {
                options: helperTextStretchings,
                control: { type: 'select' },
                if: { arg: 'helperText', neq: '' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
