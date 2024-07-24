import { styled } from '@linaria/react';
import { FocusProps } from '@salutejs/plasma-core';

import type { DateStructureProps } from '../../Calendar.types';
import { classes, innerTokens, tokens } from '../../Calendar.tokens';
import { addFocus } from '../../../../mixins';
import { addActive, addSelected, flexCenter } from '../../mixins';

const inRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 100%;
        height: calc(100% - 0.125rem);
        background: var(${tokens.calendarRangeBackground});
    }
`;

const sideInRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 0.75rem;
        height: calc(100% - 0.125rem);
        background: var(${tokens.calendarRangeBackground});
    }
`;

export const StyledItem = styled.div<{ offset: number }>`
    border-radius: calc(var(${innerTokens.dateStructureBorderRadius}) - 0.125rem);

    ${String(flexCenter)};

    &.${String(classes.inRange)} {
        ${inRange()};
    }

    &.${String(classes.sideInRange)} {
        ${sideInRange()};
    }

    &.${String(classes.sideLeft)} {
        &:before {
            left: ${({ offset }) => `${offset}px`};
        }
    }

    &.${String(classes.sideRight)} {
        &:before {
            right: ${({ offset }) => `${offset}px`};
        }
    }
`;

const disabledItem = () => `
    cursor: not-allowed;
    opacity: 0.4;
`;

const disabledCurrentItem = () => `
    ${disabledItem()};
`;

export const StyledItemRoot = styled.div<DateStructureProps & FocusProps>`
    font-family: var(${innerTokens.dateStructureFontFamily});
    font-size: var(${innerTokens.dateStructureFontSize});
    font-style: var(${innerTokens.dateStructureFontStyle});
    font-weight: var(${innerTokens.dateStructureFontWeight});
    letter-spacing: var(${innerTokens.dateStructureFontLetterSpacing});
    line-height: var(${innerTokens.dateStructureFontLineHeight});

    position: relative;
    box-sizing: border-box;

    min-width: var(${innerTokens.dateStructureWidth});
    min-height: var(${innerTokens.dateStructureHeight});

    border-radius: var(${innerTokens.dateStructureBorderRadius});

    ${String(flexCenter)};

    color: ${({ isDayInCurrentMonth }) =>
        isDayInCurrentMonth
            ? `var(${tokens.calendarContentPrimaryColor})`
            : `var(${tokens.calendarContentSecondaryColor})`};

    &.${String(classes.selectableItem)} {
        ${addSelected({
            minWidth: `calc(var(${innerTokens.dateStructureWidth}) - 0.25rem)`,
            minHeight: `calc(var(${innerTokens.dateStructureHeight}) - 0.25rem)`,
            selectedFontWeight: `var(${innerTokens.dateStructureSelectedFontWeight})`,
            selectedBackground: `var(${tokens.calendarSelectedItemBackground})`,
            selectedColor: `var(${tokens.calendarSelectedItemColor})`,
            selectableBackgroundHover: `var(${tokens.calendarSelectableItemBackgroundHover})`,
            currentBorderColor: `var(${tokens.calendarCurrentItemBorderColor})`,
            activeBackground: `var(${tokens.calendarActiveItemBackground})`,
            activeColor: `var(${tokens.calendarActiveItemColor})`,
        })};

        ${addFocus({
            outlineSize: '0.063rem',
            outlineOffset: '-0.125rem',
            outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
            outlineRadius: `calc(var(${innerTokens.dateStructureBorderRadius}) + 0.125rem)`,
        })};

        &.${classes.currentItem} {
            ${addFocus({
                outlineSize: '0.063rem',
                outlineOffset: '-0.1875rem',
                outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
                outlineRadius: `calc(var(${innerTokens.dateStructureBorderRadius}) + 0.125rem)`,
            })};
        }
    }

    &.${classes.dayInCurrentMonth}:not(.${classes.disabled}) {
        ${addActive({
            activeBackground: `var(${tokens.calendarActiveItemBackground})`,
            activeColor: `var(${tokens.calendarActiveItemColor})`,
            activeFontWeight: `var(${innerTokens.dateStructureSelectedFontWeight})`,
        })};
    }

    &.${classes.dayOfWeek} {
        color: var(${tokens.calendarDayOfWeekColor});
    }

    &.${classes.disabled} {
        ${disabledItem()};
    }

    &.${classes.disabledCurrent} {
        ${disabledCurrentItem()};
    }

    &.${classes.currentItem} {
        & > .${classes.inRange}:before {
            width: calc(100% + 2px);
            height: 100%;
        }

        & > .${classes.sideRight}:before {
            width: 100%;
            right: -1px;
            left: unset;
        }

        & > .${classes.sideLeft}:before {
            width: 100%;
            left: -1px;
            right: unset;
        }
    }
`;

export const StyledEvents = styled.div`
    display: flex;

    position: absolute;
    bottom: 0.25rem;
`;

export const StyledEvent = styled.div<{ color?: string }>`
    margin: 0 0.063rem;

    width: 0.188rem;
    height: 0.188rem;
    border-radius: 50%;

    background-color: ${({ color = 'var(--plasma-colors-accent)' }) => color};
`;
