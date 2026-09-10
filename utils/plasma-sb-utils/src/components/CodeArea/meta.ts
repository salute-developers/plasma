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
            },
            appearance: {
                options: ['default', 'hasWrapper'],
                control: { type: 'select' },
            },
            language: {
                options: codeLanguages,
                control: { type: 'select' },
            },
            showLineNumbers: {
                control: { type: 'boolean' },
            },
            hasContentOuter: {
                control: { type: 'boolean' },
            },
            hasHeaderSlot: {
                control: { type: 'boolean' },
            },
            hasDivider: {
                control: { type: 'boolean' },
                if: { arg: 'hasHeaderSlot', truthy: true },
            },
            hasAction: {
                control: { type: 'boolean' },
            },
            height: {
                control: { type: 'text' },
            },
            width: {
                control: { type: 'text' },
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
