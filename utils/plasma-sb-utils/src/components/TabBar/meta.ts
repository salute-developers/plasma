import { disableProps, InSpacingDecorator } from '../../index';

const separations = ['none', 'shadow', 'divider'];

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['children'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Navigation/TabBar',
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
        island: false,
        separation: 'none',
        hasSelectedItemBackground: false,
        homeIndicator: false,
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
        island: {
            control: { type: 'boolean' },
        },
        separation: {
            options: separations,
            control: { type: 'select' },
        },
        hasSelectedItemBackground: {
            control: { type: 'boolean' },
        },
        homeIndicator: {
            control: { type: 'boolean' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
