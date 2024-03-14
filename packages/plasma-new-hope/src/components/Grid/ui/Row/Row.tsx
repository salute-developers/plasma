import React, { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import { StyledRow } from './Row.styles';

/**
 * Блок для размещения колонок (``<Col />``) по горизонтали.
 * Блок нельзя вкладывать сам в себя, но можно чередовать далее по дереву с использованием ``Col``.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 */
export const Row = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <StyledRow ref={ref} {...rest}>
            {children}
        </StyledRow>
    );
});
