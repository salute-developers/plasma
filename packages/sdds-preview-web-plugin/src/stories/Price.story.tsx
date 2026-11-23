import { component, mergeConfig, priceConfig } from '@salutejs/plasma-new-hope/styled-components';

const Price = component(mergeConfig(priceConfig as any));

const PriceDefault = {
    name: 'Default',
    args: [
        {
            name: 'priceLabel',
            value: 12345.67,
        },
        {
            name: 'locale',
            value: 'ru',
        },
        {
            name: 'currency',
            value: 'rub',
        },
        {
            name: 'stroked',
            value: false,
        },
        {
            name: 'minimumFractionDigits',
            value: 0,
        },
    ],
    render: function Story(args: any) {
        const { priceLabel, minimumFractionDigits, ...rest } = args;

        return (
            <Price {...rest} minimumFractionDigits={Number(minimumFractionDigits) || 0}>
                {Number(priceLabel) || 0}
            </Price>
        );
    },
};

export const PriceStories = [PriceDefault];
