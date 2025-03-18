import { styled } from '@linaria/react';

import { TableProps } from '../../Table.types';
import { tableTokens as tokens } from '../../Table.tokens';

export const Td = styled.td<{
    borderVariant: TableProps['borderVariant'];
    selected?: boolean;
    selectionCell?: boolean;
    view?: TableProps['view'];
}>`
    position: relative;
    padding: ${({ selectionCell }) =>
        selectionCell ? `var(${tokens.checkboxCellPadding})` : `var(${tokens.cellPadding})`};
    height: var(${tokens.rowHeight});
    border-width: 1px;
    border-top-width: 0;
    border-style: solid;
    border-color: ${({ selected, borderVariant, view }) =>
        // eslint-disable-next-line no-nested-ternary
        borderVariant === 'all' && view !== 'clear'
            ? `var(${tokens.borderColor})`
            : selected
            ? 'var(--surface-transparent-accent)'
            : 'transparent'};
    border-bottom-color: ${({ borderVariant }) =>
        borderVariant === 'all' || borderVariant === 'rows' ? `var(${tokens.borderColor})` : 'transparent'};
    box-sizing: border-box;
`;
