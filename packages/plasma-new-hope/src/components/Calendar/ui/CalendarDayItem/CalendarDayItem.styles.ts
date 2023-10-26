import { styled } from '@linaria/react';
import { FocusProps } from '@salutejs/plasma-core';

import type { DayProps } from '../../shared/types';
import { flexCenter, selectedMixin } from '../../shared/mixins';
import { addFocus, bodyS } from '../../../../mixins';
import { classes, tokens } from '../../shared/tokens';

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

const selectable = () => `
    &.${String(classes.selectableItem)} {
        --add-focus-outline-offset: -0.063rem;
        --add-focus-outline-size: 0.063rem;
        --add-focus-outline-radius: 0.563rem;
        --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
        --add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});
        --selected-min-width: 2.25rem;
        --selected-min-height: 1.75rem;
        --selected-background: var(${tokens.calendarSelectedItemBackground});
        --selected-color: var(${tokens.calendarSelectedItemColor});
        --selectable-background-hover: var(${tokens.calendarSelectableItemBackgroundHover});
        --current-border-color: var(${tokens.calendarCurrentItemBorderColor});
        --current-background-hover: var(${tokens.calendarCurrentItemBackgroundHover});
        --current-color-hover: var(${tokens.calendarCurrentItemColorHover});
        --current-child-background-hover: var(${tokens.calendarCurrentItemChildBackgroundHover});
        --active-background: var(${tokens.calendarActiveItemBackground});
        --active-color: var(${tokens.calendarActiveItemColor});
        --hovered-background: var(${tokens.calendarHoveredItemBackground});
        --hovered-color: var(${tokens.calendarHoveredItemColor});

        ${String(selectedMixin)};
        ${addFocus()};
    }
`;

const disabledDay = () => `
    --add-focus-outline-offset: -0.063rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(${tokens.calendarOutlineFocusColor});

    cursor: not-allowed;
    opacity: 0.4;

    ${addFocus()};
`;

const disabledCurrentDay = () => `
    ${disabledDay()};
    --add-focus-outline-offset: 0.125rem;
`;

export const StyledDayRoot = styled.div<DayProps & FocusProps>`
    ${String(bodyS)};

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

    ${selectable()};

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
