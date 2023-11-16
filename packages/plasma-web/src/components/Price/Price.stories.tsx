import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Price } from '.';
import type { PriceProps } from '.';

const meta: Meta<PriceProps> = {
    title: 'Content/Price',
    component: Price,
    decorators: [InSpacingDecorator],
    argTypes: {
        currency: {
            options: ['rub', 'usd', 'eur'],
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['children', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<PriceProps & { priceLabel: number }> = {
    args: {
        currency: 'rub',
        stroke: false,
        minimumFractionDigits: 0,
        priceLabel: 12345.67,
    },
    render: ({ priceLabel, ...rest }) => <Price {...rest}>{priceLabel}</Price>,
};
