import { styled } from '@linaria/react';

import { TableProps } from '../../Table.types';
import { tableTokens as tokens } from '../../Table.tokens';

export const Td = styled.td<{ variant: TableProps['variant']; selectionCell?: boolean }>`
    position: relative;
    padding: ${({ selectionCell }) =>
        selectionCell ? `var(${tokens.checkboxCellPadding})` : `var(${tokens.cellPadding})`};
    height: var(${tokens.rowHeight});
    border-width: 1px;
    border-top-width: 0;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};
    border-bottom-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' || variant === 'border-rows'
            ? '#DDDDDD'
            : 'transparent'};
    box-sizing: border-box;
`;
