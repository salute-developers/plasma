import type { HTMLAttributes, ReactNode } from 'react';

import type { AsProps } from '../../types';

type CreateArrayWithLengthX<LENGTH extends number, ACC extends unknown[] = []> = ACC['length'] extends LENGTH
    ? ACC
    : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>;

type NumericRange<
    START_ARR extends number[],
    END extends number,
    ACC extends number = never
> = START_ARR['length'] extends END ? ACC | END : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>;

export type CustomPaginationProps = {
    //
    //  Вид
    //
    view?: 'clear' | 'disabled' | 'secondary';

    //
    //  Вид выбранной кнопки
    //
    viewCurrentPage?: 'secondary' | 'primary' | 'clear';

    //
    //  Левый контент
    //
    leftContent?: ReactNode;

    //
    //  Правый контент
    //
    rightContent?: ReactNode;

    //
    //  Тип обычный или компактный
    //
    type?: 'compact' | 'default';

    //
    // Размер
    //
    size?: 'xs' | 's' | 'm' | 'l';

    //
    // Количество страниц
    //
    pages?: number;

    //
    // Выбранная страница
    //
    value?: number;

    //
    // Выбор страницы через Input
    //
    isQuickJump?: boolean;

    //
    // Выбор количества результатов на странице
    //
    isPerPage?: boolean;

    //
    // Выбренное количество результатов на странице
    //
    perPage?: number;

    //
    // Выбренное количество результатов на странице
    //
    perPageList?: number[];

    //
    // Заблокированные страницы
    //
    disabled?: number[];

    //
    // Количество PageButtons
    //
    slots?: NumericRange<CreateArrayWithLengthX<7>, 15>;

    //
    // Скругление кнопки
    //
    pilled?: boolean;

    //
    // Размер кнопки
    //
    stretching?: boolean;

    //
    // Авто изменение стиля кнопок в ButtonGroup
    //
    isCommonButtonStyles?: boolean;

    //
    // Функция которая исполнятеся при изменении
    //
    onChangeValue?: (page: number, perPage: number) => void;
};

// export type PaginationProps = HTMLAttributes<HTMLDivElement> & CustomPaginationProps;

export interface PaginationProps extends HTMLAttributes<HTMLDivElement>, AsProps, CustomPaginationProps {}
