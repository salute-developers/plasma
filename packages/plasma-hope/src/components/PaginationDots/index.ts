import type { HTMLAttributes } from 'react';
import type { SmartPaginationDotsProps as SmartPaginationDotsPropsBase } from '@salutejs/plasma-core';

export interface SmartPaginationDotsProps extends SmartPaginationDotsPropsBase, HTMLAttributes<HTMLUListElement> {
    /**
     * Обработчик изменения индекса
     */
    onIndexChange?: (index: number) => void;
}

export type { PaginationDotProps } from '@salutejs/plasma-core';
