import React from 'react';
import { usePaginationDots, SmartPaginationDotsProps as BaseProps } from '@salutejs/plasma-core';

import { PaginationDots } from './PaginationDots';
import { PaginationDot } from './PaginationDot';

export interface SmartPaginationDotsProps extends BaseProps, React.HTMLAttributes<HTMLUListElement> {}

/**
 * Компонент для отображения точек пагинации
 * с возможностью ограничения количества видимых элементов.
 */
export const SmartPaginationDots = ({ items, index, visibleItems, ...rest }: SmartPaginationDotsProps) => {
    const { sliced, activeId } = usePaginationDots({ items, index, visibleItems });

    return (
        <PaginationDots {...rest}>
            {sliced.map(({ id }, i) => (
                <PaginationDot key={`item:${i}`} isActive={id === activeId} />
            ))}
        </PaginationDots>
    );
};
