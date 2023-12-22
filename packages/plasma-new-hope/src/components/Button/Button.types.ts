import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { Pin } from '../../utils/roundness';

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
     */
    stretch?: boolean;
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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps;
