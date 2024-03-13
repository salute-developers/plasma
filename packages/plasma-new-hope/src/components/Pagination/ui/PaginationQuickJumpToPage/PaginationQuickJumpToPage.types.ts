import type { HTMLAttributes } from 'react';

export type PaginationQuickJumpToPageRoot = {
    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page: number | null) => void;
};

export type PaginationQuickJumpToPageProps = HTMLAttributes<HTMLDivElement> & PaginationQuickJumpToPageRoot;
