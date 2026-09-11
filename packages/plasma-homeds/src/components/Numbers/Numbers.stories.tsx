import React from 'react';
import type { Meta, Decorator, StoryFn, StoryObj } from '@storybook/react-vite';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { inverseBackgroundPrimary } from '@salutejs/plasma-themes/tokens/plasma_homeds';

import { config } from './Numbers.config';

import { Numbers } from '.';

const { views, sizes } = getConfigVariations(config);

const BgDecorator: Decorator = (Story: StoryFn) => (
    <div style={{ background: inverseBackgroundPrimary, height: '100vh' }}>
        <Story />
    </div>
);

const meta: Meta<typeof Numbers> = {
    title: 'Data Display/Numbers',
    component: Numbers,
    decorators: [InSpacingDecorator, BgDecorator],
    parameters: {
        docs: {
            description: {
                component: 'LCD-цифры с дробной частью и единицей измерения. Шрифт SBLCD подключается автоматически.',
            },
        },
    },
    argTypes: {
        value: { control: 'number' },
        size: { control: 'select', options: sizes },
        view: { control: 'select', options: views },
        unit: { control: 'select', options: [undefined, 'degree', 'percent'] },
        ...disableProps(['theme', 'as', 'forwardedAs', 'view']),
    },
    args: {
        value: -28.8,
        unit: 'degree',
        size: 'm',
        view: 'default',
    },
};

export default meta;

export const Default: StoryObj<typeof Numbers> = {};
