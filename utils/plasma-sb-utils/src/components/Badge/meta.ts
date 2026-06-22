import { disableProps, InSpacingDecorator } from '../../index';

import { appearances } from './fixtures';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['contentLeft', 'contentRight', 'textGradientOption'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Badge',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        view: 'default',
        size: 'm',
        appearance: 'default',
        enableText: true,
        text: 'Hello',
        enableContentLeft: false,
        enableContentRight: false,
        pilled: false,
        maxWidth: '',
        enableTextGradient: false,
        textGradient: 'linear-gradient(90deg, #be4a07, #39e66e)',
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
        appearance: {
            options: appearances,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        pilled: {
            control: { type: 'boolean' },
            table: { category: 'variation' },
        },
        text: {
            control: { type: 'text' },
            if: { arg: 'enableText', truthy: true },
            table: { category: 'layout' },
        },
        maxWidth: {
            control: { type: 'text' },
            table: { category: 'layout' },
        },
        enableText: {
            control: { type: 'boolean' },
            table: { category: 'layout' },
        },
        enableContentLeft: {
            control: { type: 'boolean' },
            if: { arg: 'enableContentRight', truthy: false },
            table: { category: 'layout' },
        },
        enableContentRight: {
            control: { type: 'boolean' },
            if: { arg: 'enableText', truthy: true },
            table: { category: 'layout' },
        },
        enableTextGradient: {
            control: { type: 'boolean' },
            table: { category: 'gradient' },
        },
        textGradient: {
            control: { type: 'text' },
            if: { arg: 'enableTextGradient', eq: true },
            table: { category: 'gradient' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
