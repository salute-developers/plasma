import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';

import { Price } from './Price';

const meta: Meta<typeof Price> = {
    title: 'Data Display/Price',
    decorators: [WithTheme],
    argTypes: {
        currency: {
            description: 'ISO 4217 код валюты (например, rub, usd, eur, gbp, cny)',
            control: {
                type: 'text',
            },
        },
        ...disableProps(['value', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

type StoryPriceProps = ComponentProps<typeof Price> & { priceLabel: number };

export const Default: StoryObj<StoryPriceProps> = {
    args: {
        locale: 'ru',
        currency: 'rub',
        stroked: false,
        minimumFractionDigits: 0,
        priceLabel: 12345.67,
    },
    render: ({ priceLabel, ...rest }) => <Price {...rest}>{priceLabel}</Price>,
};
