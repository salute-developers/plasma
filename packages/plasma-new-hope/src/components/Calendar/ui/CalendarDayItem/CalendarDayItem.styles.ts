import { styled } from '@linaria/react';
import { FocusProps } from '@salutejs/plasma-core';

import type { DayProps } from '../../Calendar.types';
import { classes, tokens } from '../../Calendar.tokens';
import { addFocus } from '../../../../mixins';
import { addSelected, flexCenter } from '../../mixins';

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

export const StyledDay = styled.div<{ offset: number }>`
    border-radius: calc(var(${tokens.calendarDayItemBorderRadius}) - 0.125rem);

    ${String(flexCenter)};

    &.${String(classes.dayInRange)} {
        ${inRange()};
    }

    &.${String(classes.daySideInRange)} {
        ${sideInRange()};
    }

    &.${String(classes.daySideLeft)} {
        &:before {
            left: ${({ offset }) => `${offset}px`};
        }
    }

    &.${String(classes.daySideRight)} {
        &:before {
            right: ${({ offset }) => `${offset}px`};
        }
    }
`;

const disabledDay = () => `
    cursor: not-allowed;
    opacity: 0.4;
`;

const disabledCurrentDay = () => `
    ${disabledDay()};
`;

export const StyledDayRoot = styled.div<DayProps & FocusProps>`
    font-family: var(${tokens.calendarDayFontFamily});
    font-size: var(${tokens.calendarDayFontSize});
    font-style: var(${tokens.calendarDayFontStyle});
    font-weight: var(${tokens.calendarDayFontWeight});
    letter-spacing: var(${tokens.calendarDayFontLetterSpacing});
    line-height: var(${tokens.calendarDayFontLineHeight});

    position: relative;
    box-sizing: border-box;

    min-width: var(${tokens.calendarDayItemWidth});
    min-height: var(${tokens.calendarDayItemHeight});

    border-radius: var(${tokens.calendarDayItemBorderRadius});

    ${String(flexCenter)};

    color: ${({ isDayInCurrentMonth }) =>
        isDayInCurrentMonth
            ? `var(${tokens.calendarContentPrimaryColor})`
            : `var(${tokens.calendarContentSecondaryColor})`};
    visibility: ${({ isDayInCurrentMonth, isDouble }) => (!isDayInCurrentMonth && isDouble ? 'hidden' : 'visible')};

    &.${String(classes.selectableItem)} {
        ${addSelected({
            minWidth: `calc(var(${tokens.calendarDayItemWidth}) - 0.25rem)`,
            minHeight: `calc(var(${tokens.calendarDayItemHeight}) - 0.25rem)`,
            selectedFontWeight: `var(${tokens.calendarDaySelectedFontWeight})`,
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
            outlineRadius: `calc(var(${tokens.calendarDayItemBorderRadius}) + 0.125rem)`,
        })};

        &.${classes.currentItem} {
            ${addFocus({
                outlineSize: '0.063rem',
                outlineOffset: '-0.1875rem',
                outlineColor: `var(${tokens.calendarOutlineFocusColor})`,
                outlineRadius: `calc(var(${tokens.calendarDayItemBorderRadius}) - 0.125rem)`,
            })};
        }
    }

    &.${classes.dayOfWeek} {
        color: var(${tokens.calendarDayOfWeekColor});
    }

    &.${classes.dayDisabled} {
        ${disabledDay()};
    }

    &.${classes.dayDisabledCurrent} {
        ${disabledCurrentDay()};
    }

    &.${classes.currentItem} {
        & > .${classes.dayInRange}:before {
            width: calc(100% + 2px);
            height: 100%;
        }

        & > .${classes.daySideRight}:before {
            width: 100%;
            right: -1px;
            left: unset;
        }

        & > .${classes.daySideLeft}:before {
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
