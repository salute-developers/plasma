import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { checkboxConfig, checkboxTokens } from '../Checkbox';

import { TableProps } from './Table.types';
import { tableTokens as tokens } from './Table.tokens';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

export const base = css`
    overflow-y: auto;
`;

export const Table = styled.table<{ variant: TableProps['variant']; stickyHeader?: boolean }>`
    width: fit-content;

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});

    border-collapse: ${({ stickyHeader }) => (stickyHeader ? 'separate' : 'collapse')};
    border-spacing: 1px;

    border-width: 0px;
    border-top: 0;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};

    th,
    td {
        box-shadow: ${({ stickyHeader }) => (stickyHeader ? '0 0 0 1px #ddd' : 'none')};
        border-width: ${({ stickyHeader }) => (stickyHeader ? '0' : '1px')};
    }
`;

export const Tr = styled.tr<{ variant: TableProps['variant']; selected?: boolean }>`
    width: fit-content;
    height: 30px;
    background-color: ${({ selected }) => (selected ? 'var(--surface-transparent-accent)' : 'transparent')};

    &:nth-child(2n - 1) {
        background-color: ${({ variant, selected }) =>
            // eslint-disable-next-line no-nested-ternary
            selected ? 'var(--surface-transparent-accent)' : variant === 'border-all-bg' ? '#FFFFFF' : 'transparent'};
    }
`;

export const Thead = styled.thead<{ stickyHeader?: boolean }>`
    position: ${({ stickyHeader }) => (stickyHeader ? 'sticky' : 'static')};
    top: 1px;
    background: ${({ stickyHeader }) => (stickyHeader ? '#F9F9F9' : 'transparent')};
    z-index: 1;

    ${Tr} {
        background: transparent;
    }
`;

export const Resizer = styled.div<{ isResizing: boolean }>`
    display: ${({ isResizing }) => (isResizing ? 'block' : 'none')};
    position: absolute;
    z-index: 1;
    top: -1px;
    bottom: -1px;
    right: -2px;
    width: 0.1875rem;
    background: var(--outline-accent);
    cursor: col-resize;
    user-select: none;
    touch-action: none;
`;

export const Th = styled.th<{ variant: TableProps['variant']; selectionCell?: boolean }>`
    padding: ${({ selectionCell }) =>
        selectionCell ? `var(${tokens.checkboxCellPadding})` : `var(${tokens.cellPadding})`};
    position: relative;
    font-weight: 600;
    text-align: left;
    height: var(${tokens.headerRowHeight});
    background-color: transparent;
    color: inherit;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};
    border-bottom-color: ${({ variant }) =>
        variant === 'border-all' ||
        variant === 'border-all-bg' ||
        variant === 'border-rows' ||
        variant === 'border-header'
            ? '#DDDDDD'
            : 'transparent'};

    &:hover {
        ${Resizer} {
            display: block;
        }
    }
`;

export const Td = styled.td<{ variant: TableProps['variant']; selectionCell?: boolean }>`
    position: relative;
    padding: ${({ selectionCell }) =>
        selectionCell ? `var(${tokens.checkboxCellPadding})` : `var(${tokens.cellPadding})`};
    height: var(${tokens.rowHeight});
    border-width: 1px;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};
    border-bottom-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' || variant === 'border-rows'
            ? '#DDDDDD'
            : 'transparent'};
`;

export const StyledCheckbox = styled(Checkbox)`
    ${checkboxTokens.triggerSize}: var(${tokens.checkboxTriggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.checkboxTriggerBorderRadius});
    ${checkboxTokens.fillColor}: var(--text-accent);
    ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
    ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
`;
