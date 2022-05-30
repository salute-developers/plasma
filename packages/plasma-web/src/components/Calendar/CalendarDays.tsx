import React, { useCallback } from 'react';
import styled from 'styled-components';

import type { DateItem, DateObject } from './types';
import { SHORT_DAY_NAMES } from './utils';
import { useDays } from './hooks';
import { flexCenter } from './mixins';
import { CalendarDayItem } from './CalendarDayItem';

export interface CalendarDaysProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: Date;
    onChangeDay: (date: DateObject) => void;
}

const StyledFlex = styled.div`
    ${flexCenter};
`;

const StyledCalendarDays = styled.div`
    padding: 0.5rem 1rem 1.5rem;
    box-sizing: border-box;
`;

/**
 * Компонент дней в календаре.
 */
export const CalendarDays: React.FC<CalendarDaysProps> = ({ date: currentDate, value, onChangeDay }) => {
    const days = useDays(currentDate, value);

    const handleOnChangeDay = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { day, monthIndex, year } = event.currentTarget.dataset;

            if (!day || !monthIndex || !year) {
                return;
            }

            onChangeDay({
                day: Number(day),
                monthIndex: Number(monthIndex),
                year: Number(year),
            });
        },
        [onChangeDay],
    );

    return (
        <StyledCalendarDays>
            <StyledFlex>
                {SHORT_DAY_NAMES.map((name) => (
                    <CalendarDayItem key={name} dayOfWeek day={name} />
                ))}
            </StyledFlex>
            {days.map((day: DateItem[], i) => (
                <StyledFlex key={i}>
                    {day.map(({ date, isSelected, isCurrent, isDayInCurrentMonth }: DateItem, j) => (
                        <CalendarDayItem
                            day={date.day}
                            year={date.year}
                            monthIndex={date.monthIndex}
                            isSelected={isSelected}
                            isCurrent={isCurrent}
                            isDayInCurrentMonth={isDayInCurrentMonth}
                            onClick={handleOnChangeDay}
                            key={`StyledDay-${j}`}
                        />
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarDays>
    );
};
