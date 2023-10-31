import React, { useCallback, useEffect, useRef } from 'react';

import { useDays } from '../../hooks';
import {
    canSelectDate,
    FULL_DAY_NAMES,
    getInRange,
    getSideInRange,
    isSameDay,
    isSelectProcess,
    ROW_STEP,
    SHORT_DAY_NAMES,
} from '../../utils';
import { CalendarDayItem } from '../CalendarDayItem/CalendarDayItem';
import { DateItem } from '../../Calendar.types';

import { StyledCalendarDays, StyledCalendarDaysHint, StyledFlex } from './CalendarDays.styles';
import type { CalendarDaysProps } from './CalendarDays.types';

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
            <StyledCalendarDaysHint id="withShift">
                Для навигации только по доступным датам удерживайте клавишу Shift.
            </StyledCalendarDaysHint>
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
                    {day.map(
                        (
                            {
                                date,
                                events,
                                disabled,
                                isSelected,
                                isCurrent,
                                isDayInCurrentMonth,
                                inRange,
                                isOutOfMinMaxRange = false,
                                disabledArrowKey,
                                disabledMonths,
                            },
                            j,
                        ) => (
                            <CalendarDayItem
                                ref={(element: HTMLDivElement) => getRefs(element, isDayInCurrentMonth, i, j)}
                                eventList={events}
                                disabled={disabled}
                                day={date.day}
                                year={date.year}
                                monthIndex={date.monthIndex}
                                isFocused={
                                    i + offset === selectIndexes?.[0] && j === selectIndexes?.[1] && !isOutOfMinMaxRange
                                }
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
                                disabledArrowKey={disabledArrowKey}
                                disabledMonths={disabledMonths}
                            />
                        ),
                    )}
                </StyledFlex>
            ))}
        </StyledCalendarDays>
    );
};
