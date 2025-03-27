import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { checkboxConfig, checkboxTokens } from '../Checkbox';
import { dividerConfig, dividerTokens } from '../Divider';
import { buttonConfig, buttonTokens } from '../Button';

import { TableProps } from './Table.types';
import { tableTokens as tokens } from './Table.tokens';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

const mergedButtonConfig = mergeConfig(buttonConfig);
const ButtonBase = component(mergedButtonConfig);

const mergedDividerConfig = mergeConfig(dividerConfig);
const Divider = component(mergedDividerConfig);

export const base = css`
    display: inline-block;
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

    border-collapse: collapse;

    border-width: 0;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};
`;

export const Tr = styled.tr<{ variant: TableProps['variant']; selected?: boolean }>`
    width: fit-content;
    background-color: ${({ selected }) => (selected ? 'var(--surface-transparent-accent)' : 'transparent')};

    &:nth-child(2n - 1) {
        background-color: ${({ variant, selected }) =>
            // eslint-disable-next-line no-nested-ternary
            selected ? 'var(--surface-transparent-accent)' : variant === 'border-all-bg' ? '#FFFFFF' : 'transparent'};
    }
`;

export const Thead = styled.thead<{ variant: TableProps['variant']; stickyHeader?: boolean }>`
    position: ${({ stickyHeader }) => (stickyHeader ? 'sticky' : 'static')};
    top: 0;
    background: ${({ stickyHeader }) => (stickyHeader ? '#F9F9F9' : 'transparent')};
    z-index: 1;
    box-shadow: ${({ variant }) =>
        // eslint-disable-next-line no-nested-ternary
        variant === 'no-border'
            ? 'none'
            : variant === 'border-header' || variant === 'border-rows'
            ? 'inset 0 -1px 0 0 #ddd'
            : 'inset 0 1px 0 0 #ddd, inset 0 -1px 0 0 #ddd'};

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
    border-top-width: 0;
    border-bottom-width: 0;
    border-style: solid;
    border-color: ${({ variant }) =>
        variant === 'border-all' || variant === 'border-all-bg' ? '#DDDDDD' : 'transparent'};

    &:hover {
        ${Resizer} {
            display: block;
        }
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    ${checkboxTokens.triggerSize}: var(${tokens.checkboxTriggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.checkboxTriggerBorderRadius});
    ${checkboxTokens.fillColor}: var(--text-accent);
    ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
    ${checkboxTokens.triggerBorderColor}: var(--text-secondary);

    ${checkboxTokens.labelFontFamily}: var(${tokens.checkboxLabelFontFamily});
    ${checkboxTokens.labelFontSize}: var(${tokens.checkboxLabelFontSize});
    ${checkboxTokens.labelFontStyle}: var(${tokens.checkboxLabelFontStyle});
    ${checkboxTokens.labelFontWeight}: var(${tokens.checkboxLabelFontWeight});
    ${checkboxTokens.labelLetterSpacing}: var(${tokens.checkboxLabelLetterSpacing});
    ${checkboxTokens.labelLineHeight}: var(${tokens.checkboxLabelLineHeight});

    ${checkboxTokens.contentTopOffset}: var(${tokens.checkboxContentTopOffset});
    ${checkboxTokens.contentLeftOffset}: var(${tokens.checkboxContentLeftOffset});
`;

export const StyledDivider = styled(Divider)`
    ${dividerTokens.baseSideSize}: 0.0625rem;
    ${dividerTokens.background}: var(--surface-transparent-tertiary);
    ${dividerTokens.borderRadius}: 0.0625rem;
`;

export const Button = styled(ButtonBase)`
    ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
`;

export const ButtonClear = styled(Button)`
    ${buttonTokens.buttonColor}: var(--text-primary);
    ${buttonTokens.buttonValueColor}: var(--text-secondary);
    ${buttonTokens.buttonBackgroundColor}: var(--surface-clear);
    ${buttonTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
    ${buttonTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);
`;

export const ButtonAccent = styled(Button)`
    ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
    ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
    ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
    ${buttonTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
    ${buttonTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
`;
