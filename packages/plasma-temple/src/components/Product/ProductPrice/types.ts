import { PriceProps } from '@salutejs/plasma-ui';

export interface ProductPriceProps extends Omit<PriceProps, 'children' | 'stroke'> {
    /** Цена товара */
    price?: number;
    /** Старая цена товара */
    oldPrice?: number;
    className?: string;
}
