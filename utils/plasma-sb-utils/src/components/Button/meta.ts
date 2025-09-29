import { disableProps, InSpacingDecorator } from '../../index';

import { stretchingValues, pinValues, contentPlacingValues } from './fixtures';

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
    title = 'Data Entry/Button',
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
            size: 's',
            contentPlacing: 'default',
            stretching: 'auto',
            text: 'Button',
            value: '',
            disabled: false,
            focused: true,
            square: false,
            isLoading: false,
            enableContentLeft: false,
            enableContentRight: false,
            enableCounter: false,
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
            value: {
                control: { type: 'text' },
            },
            text: {
                control: { type: 'text' },
            },
            isLoading: {
                control: { type: 'boolean' },
            },
            disabled: {
                control: { type: 'boolean' },
            },
            contentPlacing: {
                options: contentPlacingValues,
                control: { type: 'select' },
            },
            stretching: {
                options: stretchingValues,
                control: { type: 'select' },
            },
            pin: {
                options: pinValues,
                control: { type: 'select' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
            },
            ...additionalArgTypes,
            ...disableProps([
                'theme',
                'loader',
                'onClick',
                'onFocus',
                'onBlur',
                'outlined',
                'contentLeft',
                'contentRight',
                'shiftLeft',
                'shiftRight',
                'stretch',
                'as',
                'forwardedAs',
                'pin',
                'focused',
                'blur',
                'square',
                ...disablePropsList,
            ]),
        },
    };
};
