import { styled } from '@linaria/react';
import { FocusProps } from '@salutejs/plasma-core';

import type { DayProps } from '../../Calendar.types';
import { addFocus, flexCenter, selectedMixin } from '../../mixins';
import { classes, tokens } from '../../Calendar.tokens';

const inRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 2.5rem;
        height: 1.875rem;
        background: var(${tokens.calendarRangeBackground});
    }
`;

const sideInRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 0.313rem;
        height: 1.875rem;
        background: var(${tokens.calendarRangeBackground});
    }
`;

export const StyledDay = styled.div<{ offset: number }>`
    border-radius: 0.375rem;

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

const dayOfWeek = () => `
    color: var(--plasma-colors-tertiary);
`;

const disabledDay = () => `
    --calendar_private-add-focus-outline-offset: -0.063rem;
    --calendar_private-add-focus-outline-size: 0.063rem;
    --calendar_private-add-focus-outline-radius: 0.563rem;
    --calendar_private-add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --calendar_private-add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});

    cursor: not-allowed;
    opacity: 0.4;

    ${String(addFocus)};
`;

const disabledCurrentDay = () => `
    ${disabledDay()};
    --calendar_private-add-focus-outline-offset: 0.125rem;
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

    min-width: 2.5rem;
    min-height: 2rem;

    border-radius: var(${tokens.calendarItemBorderRadius});

    ${String(flexCenter)};

    color: ${({ isDayInCurrentMonth }) =>
        isDayInCurrentMonth
            ? `var(${tokens.calendarContentPrimaryColor})`
            : `var(${tokens.calendarContentSecondaryColor})`};
    visibility: ${({ isDayInCurrentMonth, isDouble }) => (!isDayInCurrentMonth && isDouble ? 'hidden' : 'visible')};

    &.${String(classes.selectableItem)} {
        --calendar_private-add-focus-outline-offset: -0.063rem;
        --calendar_private-add-focus-outline-size: 0.063rem;
        --calendar_private-add-focus-outline-radius: 0.563rem;
        --calendar_private-add-focus-outline-transition: box-shadow 0.2s ease-in-out;
        --calendar_private-add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});
        --calendar_private-selected-min-width: 2.25rem;
        --calendar_private-selected-min-height: 1.75rem;
        --calendar_private-selected-background: var(${tokens.calendarSelectedItemBackground});
        --calendar_private-selected-color: var(${tokens.calendarSelectedItemColor});
        --calendar_private-selectable-background-hover: var(${tokens.calendarSelectableItemBackgroundHover});
        --calendar_private-current-border-color: var(${tokens.calendarCurrentItemBorderColor});
        --calendar_private-current-background-hover: var(${tokens.calendarCurrentItemBackgroundHover});
        --calendar_private-current-color-hover: var(${tokens.calendarCurrentItemColorHover});
        --calendar_private-current-child-background-hover: var(${tokens.calendarCurrentItemChildBackgroundHover});
        --calendar_private-active-background: var(${tokens.calendarActiveItemBackground});
        --calendar_private-active-color: var(${tokens.calendarActiveItemColor});
        --calendar_private-hovered-background: var(${tokens.calendarHoveredItemBackground});
        --calendar_private-hovered-color: var(${tokens.calendarHoveredItemColor});

        ${String(addFocus)};

        ${String(selectedMixin)};
    }

    &.${String(classes.dayOfWeek)} {
        ${dayOfWeek()};
    }

    &.${String(classes.dayDisabled)} {
        ${disabledDay()};
    }

    &.${String(classes.dayDisabledCurrent)} {
        ${disabledCurrentDay()};
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
