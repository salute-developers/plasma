import { disableProps, InSpacingDecorator } from '../../index';

type CreateMetaProps = {
    component: any;
    componentConfig: any;
    title?: string;
    defaultArgs?: {};
    additionalArgTypes?: {};
    disablePropsList?: string[];
};

const commonDisabledArgs = ['color', 'width', 'height', 'deviceScale', 'theme', 'as', 'forwardedAs'];

export const createMeta = ({
    component,
    componentConfig,
    title = 'Data Display/Spinner',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => ({
    title,
    decorators: [InSpacingDecorator],
    component,
    args: {
        size: 'm',
        view: 'accent',
        ...defaultArgs,
    },
    argTypes: {
        size: {
            options: componentConfig.sizes,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        view: {
            options: componentConfig.views,
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        strokeSize: {
            options: [2, 4, 6, 8],
            control: { type: 'radio' },
            table: { category: 'variation' },
        },
        ...additionalArgTypes,
        ...disableProps([...commonDisabledArgs, ...disablePropsList]),
    },
});
