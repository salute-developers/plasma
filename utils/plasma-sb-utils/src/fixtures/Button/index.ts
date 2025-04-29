import type { ComponentProps, ElementType } from 'react';

import { disableProps, InSpacingDecorator } from '../../index';

const stretchingValues = ['auto', 'filled', 'fixed'];
const pinValues = [
    '',
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
];

const contentPlacingValues = ['default', 'relaxed'];

const meta = {
    title: 'Data Entry/Button',
    decorators: [InSpacingDecorator],
    args: {
        view: 'default',
        size: 'm',
        contentPlacing: 'default',
        stretching: 'auto',
        text: 'Hello',
        value: 'Value',
        disabled: false,
        focused: true,
        square: false,
        isLoading: false,
    },
    argTypes: {
        value: {
            control: {
                type: 'text',
            },
        },
        contentPlacing: {
            options: contentPlacingValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        pin: {
            options: pinValues,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
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
        ]),
    },
};

export type ButtonStoryDefaultProps<T extends ElementType> = ComponentProps<T> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

export const FixturesButton = {
    stretchingValues,
    contentPlacingValues,
    pinValues,
    meta,
};
