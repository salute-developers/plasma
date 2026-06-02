import type { HTMLAttributes } from 'react';

export type PaginationQuickJumpToPageRoot = {
    /*
     * Предыдущее значение страниц
     */
    prevPageValue?: number;
    /*
     * Placeholder TextField'a для быстрого прыжка на страницу
     */
    placeholderQuickJump?: string;

    /*
     * Текст для быстрого прыжка на страницу
     */
    textQuickJump?: string;

    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page?: number) => void;
};

export type PaginationQuickJumpToPageProps = HTMLAttributes<HTMLDivElement> & PaginationQuickJumpToPageRoot;
