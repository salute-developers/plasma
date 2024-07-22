import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';

import { Price } from './Price';

const currencies = ['rub', 'usd', 'eur', 'inr'];

const meta: Meta<typeof Price> = {
    title: 'plasma_web/Price',
    decorators: [WithTheme],
    argTypes: {
        currency: {
            options: currencies,
            control: {
                type: 'inline-radio',
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
