import type { ReactNode } from 'react';

type CustomAccordionProps = {
    /**
     * Тип отображения для accordion
     */
    view?: string;

    /**
     * Размер
     */
    size?: string;

    /**
     * Возможность раскрытия всех элементов или только одного
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
     * Callback при открытии или закрытии элемента accordion
     */
    onChange?: (index?: number, value?: boolean) => void;

    children?: ReactNode;
    className?: string;
};

export type AccordionProps = CustomAccordionProps;
