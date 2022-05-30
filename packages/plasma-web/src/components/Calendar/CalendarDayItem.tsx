import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { FocusProps, tertiary } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import { flexCenter, selected } from './mixins';
import type { DayProps } from './types';

export interface CalendarDayItemProps extends DayProps, React.HTMLAttributes<HTMLDivElement> {
    day: number | string;
    year?: number;
    monthIndex?: number;
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

    ${({ dayOfWeek }) =>
        dayOfWeek &&
        css`
            color: ${tertiary};
        `}

    ${({ isDayInCurrentMonth }) => css`
        opacity: ${isDayInCurrentMonth ? '1' : '0.4'};
    `}

    ${({ isSelected, isCurrent, dayOfWeek }) =>
        !dayOfWeek &&
        selected({
            StyledItem: StyledDay,
            minWidth: 2.25,
            minHeight: 1.75,
            isSelected,
            isCurrent,
        })};
`;

/**
 * Компонент дня в календаре.
 */
export const CalendarDayItem: React.FC<CalendarDayItemProps> = memo(
    ({ dayOfWeek, isCurrent, isSelected, isDayInCurrentMonth, onClick, day, monthIndex, year }) => {
        return (
            <StyledDayRoot
                tabIndex={isCurrent ? 0 : -1}
                dayOfWeek={dayOfWeek}
                isCurrent={isCurrent}
                isSelected={isSelected}
                isDayInCurrentMonth={isDayInCurrentMonth}
                onClick={onClick}
                data-day={day}
                data-month-index={monthIndex}
                data-year={year}
            >
                <StyledDay>{day}</StyledDay>
            </StyledDayRoot>
        );
    },
);
