import { styled } from '@linaria/react';
import { FocusProps } from '@salutejs/plasma-core';

import type { DayProps } from '../../shared/types';
import { flexCenter, selectedMixin } from '../../shared/mixins';
import { addFocus, bodyS } from '../../../../mixins';

const inRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 2.5rem;
        height: 1.875rem;
        background: var(--plasma-colors-surface-liquid02);
    }
`;

const sideInRange = () => `
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        width: 0.313rem;
        height: 1.875rem;
        background: var(--plasma-colors-surface-liquid02);
    }
`;

export const StyledDay = styled.div<{ offset: number }>`
    border-radius: 0.375rem;
    align-items: center;

    ${flexCenter()};

    &.left {
        &:before {
            left: ${({ offset }) => `${offset}px`};
        }
    }

    &.right {
        &:before {
            right: ${({ offset }) => `${offset}px`};
        }
    }

    &.side-in-range {
        ${sideInRange()};
    }

    &.in-range {
        ${inRange()};
    }
`;

const dayOfWeek = () => `
    color: var(--plasma-colors-tertiary);
`;

const selectable = () => `
    --add-focus-outline-offset: 0.063rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(--plasma-colors-button-focused);
    --selected-min-width: 2.25rem;
    --selected-min-height: 1.75rem;
    ${selectedMixin()};
    ${addFocus()};
`;

const disabledDay = () => `
    --add-focus-outline-offset: 0.063rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(--plasma-colors-button-focused);

    cursor: not-allowed;
    opacity: 0.4;

    ${addFocus()};
`;

const disabledCurrentDay = () => `
    --add-focus-outline-offset: 0.125rem;
`;

export const StyledDayRoot = styled.div<DayProps & FocusProps>`
    ${bodyS()};

    position: relative;
    box-sizing: border-box;

    min-width: 2.5rem;
    min-height: 2rem;

    border-radius: 0.5rem;

    ${flexCenter()};

    color: ${({ isDayInCurrentMonth }) =>
        isDayInCurrentMonth ? 'var(--plasma-colors-primary)' : 'var(--plasma-colors-secondary)'};
    visibility: ${({ isDayInCurrentMonth, isDouble }) => (!isDayInCurrentMonth && isDouble ? 'hidden' : 'visible')};

    ${selectable()};

    &.day-of-week {
        ${dayOfWeek()};
    }

    &.disabled {
        ${disabledDay()};
    }

    &.disabled-current {
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
