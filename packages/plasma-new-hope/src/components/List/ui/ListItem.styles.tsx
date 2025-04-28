import { styled } from '@linaria/react';

import { tokens } from '../List.tokens';
import { cellConfig, cellTokens } from '../../Cell';
import { component, mergeConfig } from '../../../engines';

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

export const CellItem = styled(Cell)`
    ${cellTokens.cellWidth}: 100%;

    ${cellTokens.cellPadding}: 0rem;
    ${cellTokens.cellPaddingLeftContent}: 0rem;
    ${cellTokens.cellPaddingContent}: 0rem;
    ${cellTokens.cellPaddingRightContent}: 0rem;

    ${cellTokens.cellTextboxGap}: 0rem;
    ${cellTokens.cellGap}: var(${tokens.listItemGap});
    ${cellTokens.cellColor}: var(${tokens.listItemColor});
    ${cellTokens.cellBackgroundColor}: transparent;
`;

export const StyledListItem = styled.li<{ disabled?: boolean }>`
    padding: calc(var(${tokens.listItemPaddingTop}) - var(${tokens.listItemVariantDifference}))
        var(${tokens.listItemPaddingRight})
        calc(var(${tokens.listItemPaddingBottom}) - var(${tokens.listItemVariantDifference}))
        var(${tokens.listItemPaddingLeft});
    border-radius: var(${tokens.listItemBorderRadius});
    background: var(${tokens.listItemBackground});
    border: var(${tokens.listItemBorderWidth}) solid var(${tokens.listItemBorderColor});

    box-sizing: border-box;
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

    &:hover {
        background: var(${tokens.listItemBackgroundHover});
        border-color: var(${tokens.listItemBorderColorHover});
        color: var(${tokens.listItemColorHover});
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: var(${tokens.listDisabledOpacity});
    }
`;
