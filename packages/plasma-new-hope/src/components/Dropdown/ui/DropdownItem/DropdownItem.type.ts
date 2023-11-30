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
    contentLeft?: ElementType;
    /**
     * Слот для контента справа
     */
    contentRight?: ElementType;
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
    onSelect?: () => void;

    size?: string;
    view?: string;
};

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> & DropdownItemCustomProps;
