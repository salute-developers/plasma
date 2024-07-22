import React from 'react';

import { AsProps } from '../../types';

export interface PriceProps extends React.HTMLAttributes<HTMLSpanElement>, AsProps {
    /**
     * Значение контрола.
     */
    children: number;
    /**
     * Локаль.
     * @default `ru`
     */
    locale?: string;
    /**
     * Валюта.
     * @default `rub`
     */
    currency?: 'rub' | 'usd' | 'eur' | 'inr';
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
    periodicity?: React.ReactNode;
    /**
     * Перечеркнутый текст (старая цена, например).
     * @deprecated
     * @default false
     */
    stroke?: boolean;
    view?: string;
}
