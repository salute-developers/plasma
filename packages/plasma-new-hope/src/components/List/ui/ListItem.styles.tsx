import styled from 'styled-components';
import { addFocus } from 'src/mixins';

import { tokens, classes } from '../List.tokens';
import { cellConfig, cellTokens } from '../../Cell';
import { CellContentWrapper } from '../../Cell/Cell.styles';
import { component, mergeConfig } from '../../../engines';

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

export const CellItem = styled(Cell)`
    ${cellTokens.cellWidth}: 100%;

    ${cellTokens.cellPadding}: 0rem;
    ${cellTokens.cellPaddingLeftContent}: 0rem;
    ${cellTokens.cellPaddingContent}: var(${tokens.listItemContentPadding});
    ${cellTokens.cellPaddingRightContent}: 0rem;

    ${cellTokens.cellTextboxGap}: 0rem;
    ${cellTokens.cellGap}: var(${tokens.listItemGap});
    ${cellTokens.cellColor}: var(${tokens.listItemColor});
    ${cellTokens.cellBackgroundColor}: transparent;
`;

export const StyledListItem = styled.li`
    padding: var(${tokens.listItemPaddingTop}) var(${tokens.listItemPaddingRight}) var(${tokens.listItemPaddingBottom})
        var(${tokens.listItemPaddingLeft});
    border-radius: var(${tokens.listItemBorderRadius});
    background: transparent;
    border: var(${tokens.listItemBorderWidth}) solid var(${tokens.listItemBorderColor});

    outline: none;
    position: relative;

    box-sizing: border-box;
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(${tokens.listItemColor});
    font-size: var(${tokens.listItemFontSize});
    font-weight: var(${tokens.listItemFontWeight});
    font-family: var(${tokens.listItemFontFamily});
    font-style: var(${tokens.listItemFontStyle});
    line-height: var(${tokens.listItemLineHeight});
    letter-spacing: var(${tokens.listItemLetterSpacing});

    &.${classes.hasItemBackground} {
        background: var(${tokens.listItemBackground});
    }

    &.${classes.hasItemDivider} ${CellContentWrapper} {
        position: relative;
    }

    /* stylelint-disable */
    &.${classes.hasItemDivider}:not(:last-child) {
        margin-bottom: calc(
            var(${tokens.listItemDividerMarginTop}, 0rem) + var(${tokens.listItemDividerHeight}) +
                var(${tokens.listItemDividerMarginBottom}, 0rem)
        );
    }

    &.${classes.hasItemDivider}:not(:last-child) ${CellContentWrapper}::after {
        content: '';
        position: absolute;
        pointer-events: none;
        left: 0;
        right: 0;
        bottom: calc(
            -1 * (var(${tokens.listItemPaddingBottom}) + var(${tokens.listItemDividerMarginTop}, 0rem) +
                        var(${tokens.listItemDividerHeight}))
        );
        height: var(${tokens.listItemDividerHeight});
        background: var(${tokens.listItemDividerColor});
    }
    /* stylelint-enable */

    &:not(.${classes.disabledListItem}):hover {
        background: var(${tokens.listItemBackgroundHover});
        border-color: var(${tokens.listItemBorderColorHover});
        color: var(${tokens.listItemColorHover});
    }

    &.${classes.disabledListItem} {
        cursor: not-allowed;
        opacity: var(${tokens.listDisabledOpacity});
    }

    ${addFocus({
        outlineOffset: '0.063rem',
        outlineSize: '0.063rem',
        outlineColor: `var(${tokens.listItemFocusColor})`,
        outlineRadius: `var(${tokens.listItemBorderRadius})`,
    })};
`;
