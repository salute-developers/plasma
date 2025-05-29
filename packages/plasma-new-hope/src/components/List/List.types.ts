import type { HTMLAttributes } from 'react';

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
    variant?: 'tight' | 'normal';
    /**
     * Disabled
     */
    disabled?: boolean;
};

export type ListProps = HTMLAttributes<HTMLUListElement> & CustomListProps;
