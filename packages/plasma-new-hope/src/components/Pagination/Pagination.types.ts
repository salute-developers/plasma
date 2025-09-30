import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import type { AsProps, NumericRange, CreateArrayWithLengthX } from '../../types';
/*
 * Тип создания диапозона чисел
 */

export type PaginationTypes = 'compact' | 'default';

export type CustomPaginationProps = {
    /**
     * Вид
     */
    view?: string;

    /**
     *  Вид выбранной кнопки
     */
    viewCurrentPage?: string;

    /**
     *  Левый контент
     */
    leftContent?: ReactNode;

    /**
     *  Правый контент
     */
    rightContent?: ReactNode;

    /*
     * Дополнительный текст
     */
    helperText?: ReactNode;

    /**
     *  Тип обычный или компактный
     */
    type?: PaginationTypes;

    /**
     * Размер
     */
    size?: string;

    /**
     * Количество страниц
     */
    count?: number;

    /**
     * Выбранная страница
     */
    value?: number;

    /**
     * Выбранная страница по умолчанию
     */
    defaultValue?: number;

    /**
     * Выбор страницы через Input
     */
    hasQuickJump?: boolean;

    /**
     * Выбор количества результатов на странице
     */
    hasPerPage?: boolean;

    /**
     * Выбранное количество результатов на странице
     */
    perPage?: number;

    /**
     * Выбранное количество результатов на странице по умолчанию
     */
    defaultPerPage?: number;

    /**
     * Список результатов на странице
     */
    perPageList?: number[];

    /**
     * Заблокированные страницы
     */
    disabledPages?: string[];

    /**
     * Количество PageButtons
     */
    slots?: NumericRange<CreateArrayWithLengthX<1>, 15>;

    /**
     * Скругление кнопки
     */
    pilled?: boolean;

    /**
     * Равная ширина и высота кнопки
     */
    square?: boolean;

    /**
     * Авто изменение стиля кнопок в ButtonGroup
     */
    isCommonButtonStyles?: boolean;

    /**
     * Placeholder TextField'a для быстрого прыжка на страницу
     */
    placeholderQuickJump?: string;

    /**
     * Текст для быстрого прыжка на страницу
     */
    textQuickJump?: string;

    /**
     * Текст для выбора кол-ва результатов на странице
     */
    textPerPage?: string;

    /**
     * Значение css width для выпадающего списка.
     * @example width="200px"
     */
    listWidth?: CSSProperties['width'];
    /**
     * Перенос строки для helperText
     * @default false
     */
    singleLine?: boolean;

    /**
     * Функция которая исполняeтся при изменении `page`, `perPage`
     */
    onChange?: (page?: number, perPage?: number) => void;
    /**
     * @deprecated - использовать onChange
     */
    onChangePageValue?: (page?: number) => void;
    /**
     * @deprecated - использовать onChange
     */
    onChangePerPageValue?: (perPage?: number) => void;
};

export interface PaginationProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>,
        AsProps,
        CustomPaginationProps {}
