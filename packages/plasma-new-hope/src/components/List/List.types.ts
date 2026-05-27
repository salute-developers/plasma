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

    /**
     * Добавляет фон контейнеру списка
     */
    hasBackground?: boolean;

    /**
     * Добавляет фон каждому элементу списка
     */
    hasItemBackground?: boolean;

    /**
     * Добавляет разделители между элементами списка
     */
    hasDivider?: boolean;
};

export type ListProps = HTMLAttributes<HTMLUListElement> & CustomListProps;
