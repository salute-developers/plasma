import type { ReactNode, HTMLAttributes } from 'react';
import { AsProps } from 'src/types';

export interface PriceProps extends HTMLAttributes<HTMLSpanElement>, AsProps {
    /**
     * Значение для control.
     */
    children: number;
    /**
     * Локаль.
     * @default `ru`
     */
    locale?: string;
    /**
     * Валюта.
     * Принимает ISO 4217 код валюты.
     * @see rub
     * @default `rub`
     */
    currency?: 'rub' | 'usd' | 'eur' | 'inr' | string;
    /**
     * Перечеркнутый текст (старая цена, например).
     * @default false
     */
    stroked?: boolean;
    /**
     * Минимальное количество цифр после десятичного разделителя.
     * @default 0
     */
    minimumFractionDigits?: number;
    /**
     * Указывает регулярность платежа, идет после цены.
     * Например - 990Р / день.
     */
    periodicity?: ReactNode;
    /**
     * Перечеркнутый текст (старая цена, например).
     * @deprecated
     * @default false
     */
    stroke?: boolean;
    view?: string;
}
