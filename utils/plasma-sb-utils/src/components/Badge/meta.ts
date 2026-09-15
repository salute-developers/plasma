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
        appearance: {
            options: appearances,
            control: { type: 'select' },
        },
        pilled: {
            control: { type: 'boolean' },
        },
        text: {
            control: { type: 'text' },
            if: { arg: 'enableText', truthy: true },
        },
        maxWidth: {
            control: { type: 'text' },
        },
        enableText: {
            control: { type: 'boolean' },
        },
        enableContentLeft: {
            control: { type: 'boolean' },
            if: { arg: 'enableContentRight', truthy: false },
        },
        enableContentRight: {
            control: { type: 'boolean' },
            if: { arg: 'enableText', truthy: true },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
