import { ReactNode } from 'react';
import { DisabledProps, PriceProps } from '@salutejs/plasma-core';

import { CardProps } from '../Card/Card';

import { ProductCardStepperProps } from './ProductCardStepper';

interface Periodicity extends Pick<PriceProps, 'periodicity'> {}

export interface ProductCardProps extends CardProps, DisabledProps, Periodicity {
    /**
     * Слот под картинку.
     */
    media?: ReactNode;
    /**
     * Слот под бейдж (-и).
     */
    badge?: ReactNode | Array<ReactNode>;
    /**
     * Текст или название карточки.
     */
    text?: string | ReactNode;
    /**
     * Дополнительная информация для карточки.
     */
    additionalInfo?: string;
    /**
     * Актуальная цена.
     */
    price?: number | string;
    /**
     * Старая (перечеркнутая) цена.
     */
    oldPrice?: number | string;
    /**
     * Количество.
     */
    quantity?: ProductCardStepperProps['value'];
    /**
     * Колбек изменени количества.
     */
    onQuantityChange?: ProductCardStepperProps['onChange'];
    /**
     * Шаг изменения количества.
     */
    quantityStep?: ProductCardStepperProps['step'];
    /**
     * Минимальное количества.
     */
    quantityMin?: ProductCardStepperProps['min'];
    /**
     * Максимальное количества.
     */
    quantityMax?: ProductCardStepperProps['max'];
    /**
     * Слот под степпер.
     */
    stepper?: ReactNode;
    /**
     * Цвет подложки и градиента карточки.
     */
    backgroundColor?: string;
    /**
     * Режим только для чтения.
     */
    readonly?: boolean;
    /**
     * Отключить экшен кнопки.
     */
    disabledAction?: boolean;
}

export interface ProductCardPrice extends Pick<ProductCardProps, 'price' | 'oldPrice' | 'periodicity'> {}

export const enum PriceTypes {
    NEW = 'new',
    OLD = 'old',
}
