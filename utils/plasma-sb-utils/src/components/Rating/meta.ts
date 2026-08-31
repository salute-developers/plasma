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
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            hasValue: {
                control: { type: 'boolean' },
            },
            value: {
                control: { type: 'number' },
                if: { arg: 'hasValue', truthy: true },
            },
            precision: {
                options: scorePrecisions,
                control: { type: 'select' },
                if: { arg: 'hasValue', truthy: true },
            },
            decimalSeparator: {
                control: { type: 'text' },
                if: { arg: 'hasValue', truthy: true },
            },
            valuePlacement: {
                options: valuePlacements,
                control: { type: 'select' },
                if: { arg: 'hasValue', truthy: true },
            },
            hasIcons: {
                control: { type: 'boolean' },
                if: { arg: 'hasValue', truthy: true },
            },
            iconQuantity: {
                options: iconsCount,
                control: { type: 'select' },
            },
            helperText: {
                control: { type: 'text' },
            },
            helperTextStretching: {
                options: helperTextStretchings,
                control: { type: 'select' },
                if: { arg: 'helperText', neq: '' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, ...disablePropsList]),
        },
    };
};
