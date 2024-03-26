import type { HTMLAttributes, ReactNode } from 'react';

export type AlignLeftProp = 'center' | 'top' | 'bottom';
export type AlignRightProp = 'center' | 'top';
export type Sizes = 'l' | 'm' | 's' | 'xs';

type CustomCellProps = {
    /**
     * Размер
     */
    size: Sizes;

    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;

    /**
     * Слот для контента спарва, например `Icon`
     */
    contentRight?: ReactNode;

    /**
     * Слот для контента спарва, например `Icon`
     */
    content?: ReactNode;

    /**
     * Вертикальное выравнивание контента слева.
     */
    alignLeft?: AlignLeftProp;

    /**
     * Вертикальное выравнивание контента справа.
     */
    alignRight?: AlignRightProp;

    /**
     * Кнопка растягивается на всю доступную ширину
     * @deprecated
     * Использовать stretching
     */
    stretch?: boolean;

    /**
     * Ширина cell
     * @description
     * Может принимать три значения:
     * fixed - кнопка фиксированной ширины;
     * filled - кнопка занимает всю доступную ширину
     * auto - кнопка растягивается в зависимости от контента
     */
    stretching?: 'fixed' | 'filled' | 'auto';

    /**
     * Слот для Title
     */
    title?: ReactNode;

    /**
     * Слот для Subtitle
     */
    subtitle?: ReactNode;

    /**
     * Слот для Label
     */
    label?: ReactNode;
};

export type CellProps = HTMLAttributes<HTMLDivElement> & CustomCellProps;
