import { disableProps, InSpacingDecorator } from '../..';

const borderVariant = ['rows', 'header', 'all'];

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
            view: 'default',
            size: 'm',
            borderVariant: 'all',
            stickyHeader: false,
            hasTopContent: false,
            hasBottomContent: false,
            ...defaultArgs,
        },
        argTypes: {
            view: {
                control: 'select',
                options: componentConfig.views,
            },
            size: {
                control: 'select',
                options: componentConfig.sizes,
            },
            borderVariant: {
                control: 'select',
                options: borderVariant,
            },
            stickyHeader: {
                control: 'boolean',
            },
            maxHeight: {
                control: 'text',
            },
            enableSelection: {
                control: 'boolean',
            },
            hasTopContent: {
                control: 'boolean',
            },
            hasBottomContent: {
                control: 'boolean',
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
