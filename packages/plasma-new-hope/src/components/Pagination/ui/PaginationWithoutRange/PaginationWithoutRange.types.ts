import type { HTMLAttributes, FocusEvent, ReactNode } from 'react';

import type { PaginationProps } from '../../Pagination.types';

export type PaginationWithoutRangeRoot = {
    /*
     * Текущая страница
     */
    pageValue: number;

    /*
     * Всего страниц
     */
    pages: number;

    size: PaginationProps['size'];

    listWidth: PaginationProps['listWidth'];

    onChangePage: (page: number) => void;

    onChangePerPage: (perPage: number) => void;

    /*
     * Текущее количество результатов на странице
     */
    perPageValue?: number;

    perPageList?: number[];

    /*
     * Поле ввода текущей страницы. Если false — страница выводится текстом
     */
    hasQuickJump?: boolean;

    hasPerPage?: boolean;

    placeholderQuickJump?: string;

    isCommonButtonStyles?: boolean;

    leftContent?: ReactNode;

    rightContent?: ReactNode;

    onFocusQuickJump?: (e: FocusEvent<HTMLInputElement>) => void;

    onBlurQuickJump?: (e: FocusEvent<HTMLInputElement>) => void;
};

export type PaginationWithoutRangeProps = HTMLAttributes<HTMLDivElement> & PaginationWithoutRangeRoot;
