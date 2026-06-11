import { disableProps, InSpacingDecorator } from '../../index';

import { positionValues } from './fixtures';

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
    title = 'Data Entry/EmbeddedButton',
    defaultArgs = {},
    additionalArgTypes = {},
    disablePropsList = [],
}: CreateMetaProps) => {
    return {
        title,
        decorators: [InSpacingDecorator],
        component,
        args: {
            buttonContainerWidth: '10rem',
            buttonContainerHeight: '10rem',
            view: 'default',
            size: 'm',
            position: 'center',
            disabled: false,
            isLoading: false,
            ...defaultArgs,
        },
        argTypes: {
            buttonContainerWidth: {
                control: { type: 'text' },
                table: { category: 'example-related' },
            },
            buttonContainerHeight: {
                control: { type: 'text' },
                table: { category: 'example-related' },
            },
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
            position: {
                options: positionValues,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            isLoading: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            ...additionalArgTypes,
            ...disableProps([
                'theme',
                'loader',
                'onClick',
                'onFocus',
                'onBlur',
                'as',
                'forwardedAs',
                ...disablePropsList,
            ]),
        },
    };
};
