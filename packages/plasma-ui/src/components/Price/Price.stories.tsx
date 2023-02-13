import React, { useMemo } from 'react';
import { Story, Meta } from '@storybook/react';

import { disableProps } from '../../helpers';
import { InSpacing } from '../../helpers/StoryDecorators';

import { Price, PriceProps } from '.';

const currencyOptions = ['rub', 'usd', 'eur'];

const propsToDisable = ['children', 'theme', 'as', 'forwardedAs'];

export default {
    title: 'Content/Price',
    component: Price,
    decorators: [InSpacing],
    argTypes: {
        currency: {
            options: currencyOptions,
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
        ...disableProps(propsToDisable),
    },
} as Meta;

type Props = PriceProps & { priceLabel: number; withCustomPeriodicity?: boolean };

const CustomPeriodicity = () => {
    return <span>/ квартал</span>;
};

export const Default: Story<Props> = ({ priceLabel, withCustomPeriodicity, periodicity, ...rest }) => {
    const CustomPeriodicityMemo = useMemo(() => <CustomPeriodicity />, []);
    const currentPeriodicity = withCustomPeriodicity ? CustomPeriodicityMemo : periodicity;

    return (
        <Price periodicity={currentPeriodicity} {...rest}>
            {priceLabel}
        </Price>
    );
};

Default.args = {
    currency: 'rub',
    stroke: false,
    minimumFractionDigits: 0,
    priceLabel: 12345.67,
    withCustomPeriodicity: false,
};
