import { styled } from '@linaria/react';

import { classes, tokens, constants } from '../../Dropdown.tokens';
import { addFocus } from '../../../../mixins';
import { DropdownProps } from '../../Dropdown.types';
import { cellConfig, cellTokens } from '../../../Cell';
import { component, mergeConfig } from '../../../../engines';

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

export const CellWrapper = styled.div`
    ${cellTokens.cellTitleColor}: var(${constants.cellTitleColor});
    ${cellTokens.cellBackgroundColor}: var(${constants.cellBackgroundColor});
    ${cellTokens.cellPadding}: var(${tokens.cellPadding});
    ${cellTokens.cellPaddingLeftContent}: var(${tokens.cellPaddingLeftContent});
    ${cellTokens.cellPaddingContent}: var(${tokens.cellPaddingContent});
    ${cellTokens.cellPaddingRightContent}: var(${tokens.cellPaddingRightContent});
    ${cellTokens.cellTextboxGap}: var(${tokens.cellTextboxGap});
    ${cellTokens.cellGap}: var(${tokens.cellGap});
    ${cellTokens.cellTitleFontFamily}: var(${tokens.cellTitleFontFamily});
    ${cellTokens.cellTitleFontSize}: var(${tokens.cellTitleFontSize});
    ${cellTokens.cellTitleFontStyle}: var(${tokens.cellTitleFontStyle});
    ${cellTokens.cellTitleFontWeight}: var(${tokens.cellTitleFontWeight});
    ${cellTokens.cellTitleLetterSpacing}: var(${tokens.cellTitleLetterSpacing});
    ${cellTokens.cellTitleLineHeight}: var(${tokens.cellTitleLineHeight});
    width: 100%;
`;

export const StyledCell = styled(Cell)``;

export const DisclosureIconWrapper = styled.div`
    line-height: 0;
    color: var(${constants.disclosureIconColor});
`;

export const Divider = styled.div<{ variant: DropdownProps['variant'] }>`
    height: 1px;
    margin-top: ${({ variant }) =>
        `var(${variant === 'tight' ? tokens.dividerMarginTopTight : tokens.dividerMarginTop})`};
    margin-right: var(${tokens.dividerMarginRight});
    margin-bottom: ${({ variant }) =>
        `var(${variant === 'tight' ? tokens.dividerMarginBottomTight : tokens.dividerMarginBottom})`};
    margin-left: var(${tokens.dividerMarginLeft});
    background: var(${tokens.dividerColor});
`;

export const Wrapper = styled.li<{ variant: DropdownProps['variant'] }>`
    display: flex;
    align-items: center;
    min-height: var(${tokens.itemHeight});
    margin: 0;
    box-sizing: content-box;
    padding: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTight : tokens.itemPadding})`};
    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});
    background-color: var(${constants.itemBackground});
    border-radius: var(${tokens.borderRadius});
    user-select: none;
    border-right: 0.125rem solid transparent;
    border-left: 0.125rem solid transparent;
    background-clip: padding-box;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background-color: var(${constants.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background-color: var(${constants.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: ${constants.opacity};
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.0625rem',
        outlineOffset: '0',
        outlineColor: `var(${constants.focusColor})`,
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 0.0625rem var(${constants.focusColor});
            }
        `,
    })};
`;
