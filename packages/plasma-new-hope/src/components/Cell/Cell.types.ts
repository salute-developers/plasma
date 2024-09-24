import type { ReactNode } from 'react';

import type { CellTextboxProps } from './ui/CellTextbox/CellTextbox.types';

export type AlignProp = 'center' | 'top' | 'bottom';

type CustomCellProps = {
    /**
     * Размер
     */
    size?: string;

    /**
     * Размер
     */
    view?: string;

    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;

    /**
     * Слот для контента спарва, например `Icon`
     */
    contentRight?: ReactNode;

    /**
     * Вертикальное выравнивание контента слева.
     */
    alignContentLeft?: AlignProp;

    /**
     * Вертикальное выравнивание контента справа.
     */
    alignContentRight?: AlignProp;

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
     * Свойство устарело, вместо этого нужно использовать contentLeft
     * @deprecated
     */
    content?: ReactNode;

    /**
     * Свойство устарело, вместо этого нужно использовать title
     * @deprecated
     */
    description?: string;
};

export type CellProps = CustomCellProps & CellTextboxProps;
