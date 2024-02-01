import type { HTMLAttributes, ReactNode, MouseEvent, ElementType } from 'react';

type DropdownItemCustomProps = {
    /**
     * Уникальный идентификатор элемента
     */
    id?: string;
    /**
     * Компонент не активен
     */
    disabled?: boolean;
    /**
     * Метка-подпись к элементу
     */
    label?: ReactNode;
    /**
     * WAI-ARIA role элемента меню
     */
    role?: string;
    /**
     * Слот для контента слева
     */
    contentLeft?: ElementType | ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ElementType | ReactNode;
    /**
     *  Название слота контента
     */
    name?: string;
    /**
     *  Отмечен ли данный элемент
     */
    checked?: boolean;
    /**
     *  Содержимое контента
     */
    text?: string;
    /**
     *  Значение контента
     */
    value?: string | number | boolean;
    /**
     *  Значение контента
     */
    isSelected?: boolean;
    /**
     *  Коллбек при клике на элемент
     */
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    /**
     *  Коллбек при выборе элемента
     */
    onSelect?: (value?: any, text?: any) => void;
    size?: string;
    view?: string;
};

export type DropdownItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> & DropdownItemCustomProps;
