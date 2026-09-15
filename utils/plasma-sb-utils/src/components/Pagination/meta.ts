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
            helperText: 'Подсказка',
            textQuickJump: 'Перейти к странице',
            placeholderQuickJump: '№',
            singleLine: false,
            enableLeftSlot: true,
            enableRightSlot: true,
            ...defaultArgs,
        },
        argTypes: {
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            type: {
                options: types,
                control: { type: 'select' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            viewCurrentPage: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            pilled: {
                control: { type: 'boolean' },
            },
            square: {
                control: { type: 'boolean' },
            },
            slots: {
                control: { type: 'range', min: 1, max: 15 },
            },
            hasQuickJump: {
                control: { type: 'boolean' },
            },
            textQuickJump: {
                control: { type: 'text' },
                if: { arg: 'hasQuickJump', truhty: true },
            },
            placeholderQuickJump: {
                control: { type: 'text' },
                if: { arg: 'hasQuickJump', truhty: true },
            },
            hasPerPage: {
                control: { type: 'boolean' },
            },
            singleLine: {
                control: { type: 'boolean' },
            },
            listWidth: {
                control: { type: 'text' },
            },
            helperText: {
                control: { type: 'text' },
            },
            count: {
                control: { type: 'number' },
            },
            perPage: {
                control: { type: 'number' },
            },
            enableLeftSlot: {
                control: { type: 'boolean' },
            },
            enableRightSlot: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
