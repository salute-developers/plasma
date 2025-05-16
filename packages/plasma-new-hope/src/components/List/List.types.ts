import type { ReactNode } from 'react';

type CustomListProps = {
    /**
     * Тип отображения для accordion
     */
    view?: string;

    /**
     * Размер
     */
    size?: string;

    /**
     * Вариант List
     */
    variant?: string;
    /**
     * Disabled
     */
    disabled?: string;

    children?: ReactNode;
    className?: string;
};

export type ListProps = CustomListProps;
