import type { ReactNode } from 'react';

import type { TextboxProps } from './Textbox/Textbox.types';

export type AlignProp = 'center' | 'top' | 'bottom';

type CustomCellProps = {
    /**
     * Размер
     */
    size?: string;

    /**
     * Размер
     */
    view: string;

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
    alignLeft?: AlignProp;

    /**
     * Вертикальное выравнивание контента справа.
     */
    alignRight?: AlignProp;

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

export type CellProps = CustomCellProps & TextboxProps;
