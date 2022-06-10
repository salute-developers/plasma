import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { FocusProps, accent, tertiary, secondary, primary } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import { flexCenter, selected } from './mixins';
import type { DayProps, EventDay } from './types';

export interface CalendarDayItemProps extends DayProps, React.HTMLAttributes<HTMLDivElement> {
    day: number | string;
    year?: number;
    monthIndex?: number;
    eventList?: EventDay[];
    disabled?: boolean;
    isDouble?: boolean;
}

const StyledDay = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledDayRoot = styled.div<DayProps & FocusProps>`
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

    ${({ dayOfWeek }) =>
        dayOfWeek &&
        css`
            color: ${tertiary};
        `}

    ${({ isSelected, isCurrent, dayOfWeek, disabled }) =>
        !dayOfWeek &&
        !disabled &&
        selected({
            StyledItem: StyledDay,
            minWidth: 2.25,
            minHeight: 1.75,
            isSelected,
            isCurrent,
        })};

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.4;
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
export const CalendarDayItem: React.FC<CalendarDayItemProps> = memo(
    ({
        dayOfWeek,
        disabled,
        isCurrent,
        isSelected,
        isDayInCurrentMonth,
        isDouble,
        eventList = [],
        day,
        monthIndex,
        year,
        onClick,
    }) => {
        return (
            <StyledDayRoot
                tabIndex={isCurrent || !disabled ? 0 : -1}
                dayOfWeek={dayOfWeek}
                disabled={disabled}
                isCurrent={isCurrent}
                isSelected={isSelected}
                isDayInCurrentMonth={isDayInCurrentMonth}
                isDouble={isDouble}
                onClick={disabled ? undefined : onClick}
                data-day={day}
                data-month-index={monthIndex}
                data-year={year}
            >
                <StyledDay>{day}</StyledDay>
                <StyledEvents>
                    {[eventList[0], eventList[1], eventList[2]].map((event) => event && <StyledEvent {...event} />)}
                </StyledEvents>
            </StyledDayRoot>
        );
    },
);
