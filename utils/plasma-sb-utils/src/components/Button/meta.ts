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
        parameters: {
            controls: {
                disableSaveFromUI: true,
            },
        },
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
            enableTextGradient: false,
            textGradient: 'linear-gradient(90deg, #be4a07, #39e66e)',
            textGradientHover: 'linear-gradient(90deg, #39e66e, #be4a07)',
            textGradientActive: '',
            ...defaultArgs,
        },
        argTypes: {
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
            disabled: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            isLoading: {
                control: { type: 'boolean' },
                table: { category: 'variation' },
            },
            text: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            value: {
                control: { type: 'text' },
                table: { category: 'layout' },
            },
            contentPlacing: {
                options: contentPlacingValues,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            stretching: {
                options: stretchingValues,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            pin: {
                options: pinValues,
                control: { type: 'select' },
                table: { category: 'layout' },
            },
            enableContentLeft: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableContentRight: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableCounter: {
                control: { type: 'boolean' },
                table: { category: 'layout' },
            },
            enableTextGradient: {
                control: { type: 'boolean' },
                table: { category: 'gradient' },
            },
            textGradient: {
                control: { type: 'text' },
                table: { category: 'gradient' },
                if: { arg: 'enableTextGradient', eq: true },
            },
            textGradientHover: {
                control: { type: 'text' },
                table: { category: 'gradient' },
                if: { arg: 'enableTextGradient', eq: true },
            },
            textGradientActive: {
                control: { type: 'text' },
                table: { category: 'gradient' },
                if: { arg: 'enableTextGradient', eq: true },
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
                'textGradientOption',
                ...disablePropsList,
            ]),
        },
    };
};
