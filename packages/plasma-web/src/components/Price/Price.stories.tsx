import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Price } from '.';

const meta: Meta<typeof Price> = {
    title: 'Content/Price',
    decorators: [InSpacingDecorator],
    argTypes: {
        currency: {
            options: ['rub', 'usd', 'eur', 'inr'],
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['children', 'theme', 'as', 'forwardedAs']),
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
