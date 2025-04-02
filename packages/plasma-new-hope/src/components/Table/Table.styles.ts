import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { checkboxConfig, checkboxTokens } from '../Checkbox';
import { dividerConfig, dividerTokens } from '../Divider';
import { buttonConfig, buttonTokens } from '../Button';
import { linkButtonConfig, linkButtonTokens } from '../LinkButton';

import { TableProps } from './Table.types';
import { tableTokens as tokens } from './Table.tokens';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

const mergedButtonConfig = mergeConfig(buttonConfig);
const ButtonBase = component(mergedButtonConfig);

const mergedDividerConfig = mergeConfig(dividerConfig);
const Divider = component(mergedDividerConfig);

const mergedLinkButtonConfig = mergeConfig(linkButtonConfig);
const LinkButtonBase = component(mergedLinkButtonConfig);

export const base = css`
    display: inline-block;
    overflow-y: auto;
`;

export const Table = styled.table<{ borderVariant: TableProps['borderVariant']; stickyHeader?: boolean }>`
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
    border-color: ${({ borderVariant }) => (borderVariant === 'all' ? `var(${tokens.borderColor})` : 'transparent')};
`;

export const Tr = styled.tr<{ selected?: boolean }>`
    width: fit-content;
    background-color: ${({ selected }) => (selected ? 'var(--surface-transparent-accent)' : 'transparent')};
`;

export const Thead = styled.thead<{
    view: TableProps['view'];
    borderVariant: TableProps['borderVariant'];
    stickyHeader?: boolean;
}>`
    position: ${({ stickyHeader }) => (stickyHeader ? 'sticky' : 'static')};
    top: 0;
    background: ${({ stickyHeader }) => (stickyHeader ? 'var(--background-primary)' : 'transparent')};
    z-index: 1;
    box-shadow: ${({ view, borderVariant }) =>
        // eslint-disable-next-line no-nested-ternary
        view === 'clear'
            ? 'none'
            : borderVariant === 'header' || borderVariant === 'rows'
            ? `inset 0 -1px 0 0 var(${tokens.borderColor})`
            : `inset 0 1px 0 0 var(${tokens.borderColor}), inset 0 -1px 0 0 var(${tokens.borderColor})`};

    ${Tr} {
        background: transparent;
    }
`;

export const Tbody = styled.tbody``;

export const Resizer = styled.div<{ isResizing: boolean }>`
    display: ${({ isResizing }) => (isResizing ? 'block' : 'none')};
    position: absolute;
    z-index: 1;
    top: -0.0625rem;
    bottom: 0;
    right: -0.125rem;
    width: 0.1875rem;
    background: var(--outline-accent);
    cursor: col-resize;
    user-select: none;
    touch-action: none;
`;

export const Th = styled.th<{ borderVariant: TableProps['borderVariant']; selectionCell?: boolean }>`
    padding: ${({ selectionCell }) =>
        selectionCell ? `var(${tokens.checkboxCellPadding})` : `var(${tokens.cellPadding})`};
    position: relative;
    font-weight: 600;
    text-align: left;
    height: var(${tokens.headerRowHeight});
    background-color: transparent;
    color: inherit;

    border-width: 0.0625rem;
    border-top-width: 0;
    border-bottom-width: 0;
    border-style: solid;
    border-color: ${({ borderVariant }) => (borderVariant === 'all' ? `var(${tokens.borderColor})` : 'transparent')};

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
`;

export const StyledDivider = styled(Divider)`
    ${dividerTokens.baseSideSize}: 0.0625rem;
    ${dividerTokens.background}: var(--surface-transparent-tertiary);
    ${dividerTokens.borderRadius}: 0.0625rem;
`;

export const Button = styled(ButtonBase)`
    ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
    ${buttonTokens.buttonDisabledOpacity}: 0.4;

    ${buttonTokens.buttonFontFamily}: var(${tokens.buttonFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.buttonFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.buttonFontStyle});
    ${buttonTokens.buttonFontWeight}: var(${tokens.buttonFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.buttonLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.buttonLineHeight});
`;

export const ButtonAccent = styled(Button)`
    ${buttonTokens.buttonColor}: var(--on-dark-text-primary);
    ${buttonTokens.buttonValueColor}: var(--on-dark-text-secondary);
    ${buttonTokens.buttonBackgroundColor}: var(--surface-accent);
    ${buttonTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
    ${buttonTokens.buttonBackgroundColorActive}: var(--surface-accent-active);
`;

export const LinkButton = styled(LinkButtonBase)`
    ${linkButtonTokens.linkButtonColor}: var(--text-primary);
    ${linkButtonTokens.linkButtonBackgroundColor}: var(--surface-transparent-clear);
    ${linkButtonTokens.linkButtonColorHover}: var(--text-primary-hover);
    ${linkButtonTokens.linkButtonColorActive}: var(--text-primary-active);
    ${linkButtonTokens.linkButtonFocusColor}: var(--surface-accent);

    ${linkButtonTokens.linkButtonFontFamily}: var(${tokens.linkButtonFontFamily});
    ${linkButtonTokens.linkButtonFontSize}: var(${tokens.linkButtonFontSize});
    ${linkButtonTokens.linkButtonFontStyle}: var(${tokens.linkButtonFontStyle});
    ${linkButtonTokens.linkButtonFontWeight}: var(${tokens.linkButtonFontWeight});
    ${linkButtonTokens.linkButtonLetterSpacing}: var(${tokens.linkButtonLetterSpacing});
    ${linkButtonTokens.linkButtonLineHeight}: var(${tokens.linkButtonLineHeight});
`;
