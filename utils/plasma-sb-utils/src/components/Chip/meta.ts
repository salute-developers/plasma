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

const commonDisabledArgs = ['focused', 'readOnly', 'onClear', 'contentLeft', 'contentRight', 'contentClearButton'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Chip',
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
            size: 'm',
            appearance: 'default',
            text: 'Hello',
            hasClear: true,
            disabled: false,
            pilled: false,
            enableContentLeft: false,
            enableContentRight: false,
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
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            focused: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            text: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            pilled: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            hasClear: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, 'textGradientOption', ...disablePropsList]),
        },
    };
};
