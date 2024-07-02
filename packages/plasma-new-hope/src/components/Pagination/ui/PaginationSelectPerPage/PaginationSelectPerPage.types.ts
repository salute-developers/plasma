import type { HTMLAttributes } from 'react';

import type { PaginationProps } from '../../Pagination.types';

export type PaginationSelectPerPageRoot = {
    /*
     * Текущее значение
     */
    perPageValue?: number;

    /*
     * Список значений
     */
    perPageList?: number[];

    /*
     * Текст для выбора кол-ва результатов на странице
     */
    textPerPage?: string;

    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page?: number) => void;

    size: PaginationProps['size'];

    listWidth: PaginationProps['listWidth'];
};

export type PaginationSelectPerPageProps = HTMLAttributes<HTMLDivElement> & PaginationSelectPerPageRoot;
