import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './TimePickerGrid.tokens';

export const base = css`
    display: flex;
    width: 100%;
    height: 10rem;
`;

export const StyledTimePicker = styled.div<{ width?: string | number }>`
    background: var(${tokens.timePickerGridBackground});
    border-radius: var(${tokens.timePickerGridBorderRadius});
    width: ${({ width }) => (width === 'fullWidth' ? '100%' : width) || `var(${tokens.timePickerGridWidth})`};
    display: flex;
    padding: var(${tokens.timePickerGridPadding});
    flex: 1 1 1;
    gap: var(${tokens.scrollbarWidth});
    box-sizing: border-box;
    position: relative;
    height: var(${tokens.columnHeight});
`;
