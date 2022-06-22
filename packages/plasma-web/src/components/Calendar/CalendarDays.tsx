import React, { useCallback } from 'react';
import styled from 'styled-components';

import type { DateItem, DateObject, DisabledDay, EventDay } from './types';
import { canSelectDate, getInRange, getSideInRange, isSameDay, isSelectProcess, SHORT_DAY_NAMES } from './utils';
import { useDays } from './hooks';
import { flexCenter } from './mixins';
import { CalendarDayItem } from './CalendarDayItem';

export interface CalendarDaysProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: Date | [Date, Date?];
    min?: Date;
    max?: Date;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    isDouble?: boolean;
    hoveredDay?: DateObject;
    onHoverDay?: (date?: DateObject) => void;
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
export const CalendarDays: React.FC<CalendarDaysProps> = ({
    date: currentDate,
    value,
    eventList,
    disabledList,
    min,
    max,
    isDouble,
    hoveredDay,
    onChangeDay,
    onHoverDay,
}) => {
    const days = useDays(currentDate, value, eventList, disabledList, min, max);

    const getSelecteDate = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { day, monthIndex, year } = event.currentTarget.dataset;

            const selectedDate = {
                day: Number(day),
                monthIndex: Number(monthIndex),
                year: Number(year),
            };

            if (!canSelectDate(selectedDate, value, disabledList)) {
                return;
            }

            return selectedDate;
        },
        [disabledList, value],
    );

    const handleOnChangeDay = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelecteDate(event);

            if (!selectedDate) {
                return;
            }

            onChangeDay(selectedDate);

            if (isSelectProcess(value)) {
                onHoverDay?.(undefined);
            }
        },
        [onChangeDay, getSelecteDate, value],
    );

    const handleOnHoverDay = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelecteDate(event);
            const isSelectedDone = Array.isArray(value) && value[0] && value[1];

            if (!selectedDate || !Array.isArray(value) || isSelectedDone) {
                return;
            }

            onHoverDay?.(selectedDate);
        },
        [onHoverDay, value],
    );

    const handleOnFocusDay = useCallback(() => {
        // заглушка будет убрана при реализации доступности
    }, []);

    return (
        <StyledCalendarDays>
            <StyledFlex>
                {SHORT_DAY_NAMES.map((name) => (
                    <CalendarDayItem key={name} dayOfWeek day={name} />
                ))}
            </StyledFlex>
            {days.map((day: DateItem[], i) => (
                <StyledFlex key={i}>
                    {day.map(({ date, events, disabled, isSelected, isCurrent, isDayInCurrentMonth, inRange }, j) => (
                        <CalendarDayItem
                            eventList={events}
                            disabled={disabled}
                            day={date.day}
                            year={date.year}
                            monthIndex={date.monthIndex}
                            isSelected={isSelected}
                            isCurrent={isCurrent}
                            isDayInCurrentMonth={isDayInCurrentMonth}
                            isDouble={isDouble}
                            isHovered={isSameDay(date, hoveredDay)}
                            inRange={getInRange(value, date, hoveredDay, inRange)}
                            sideInRange={getSideInRange(value, date, hoveredDay, isSelected)}
                            onClick={disabled ? undefined : handleOnChangeDay}
                            onMouseOver={disabled ? undefined : handleOnHoverDay}
                            onFocus={handleOnFocusDay}
                            key={`StyledDay-${j}`}
                        />
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarDays>
    );
};
