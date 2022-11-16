import React, { forwardRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { FocusProps, accent, tertiary, secondary, primary, surfaceLiquid02, addFocus } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import { flexCenter, selected } from './mixins';
import type { DayProps, EventDay } from './types';

export interface CalendarDayItemProps extends DayProps, React.HTMLAttributes<HTMLDivElement> {
    day: number | string;
    year?: number;
    monthIndex?: number;
    sideInRange?: 'left' | 'right';
    eventList?: EventDay[];
    isFocused?: boolean;
}

const StyledDay = styled.div<{ inRange?: boolean }>`
    border-radius: 0.375rem;
    align-items: center;

    ${flexCenter};

    ${({ inRange }) =>
        inRange &&
        css`
            &::before {
                content: '';
                z-index: -1;
                position: absolute;
                width: 2.5rem;
                height: 1.875rem;
                background: ${surfaceLiquid02};
            }
        `}
`;

const setSide = (side: 'left' | 'right', isCurrent?: boolean, isSelected?: boolean) => {
    switch (side) {
        case 'left':
            return `left: ${!isSelected && isCurrent ? '-1px' : '0'}`;
        case 'right':
            return `right: ${!isSelected && isCurrent ? '-1px' : '0'}`;
        default:
            return undefined;
    }
};

const StyledDayRoot = styled.div<DayProps & FocusProps & { $disabled?: boolean }>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-width: 2.5rem;
    min-height: 2rem;

    border-radius: 0.5rem;

    ${flexCenter};

    ${({ isDayInCurrentMonth }) => css`
        color: ${isDayInCurrentMonth ? primary : secondary};
    `}

    ${({ isDayInCurrentMonth, isDouble }) => css`
        visibility: ${!isDayInCurrentMonth && isDouble ? 'hidden' : 'visible'};
    `}

    ${({ sideInRange, isCurrent, isSelected }) =>
        sideInRange &&
        css`
            ${StyledDay}::before {
                content: '';
                z-index: -1;
                position: absolute;
                width: 0.313rem;
                height: 1.875rem;
                background: ${surfaceLiquid02};
                ${setSide(sideInRange, isCurrent, isSelected)};
            }
        `}

    ${({ dayOfWeek }) =>
        dayOfWeek &&
        css`
            color: ${tertiary};
        `}

    ${({ isSelected, isCurrent, isHovered, dayOfWeek, $disabled }) =>
        !dayOfWeek &&
        !$disabled &&
        selected({
            StyledItem: StyledDay,
            minWidth: 2.25,
            minHeight: 1.75,
            isSelected,
            isCurrent,
            isHovered,
        })};

    ${({ $disabled, isCurrent }) =>
        $disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.4;

            ${addFocus({
                outlineRadius: '0.563rem',
                outlineSize: '0.063rem',
                outlineOffset: isCurrent ? '0.125rem' : '0.063rem',
            })};
        `}
`;

const StyledEvents = styled.div`
    display: flex;

    position: absolute;
    bottom: 0.25rem;
`;

const StyledEvent = styled.div<{ color?: string }>`
    margin: 0 0.063rem;

    width: 0.188rem;
    height: 0.188rem;
    border-radius: 50%;

    ${({ color = accent }) => css`
        background-color: ${color};
    `}
`;

/**
 * Компонент дня в календаре.
 */
export const CalendarDayItem = memo(
    forwardRef<HTMLDivElement, CalendarDayItemProps>(
        (
            {
                isFocused,
                dayOfWeek,
                disabled,
                isCurrent,
                isSelected,
                isDayInCurrentMonth,
                isDouble,
                inRange,
                isHovered,
                sideInRange,
                eventList = [],
                day,
                monthIndex,
                year,
                onClick,
                onMouseOver,
                onFocus,
                ...rest
            },
            outerRef,
        ) => {
            return (
                <StyledDayRoot
                    ref={outerRef}
                    tabIndex={isFocused ? 0 : -1}
                    dayOfWeek={dayOfWeek}
                    isCurrent={isCurrent}
                    isSelected={isSelected}
                    isDayInCurrentMonth={isDayInCurrentMonth}
                    isDouble={isDouble}
                    isHovered={isHovered}
                    sideInRange={sideInRange}
                    onClick={disabled ? undefined : onClick}
                    onMouseOver={onMouseOver}
                    onFocus={onFocus}
                    data-day={day}
                    data-month-index={monthIndex}
                    data-year={year}
                    aria-selected={isSelected}
                    aria-disabled={disabled}
                    $disabled={disabled}
                    {...rest}
                >
                    <StyledDay inRange={inRange}>{day}</StyledDay>
                    <StyledEvents aria-hidden>
                        {[eventList[0], eventList[1], eventList[2]].map(
                            (event, i) => event && <StyledEvent key={`${event.date}-${i}`} {...event} />,
                        )}
                    </StyledEvents>
                </StyledDayRoot>
            );
        },
    ),
);
