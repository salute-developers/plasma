import React, { FC } from 'react';
import { StorybookLink as BaseLink } from '@salutejs/plasma-docs-ui';

const storyLinks = {
    Card: 'card--default',
    Cart: 'cart-cart--default',
    Grid: 'grid--default',
    Product: 'product-product--default',
    StateLayout: 'statelayout--success',
};

export const StorybookLink: FC<{ name: keyof typeof storyLinks }> = ({ name }) => {
    return <BaseLink link={`https://bit.ly/3MuphOm-storybook/?path=/story/${storyLinks[name]}`} />;
};
