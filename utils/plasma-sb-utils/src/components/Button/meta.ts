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
            ...defaultArgs,
        },
        argTypes: {
            view: {
                options: componentConfig.views,
                control: { type: 'select' },
                table: {
                    category: 'Appearance',
                },
            },
            size: {
                options: componentConfig.sizes,
                control: { type: 'select' },
                table: {
                    category: 'Appearance',
                },
            },
            value: {
                control: { type: 'text' },
                table: {
                    category: 'Content',
                },
            },
            text: {
                control: { type: 'text' },
                table: {
                    category: 'Content',
                },
            },
            isLoading: {
                control: { type: 'boolean' },
                table: { defaultValue: { summary: 'false' }, category: 'State' },
            },
            disabled: {
                control: { type: 'boolean' },
                table: { defaultValue: { summary: 'false' }, category: 'State' },
            },
            contentPlacing: {
                options: contentPlacingValues,
                control: { type: 'select' },
                table: {
                    category: 'Other',
                },
            },
            stretching: {
                options: stretchingValues,
                control: { type: 'select' },
                table: {
                    category: 'Other',
                },
            },
            pin: {
                options: pinValues,
                control: { type: 'select' },
                table: { defaultValue: { summary: 'bottom' }, category: 'Other' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { defaultValue: { summary: 'bottom' }, category: 'Other' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { defaultValue: { summary: 'bottom' }, category: 'Other' },
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
