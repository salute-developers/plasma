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
    title = 'HOCs/WithTextGradient',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            textGradient: 'linear-gradient(90deg, #E63946, #457B9D)',
            textGradientHover: '',
            textGradientActive: '',
            ...defaultArgs,
        },
        argTypes: {
            textGradient: {
                control: { type: 'text' },
                table: { category: 'withTextGradient' },
            },
            textGradientHover: {
                control: { type: 'text' },
                table: { category: 'withTextGradient' },
            },
            textGradientActive: {
                control: { type: 'text' },
                table: { category: 'withTextGradient' },
            },
            ...additionalArgTypes,
            ...disableProps(disablePropsList),
        },
    };
};
