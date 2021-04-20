import { PriceProps } from '@salutejs/plasma-ui';

export interface ProductPriceProps extends Omit<PriceProps, 'children'> {
    price: number;
    oldPrice?: number;
    currency?: PriceProps['currency'];
    className?: string;
}
