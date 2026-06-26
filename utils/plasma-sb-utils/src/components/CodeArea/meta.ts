import { disableProps, InSpacingDecorator } from '../../index';

import { codeLanguages } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/CodeArea',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            size: 'm',
            appearance: 'default',
            language: 'json',
            showLineNumbers: false,
            hasContentOuter: false,
            hasHeaderSlot: false,
            hasDivider: false,
            hasAction: false,
            width: '640px',
            height: 'auto',
            ...defaultArgs,
        },
        argTypes: {
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            appearance: {
                options: ['default', 'hasWrapper'],
                control: { type: 'select' },
                table: { category: 'variation' },
            },
            language: {
                options: codeLanguages,
                control: { type: 'select' },
                table: { category: 'code-related' },
            },
            showLineNumbers: {
                control: { type: 'boolean' },
                table: { category: 'code-related' },
            },
            hasContentOuter: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasHeaderSlot: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
                if: { arg: 'hasHeaderSlot', truthy: true },
            },
            hasAction: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            height: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            width: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([
                'view',
                'children',
                'contentOuter',
                'contentHeader',
                'contentAction',
                ...disablePropsList,
            ]),
        },
    };
};
