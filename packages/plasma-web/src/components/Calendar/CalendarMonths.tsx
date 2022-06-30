import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FocusProps } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import type { DateObject, MonthsProps } from './types';
import { useMonths } from './hooks';
import { flexCenter, selected } from './mixins';

export interface CalendarMonthsProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    onChangeMonth: (month: number) => void;
}

const StyledCalendarMonths = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(3, 5.5rem);
`;

const StyledMonth = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledMonthRoot = styled.div<MonthsProps & FocusProps>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    ${flexCenter};

    ${({ isSelected, isCurrent }) =>
        selected({
            StyledItem: StyledMonth,
            minWidth: 5.25,
            minHeight: 3.25,
            isSelected,
            isCurrent,
        })};
`;

/**
 * Компонент месяцев в календаре.
 */
export const CalendarMonths: React.FC<CalendarMonthsProps> = ({ date: currentDate, onChangeMonth }) => {
    const months = useMonths(currentDate);

    const handleOnChangeMonth = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { monthIndex } = event.currentTarget.dataset;
            onChangeMonth(Number(monthIndex));
        },
        [onChangeMonth],
    );

    return (
        <StyledCalendarMonths>
            {months.map(({ monthName, isSelected, isCurrent }, i) => (
                <StyledMonthRoot
                    tabIndex={0}
                    isCurrent={isCurrent}
                    isSelected={isSelected}
                    onClick={handleOnChangeMonth}
                    data-month-index={i}
                    key={`StyledMonth-${i}`}
                >
                    <StyledMonth>{monthName}</StyledMonth>
                </StyledMonthRoot>
            ))}
        </StyledCalendarMonths>
    );
};
