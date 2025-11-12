import { styled } from '@linaria/react';
import { addFocus, applyEllipsis } from 'src/mixins';
import { cellTokens, cellConfig } from 'src/components/Cell';
import { component, mergeConfig } from 'src/engines';
import { CSSProperties } from 'react';

import { classes, tokens } from '../../DateTimePicker.tokens';

const mergedCellConfig = mergeConfig(cellConfig);
const Cell = component(mergedCellConfig);

export const ShortcutsWrapper = styled.div<{
    innerHeight?: string | number;
    innerWidth?: string | number;
    dateShortcutsPlacement?: 'left' | 'right';
}>`
    order: ${({ dateShortcutsPlacement }) => (dateShortcutsPlacement === 'left' ? 'unset' : '999')};

    display: flex;
    flex-direction: ${({ dateShortcutsPlacement }) => (dateShortcutsPlacement === 'left' ? 'row-reverse' : 'row')};
    gap: var(${tokens.popoverGap});
    flex-shrink: ${({ innerWidth }) => (innerWidth && innerWidth !== '0' ? '2' : '0')};
    overflow-y: hidden;

    height: ${({ innerHeight }) =>
        innerHeight && innerHeight !== '0'
            ? `calc(${innerHeight} - var(${tokens.popoverVerticalPadding}))`
            : `var(${tokens.calendarHeight})`};
`;

export const ShortcutList = styled.ul<{ width?: CSSProperties['width'] }>`
    width: ${({ width }) => width || 'fit-content'};

    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const ShortcutItem = styled.li`
    padding: var(${tokens.shortcutPadding});
    border-radius: var(${tokens.shortcutBorderRadius});

    &:hover:not(.${classes.shortcutItemDisabled}) {
        cursor: pointer;
        background: var(${tokens.shortcutBackgroundHover});
    }

    &.${classes.shortcutItemDisabled} {
        opacity: ${tokens.disabledOpacity};
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0.063rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: `var(${tokens.shortcutBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
                &.focus-visible:focus,
                &[data-focus-visible-added] {
                    &::before {
                        z-index: 1;
                        outline: none;
                        box-shadow: 0 0 0 0.063rem var(${tokens.outlineFocusColor});
                    }
                }
            `,
    })};
`;

export const StyledCell = styled(Cell)`
    ${cellTokens.cellTitleColor}: var(${tokens.shortcutColor});
    ${cellTokens.cellPadding}: var(${tokens.shortcutPadding});
    ${cellTokens.cellPaddingContent}: var(${tokens.shortcutPaddingContent});
    ${cellTokens.cellPaddingLeftContent}: var(${tokens.shortcutPaddingLeftContent});
    ${cellTokens.cellPaddingRightContent}: var(${tokens.shortcutPaddingRightContent});
    ${cellTokens.cellGap}: var(${tokens.shortcutGap});
`;

export const ShortcutTitleWrapper = styled.div`
    display: grid;
`;

export const ShortcutTitle = styled.span`
    font-family: var(${tokens.shortcutFontFamily});
    font-size: var(${tokens.shortcutFontSize});
    font-style: var(${tokens.shortcutFontStyle});
    font-weight: var(${tokens.shortcutFontWeight});
    letter-spacing: var(${tokens.shortcutLetterSpacing});
    line-height: var(${tokens.shortcutLineHeight});

    ${applyEllipsis()}
`;
