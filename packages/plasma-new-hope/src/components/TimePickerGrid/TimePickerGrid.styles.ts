import styled, { css } from 'styled-components';

import { tokens } from './TimePickerGrid.tokens';

export const base = css`
    display: flex;
    width: 100%;
`;

export const StyledTimePicker = styled.div<{ width?: string | number; columns?: number }>`
    background: var(${tokens.timePickerGridBackground});
    border-radius: var(${tokens.timePickerGridBorderRadius});

    width: ${({ width, columns }) => {
        if (width === 'fullWidth') return '100%';
        if (width === 'fixed' || width === undefined) {
            return columns
                ? `calc(var(${tokens.itemHeight}) * ${columns} + var(${tokens.scrollbarWidth}) * ${columns - 1})`
                : `var(${tokens.timePickerGridWidth})`;
        }
        return width;
    }};
    display: flex;
    padding: var(${tokens.timePickerGridPadding});
    flex: 1 1 1;
    gap: var(${tokens.scrollbarWidth});
    box-sizing: border-box;
    position: relative;
    height: var(${tokens.columnHeight});
`;
