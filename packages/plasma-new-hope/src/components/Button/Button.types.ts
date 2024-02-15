import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { AsProps } from '@salutejs/plasma-core';

import type { Pin } from '../../utils/roundness';

type Stretching = 'fixed' | 'filled' | 'auto';

type CustomButtonProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * У кнопки состояние загрузки
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки
     */
    loader?: ReactNode;
    /**
     * Кнопка растягивается на всю доступную ширину
     * @deprecated
     * Использовать stretching
     */
    stretch?: boolean;
    /**
     * Ширина кнопки
     * @description
     * Может принимать три значения:
     * fixed - кнопка фиксированной ширины;
     * filled - кнопка занимает всю доступную ширину
     * auto - кнопка растягивается в зависимости от контента
     */
    stretching?: Stretching;
    /**
     * Кнопка принимает соотношение сторон 1:1
     */
    square?: boolean;
    /**
     * Кнопка сфокусирована
     */
    focused?: boolean;
    /**
     * Свойство задает скругление border-radius
     */
    pin?: Pin;
    /**
     * Вид кнопки
     */
    view?: string;
    /**
     * Размер кнопки
     */
    size?: string;
};

export interface ButtonProps<T = HTMLElement>
    extends ButtonHTMLAttributes<T>,
        Omit<AnchorHTMLAttributes<T>, 'type'>,
        AsProps,
        CustomButtonProps {}
