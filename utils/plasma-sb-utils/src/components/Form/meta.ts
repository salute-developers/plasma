import { disableProps, InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    component: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

export const createMeta = ({
    component,
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
            orientation: 'vertical',
            ...defaultArgs,
        },
        argTypes: {
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
