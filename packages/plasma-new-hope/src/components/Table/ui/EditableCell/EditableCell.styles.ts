import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { TableProps } from '../../Table.types';
import { tableTokens as tokens, classes } from '../../Table.tokens';
import { iconButtonConfig, iconButtonTokens } from '../../../IconButton';

const mergedIndicatorConfig = mergeConfig(iconButtonConfig);
const IconButton = component(mergedIndicatorConfig);

export const Td = styled.td<{
    borderVariant: TableProps['borderVariant'];
    editingMode: boolean;
    selectionCell?: boolean;
    selected?: boolean;
    view?: TableProps['view'];
}>`
    position: relative;
    padding: ${({ selectionCell, editingMode }) =>
        // eslint-disable-next-line no-nested-ternary
        editingMode
            ? `var(${tokens.editableCellPadding})`
            : selectionCell
            ? `var(${tokens.checkboxCellPadding})`
            : `var(${tokens.cellPadding})`};
    height: var(${tokens.rowHeight});
    border-width: 0.0625rem;
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
    cursor: pointer;
    box-sizing: border-box;

    & .${classes.editIcon} {
        opacity: 0;
    }

    &:hover .${classes.editIcon} {
        opacity: 1;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const EditModeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(${tokens.editableCellPadding});
    height: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    flex: 1;
    padding: var(${tokens.editableCellInputPadding});
    background: var(${tokens.editableCellInputBackground});
    border: 0.0625rem solid var(${tokens.editableCellInputBorderColor});
    border-radius: var(${tokens.editableCellInputBorderRadius});
    box-sizing: border-box;
    gap: var(${tokens.editableCellIconGap});
`;

export const Input = styled.input`
    width: auto;
    border: none;
    padding: 0;
    background: transparent;
    outline: none;
    caret-color: var(--text-accent);

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;

export const IconDoneButton = styled(IconButton)`
    ${iconButtonTokens.iconButtonWidth}: var(${tokens.editableCellIconButtonWidth});
    ${iconButtonTokens.iconButtonHeight}: var(${tokens.editableCellIconButtonHeight});
`;

export const IconResetButton = styled(IconButton)`
    ${iconButtonTokens.iconButtonWidth}: auto;
    ${iconButtonTokens.iconButtonHeight}: auto;
`;
