import type { HTMLAttributes } from 'react';

export type PaginationSelectPerPageRoot = {
    /*
     * Текущее значение
     */
    value?: number;

    /*
     * Список значений
     */
    valuesList?: number[];

    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page: number) => void;
};

export type PaginationSelectPerPageProps = HTMLAttributes<HTMLDivElement> & PaginationSelectPerPageRoot;
