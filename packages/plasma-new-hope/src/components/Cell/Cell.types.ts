import type { HTMLAttributes, ReactNode } from 'react';

type CustomCellProps = {
    /**
     * Размер
     */
    size: 'l' | 'm' | 's' | 'xs';

    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;

    /**
     * Слот для контента спарва, например `Icon`
     */
    contentRight?: ReactNode;

    /**
     * Ширина cell
     * @description
     * Может принимать три значения:
     * fixed - кнопка фиксированной ширины;
     * filled - кнопка занимает всю доступную ширину
     * auto - кнопка растягивается в зависимости от контента
     */
    stretching?: 'fixed' | 'filled' | 'auto';
};

export type CellProps = HTMLAttributes<HTMLDivElement> & CustomCellProps;
