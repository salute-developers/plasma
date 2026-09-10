import { disableProps, InSpacingDecorator } from '../../index';

import { appearances, pinValues } from './fixtures';

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
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            appearance: {
                options: appearances,
                control: { type: 'select' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            focused: {
                control: { type: 'boolean' },
            },
            text: {
                control: { type: 'text' },
            },
            pilled: {
                control: { type: 'boolean' },
            },
            pin: {
                options: pinValues,
                control: { type: 'select' },
            },
            hasClear: {
                control: { type: 'boolean' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([...commonDisabledArgs, 'textGradientOption', ...disablePropsList]),
        },
    };
};
