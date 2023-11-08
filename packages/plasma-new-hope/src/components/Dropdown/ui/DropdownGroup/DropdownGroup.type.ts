import type { HTMLAttributes } from 'react';

type DropdownGroupCustomProps = {
    /**
     * Уникальный идентификатор группы
     */
    id?: string;
    /**
     * Название класса лейбла группы
     */
    labelClassName?: string;
    /**
     * Название класса группы группы
     */
    groupClassName?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
    /**
     * WAI-ARIA role элемента меню.
     */
    role?: string;

    size?: string;
    view?: string;
};

export type DropdownGroupProps = HTMLAttributes<HTMLDivElement> & DropdownGroupCustomProps;
