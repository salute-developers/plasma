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
     * Текст для выбора кол-ва результатов на странице
     */
    textPerPage?: string;

    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page: number) => void;
};

export type PaginationSelectPerPageProps = HTMLAttributes<HTMLDivElement> & PaginationSelectPerPageRoot;
