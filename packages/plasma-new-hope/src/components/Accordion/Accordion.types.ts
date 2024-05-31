import type { ReactNode } from 'react';

type CustomAccordionProps = {
    /**
     * Тип аккордиона
     */
    view: string;

    /**
     * Размер
     */
    size?: string;

    /**
     * Возможность раскрытия всех элементов или только одного
     */
    once?: boolean;

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
