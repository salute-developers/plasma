import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import type { AsProps, NumericRange, CreateArrayWithLengthX } from '../../types';
/*
 * Тип создания диапозона чисел
 */

export type PaginationTypes = 'compact' | 'default';

export type CustomPaginationProps = {
    /*
     * Вид
     */
    view?: string;

    /*
     *  Вид выбранной кнопки
     */
    viewCurrentPage?: string;

    /*
     *  Левый контент
     */
    leftContent?: ReactNode;

    /*
     *  Правый контент
     */
    rightContent?: ReactNode;

    /*
     *  Тип обычный или компактный
     */
    type?: PaginationTypes;

    /*
     * Размер
     */
    size?: string;

    /*
     * Количество страниц
     */
    count?: number;

    /*
     * Выбранная страница
     */
    value?: number;

    /*
     * Выбор страницы через Input
     */
    hasQuickJump?: boolean;

    /*
     * Выбор количества результатов на странице
     */
    hasPerPage?: boolean;

    /*
     * Выбранное количество результатов на странице
     */
    perPage?: number;

    /*
     * Список результатов на странице
     */
    perPageList?: number[];

    /*
     * Заблокированные страницы
     */
    disabledPages?: string[];

    /*
     * Количество PageButtons
     */
    slots?: NumericRange<CreateArrayWithLengthX<7>, 15>;

    /*
     * Скругление кнопки
     */
    pilled?: boolean;

    /*
     * Равная ширина и высота кнопки
     */
    square?: boolean;

    /*
     * Авто изменение стиля кнопок в ButtonGroup
     */
    isCommonButtonStyles?: boolean;

    /*
     * Placeholder TextField'a для быстрого прыжка на страницу
     */
    placeholderQuickJump?: string;

    /*
     * Текст для быстрого прыжка на страницу
     */
    textQuickJump?: string;

    /*
     * Текст для выбора кол-ва результатов на странице
     */
    textPerPage?: string;

    /**
     * Значение css width для выпадающего списка.
     * @example width="200px"
     */
    listWidth?: CSSProperties['width'];

    /*
     * Функция которая исполняeтся при изменении
     */
    onChangePageValue?: (page?: number) => void;
    onChangePerPageValue?: (perpage?: number) => void;
};

export interface PaginationProps extends HTMLAttributes<HTMLDivElement>, AsProps, CustomPaginationProps {}
