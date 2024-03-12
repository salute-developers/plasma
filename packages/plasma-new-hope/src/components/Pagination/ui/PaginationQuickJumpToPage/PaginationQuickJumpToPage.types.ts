import type { HTMLAttributes } from 'react';

export type PaginationQuickJumpToPageRoot = {
    //
    // Функция которая исполнятеся при изменении
    //
    onChangeValue?: (page: number) => void;
};

export type PaginationQuickJumpToPageProps = HTMLAttributes<HTMLDivElement> & PaginationQuickJumpToPageRoot;
