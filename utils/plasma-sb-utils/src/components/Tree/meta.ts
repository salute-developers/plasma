import { disableProps, InSpacingDecorator } from '../..';

import { arrowPlacements, mode, variant } from './fixtures';

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
        argTypes: {
            size: {
                control: 'select',
                options: componentConfig.sizes,
            },
            checkable: {
                control: 'boolean',
            },
            multiple: {
                control: 'boolean',
            },
            arrowPlacement: {
                options: arrowPlacements,
                control: {
                    type: 'inline-radio',
                },
            },
            defaultExpandAll: {
                control: 'boolean',
            },
            fullWidthItemSelection: {
                control: 'boolean',
            },
            height: {
                control: 'number',
            },
            hasIcon: {
                control: 'boolean',
            },
            mode: {
                control: 'select',
                options: mode,
            },
            variant: {
                control: 'select',
                options: variant,
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
        args: {
            size: 'm',
            fullWidthItemSelection: false,
            singleLine: true,
            checkable: false,
            multiple: false,
            arrowPlacement: 'left',
            defaultExpandAll: true,
            height: undefined,
            hasIcon: true,
            mode: 'default',
            variant: 'normal',
            ...defaultArgs,
        },
    };
};
