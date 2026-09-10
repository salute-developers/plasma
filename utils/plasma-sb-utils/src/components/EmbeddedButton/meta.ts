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
            },
            buttonContainerHeight: {
                control: { type: 'text' },
            },
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
            },
            position: {
                options: positionValues,
                control: { type: 'select' },
            },
            isLoading: {
                control: { type: 'boolean' },
            },
            disabled: {
                control: { type: 'boolean' },
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
