import type { HTMLAttributes, ReactNode } from 'react';

export type RatingProps = {
    /**
     * Отображаемое числовое значение.
     */
    value?: number | null;
    /**
     * Отобразить значение.
     * @default true
     */
    hasValue?: boolean;
    /**
     * Количество знаков после запятой.
     * @default 1
     */
    precision?: number;
    /**
     * Положение числа до или после звезд.
     * @default 'before'
     */
    valuePlacement?: 'before' | 'after';
    /**
     * Слот для отображения иконки, вместо закрашенной `звезды` по умолчанию.
     */
    iconSlot?: ReactNode;
    /**
     * Слот для отображения иконки, вместо outline-иконки `звезды` по умолчанию.
     */
    iconSlotOutline?: ReactNode;
    /**
     * Слот для отображения иконки, вместо закрашенной наполовину `звезды` по умолчанию.
     */
    iconSlotHalf?: ReactNode;
    /**
     * Отобразить звезды.
     * @default true
     */
    hasIcons?: boolean;
    /**
     * Количество звезд.
     * @default 5
     */
    iconQuantity?: 1 | 5 | 10;
    /**
     * Вспомогательный текст снизу слева.
     */
    helperText?: string;
    /**
     * Ширина вспомогательного текста снизу слева.
     */
    helperTextStretching?: 'fixed' | 'filled';
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
