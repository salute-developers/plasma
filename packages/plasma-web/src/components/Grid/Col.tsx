import styled, { css } from 'styled-components';

import { gridColumns, gridSizes, mediaQuery } from '../../utils';

import { ColSizeProps, ColOffsetProps, ColCount, sizes, offsets } from './types';

const deviceScale = 1;

export interface ColProps extends ColSizeProps, ColOffsetProps, React.HTMLAttributes<HTMLDivElement> {
    /**
     * Размер ячейки, зависящий от максимального количества столбцов
     */
    size?: ColCount;
    /**
     * Отступ ячейки, сдвинет ее на n ячеек вправо
     */
    offset?: ColCount;
}

/**
 * Блок для размещения контента или строк (``Row``) внутри себя.
 */
export const Col = styled.div<ColProps>`
    box-sizing: border-box;

    padding-left: var(--plasma-grid-gutter);
    padding-right: var(--plasma-grid-gutter);

    ${({ size, offset, ...props }) =>
        gridSizes.map((breakpoint) => {
            const bpSize = sizes[breakpoint];
            const bpOffset = offsets[breakpoint];
            const colSize = props[bpSize] || size;
            const colOffset = props[bpOffset] || offset;

            return mediaQuery(
                breakpoint,
                deviceScale,
            )(css`
                ${colSize && `width: ${(100 / gridColumns[breakpoint]) * colSize}%;`}
                ${colOffset && `margin-left: ${(100 / gridColumns[breakpoint]) * colOffset}%;`}
            `);
        })}
`;
