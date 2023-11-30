import React, { useMemo } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { disableProps } from '../../helpers';
import { InSpacing } from '../../helpers/StoryDecorators';

import { Price } from '.';
import type { PriceProps } from '.';

type StoryPriceProps = PriceProps & { priceLabel: number; withCustomPeriodicity?: boolean };

const meta: Meta<StoryPriceProps> = {
    title: 'Content/Price',
    component: Price,
    decorators: [InSpacing],
    argTypes: {
        currency: {
            options: ['rub', 'usd', 'eur'],
            control: {
                type: 'inline-radio',
            },
        },
        periodicity: {
            options: {
                default: '',
                perDay: '/ день',
                perWeek: '/ неделя',
                perMonth: '/ месяц',
                perYear: '/ год',
            },
            control: {
                type: 'select',
            },
        },
        withCustomPeriodicity: {
            control: 'boolean',
        },
        ...disableProps(['children', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

const CustomPeriodicity = () => {
    return <span>/ квартал</span>;
};

const StoryDefault = ({ priceLabel, withCustomPeriodicity, periodicity, ...rest }: StoryPriceProps) => {
    const CustomPeriodicityMemo = useMemo(() => <CustomPeriodicity />, []);
    const currentPeriodicity = withCustomPeriodicity ? CustomPeriodicityMemo : periodicity;

    return (
        <Price periodicity={currentPeriodicity} {...rest}>
            {priceLabel}
        </Price>
    );
};

export const Default: StoryObj<StoryPriceProps> = {
    args: {
        currency: 'rub',
        stroke: false,
        minimumFractionDigits: 0,
        priceLabel: 12345.67,
        withCustomPeriodicity: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
