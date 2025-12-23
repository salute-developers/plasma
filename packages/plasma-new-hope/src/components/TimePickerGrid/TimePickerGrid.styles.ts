import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './TimePickerGrid.tokens';

export const base = css`
    display: flex;
    width: 100%;
`;

export const StyledTimePicker = styled.div<{ width?: string | number }>`
    background: var(${tokens.timePickerGridBackground});
    border-radius: var(${tokens.timePickerGridBorderRadius});
    width: ${({ width }) => {
        if (width === 'fullWidth') return '100%';
        if (width === 'fixed' || width === undefined) return `var(${tokens.timePickerGridWidth})`;
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
