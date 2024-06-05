import type { ReactNode } from 'react';

type CustomAccordionProps = {
    /**
     * Тип аккордеона
     */
    view: string;

    /**
     * Размер
     */
    size?: string;

    /**
     * Возможность раскрытия всех элементов или только одногo
     */
    singleActive?: boolean;

    /**
     * Индекс элемента, который должен быть изначально раскрыт
     */
    defaultActiveEventKey?: number[];

    /**
     * Блокировка всех элементов
     */
    disabled?: boolean;

    /**
     * Ширина
     */
    stretching?: 'fixed' | 'filled';

    /**
     * Коллбэк при открытии или закрытии элемента аккордеона
     */
    onChange?: (index?: number, value?: boolean) => void;

    children?: ReactNode;
    className?: string;
};

export type AccordionProps = CustomAccordionProps;
