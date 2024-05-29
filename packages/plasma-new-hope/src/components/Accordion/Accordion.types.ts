import type { ReactNode } from 'react';

type CustomAccordionProps = {
    /**
     * Тип аккардиона
     */
    view: string;

    /**
     * Размер
     */
    size?: string;

    /**
     * Ширина
     * @description
     * Может принимать два значения:
     * fixed - кнопка фиксированной ширины;
     * filled - кнопка занимает всю доступную ширину
     */
    stretching?: 'fixed' | 'filled';

    children?: ReactNode;
    className?: string;
};

export type AccordionProps = CustomAccordionProps;
