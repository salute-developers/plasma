import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import type { DateItem, DateObject, DisabledDay, EventDay, CalendarValueType } from './types';
import {
    canSelectDate,
    FULL_DAY_NAMES,
    getInRange,
    getSideInRange,
    isSameDay,
    isSelectProcess,
    ROW_STEP,
    SHORT_DAY_NAMES,
} from './utils';
import { useDays } from './hooks';
import { flexCenter } from './mixins';
import { CalendarDayItem } from './CalendarDayItem';

export interface CalendarDaysProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: CalendarValueType;
    min?: Date;
    max?: Date;
    eventList?: EventDay[];
    disabledList?: DisabledDay[];
    isDouble?: boolean;
    isSecond?: boolean;
    hoveredDay?: DateObject;
    selectIndexes?: number[];
    outerRefs: React.MutableRefObject<HTMLDivElement[][]>;
    onHoverDay?: (date?: DateObject) => void;
    onChangeDay: (date: DateObject, coord: number[]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const StyledFlex = styled.div`
    ${flexCenter};
`;

const StyledCalendarDays = styled.div`
    outline: none;

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
    hoveredDay,
    selectIndexes,
    isDouble,
    isSecond,
    outerRefs,
    onChangeDay,
    onHoverDay,
    onSetSelected,
    onKeyDown,
}) => {
    const [days, selected] = useDays(currentDate, value, eventList, disabledList, min, max);
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const offset = isSecond ? ROW_STEP : 0;

    const getSelectedDate = useCallback(
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
        (i: number, j: number) => (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelectedDate(event);

            if (!selectedDate) {
                return;
            }

            onChangeDay(selectedDate, [i + offset, j]);

            if (isSelectProcess(value)) {
                onHoverDay?.(undefined);
            }
        },
        [getSelectedDate, onChangeDay, offset, value, onHoverDay],
    );

    const handleOnHoverDay = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelectedDate(event);
            const isSelectedDone = Array.isArray(value) && value[0] && value[1];

            if (!selectedDate || !Array.isArray(value) || isSelectedDone) {
                return;
            }

            onHoverDay?.(selectedDate);
        },
        [getSelectedDate, onHoverDay, value],
    );

    const handleOnFocusDay = useCallback(() => {
        // заглушка будет убрана при реализации доступности
    }, []);

    const getRefs = useCallback(
        (element: HTMLDivElement, isDayInCurrentMonth: boolean, i: number, j: number) => {
            if (isDayInCurrentMonth) {
                outerRefs.current[i + offset][j] = element;
            }
        },
        [offset, outerRefs],
    );

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarDays role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            <StyledFlex role="row">
                {SHORT_DAY_NAMES.map((name) => (
                    <CalendarDayItem
                        role="columnheader"
                        aria-label={FULL_DAY_NAMES[name]}
                        key={name}
                        dayOfWeek
                        day={name}
                    />
                ))}
            </StyledFlex>
            {days.map((day: DateItem[], i) => (
                <StyledFlex role="row" key={i}>
                    {day.map(({ date, events, disabled, isSelected, isCurrent, isDayInCurrentMonth, inRange }, j) => (
                        <CalendarDayItem
                            ref={(element: HTMLDivElement) => getRefs(element, isDayInCurrentMonth, i, j)}
                            eventList={events}
                            disabled={disabled}
                            day={date.day}
                            year={date.year}
                            monthIndex={date.monthIndex}
                            isFocused={i + offset === selectIndexes?.[0] && j === selectIndexes?.[1]}
                            isSelected={isSelected}
                            isCurrent={isCurrent}
                            isDayInCurrentMonth={isDayInCurrentMonth}
                            isDouble={isDouble}
                            isHovered={isSameDay(date, hoveredDay)}
                            inRange={getInRange(value, date, hoveredDay, inRange)}
                            sideInRange={getSideInRange(value, date, hoveredDay, isSelected)}
                            onClick={disabled ? undefined : handleOnChangeDay(i, j)}
                            onMouseOver={disabled ? undefined : handleOnHoverDay}
                            onFocus={handleOnFocusDay}
                            key={`StyledDay-${j}`}
                            role="gridcell"
                        />
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarDays>
    );
};
