import type { HTMLAttributes } from 'react';

export type PaginationQuickJumpToPageRoot = {
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
    onChangeValue?: (page: number | null) => void;
};

export type PaginationQuickJumpToPageProps = HTMLAttributes<HTMLDivElement> & PaginationQuickJumpToPageRoot;
