import React from 'react';

import { AsProps } from '../../types';

export interface PriceProps extends React.HTMLAttributes<HTMLSpanElement>, AsProps {
    /**
     * Значение контрола.
     */
    children: number;
    /**
     * Валюта.
     */
    currency?: 'rub' | 'usd' | 'eur';
    /**
     * Перечеркнутый текст (старая цена, например).
     */
    stroke?: boolean;
    /**
     * Минимальное количество цифр после десятичного разделителя.
     */
    minimumFractionDigits?: number;
    /**
     * Указывает регулярность платежа, идет после цены.
     * Например - 990Р / день.
     */
    periodicity?: '/ день' | '/ неделя' | '/ месяц' | '/ год' | React.ReactElement;
}

export interface StyledPriceProps {
    $stroke?: boolean;
}
