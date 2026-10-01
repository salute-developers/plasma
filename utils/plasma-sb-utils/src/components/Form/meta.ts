import { disableProps, InSpacingDecorator } from '../../index';

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
    title = 'Data Entry/Form',
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
            orientation: 'vertical',
            ...defaultArgs,
        },
        argTypes: {
            size: {
                options: componentConfig.sizes,
                control: {
                    type: 'inline-radio',
                },
            },
            orientation: {
                options: ['vertical', 'horizontal'],
                control: {
                    type: 'inline-radio',
                },
            },
            ...additionalArgTypes,
            ...disableProps([...disablePropsList]),
        },
    };
};
