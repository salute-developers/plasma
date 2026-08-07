import styled from 'styled-components';

import { classes, tokens } from '../tokens';

export const StyledTabsContent = styled.div`
    position: relative;

    > :not(.${classes.tabsSelection}) {
        z-index: 1;
    }
`;

export const StyledSelection = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;

    background-color: var(${tokens.itemSelectedBackgroundColor}, transparent);
    border-radius: var(${tokens.itemBorderRadius}, 0);
    opacity: 0;

    &::after {
        content: '';
        position: absolute;
        background-color: var(${tokens.itemSelectedDividerColor}, transparent);
        border-radius: 0.063rem;
    }

    &.${classes.tabsSelectionHorizontal}::after {
        right: 0;
        bottom: 0;
        left: 0;
        height: var(${tokens.itemSelectedDividerHeight}, 0);
    }

    &.${classes.tabsSelectionVertical}::after {
        top: 0;
        bottom: 0;
        left: 0;
        width: var(${tokens.itemSelectedDividerWidth}, 0);
    }

    &.${classes.tabsSelectionVertical}.${classes.dividerAlignRight}::after {
        right: 0;
        left: auto;
    }

    .${classes.selectedTabsItem}:not([disabled]):hover ~ & {
        background-color: var(
            ${tokens.itemSelectedBackgroundColorHover},
            var(${tokens.itemSelectedBackgroundColor}, transparent)
        );

        &::after {
            background-color: var(
                ${tokens.itemSelectedDividerColorHover},
                var(${tokens.itemSelectedDividerColor}, transparent)
            );
        }
    }
`;
