import { disableProps, InSpacingDecorator } from '../..';

import { types } from './fixtures';

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
            count: 2000,
            slots: 9,
            initialValue: 1,
            perPage: 20,
            type: 'default',
            view: 'clear',
            viewCurrentPage: 'secondary',
            size: 'xs',
            hasQuickJump: true,
            hasPerPage: true,
            pilled: false,
            square: true,
            listWidth: '5rem',
            helperText: 'HelperText',
            singleLine: false,
            enableLeftSlot: true,
            enableRightSlot: true,
            ...defaultArgs,
        },
        argTypes: {
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            type: {
                options: types,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            viewCurrentPage: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            pilled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            square: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            slots: {
                control: { type: 'range', min: 1, max: 15 },
                table: { category: 'layout' },
            },
            hasQuickJump: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasPerPage: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            singleLine: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            listWidth: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            helperText: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            count: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            perPage: {
                control: { type: 'number' },
                table: { category: 'layout' },
            },
            enableLeftSlot: {
                control: { type: 'boolean' },
                table: { category: 'slot' },
            },
            enableRightSlot: {
                control: { type: 'boolean' },
                table: { category: 'slot' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
