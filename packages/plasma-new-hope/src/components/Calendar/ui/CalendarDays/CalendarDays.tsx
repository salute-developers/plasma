import React, { Fragment, useCallback, useEffect, useRef } from 'react';

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
    I18N,
} from '../../utils';
import { DateStructureItem } from '../DateStructureItem/DateStructureItem';
import { DateItem } from '../../Calendar.types';
import { innerTokens, tokens } from '../../Calendar.tokens';

import { StyledCalendarDays, StyledCalendarDaysHint } from './CalendarDays.styles';
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
    includeEdgeDates,
    hoveredDay,
    selectIndexes,
    isDouble,
    isSecond,
    outerRefs,
    onChangeDay,
    onHoverDay,
    onSetSelected,
    onKeyDown,
    locale = 'ru',
}) => {
    const [days, selected] = useDays({ date: currentDate, value, eventList, disabledList, min, max, includeEdgeDates });
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const offset = isSecond ? ROW_STEP : 0;

    const dayItemTokens = {
        [`${innerTokens.dateStructureFontFamily}`]: `var(${tokens.calendarDayFontFamily})`,
        [`${innerTokens.dateStructureFontSize}`]: `var(${tokens.calendarDayFontSize})`,
        [`${innerTokens.dateStructureFontWeight}`]: `var(${tokens.calendarDayFontWeight})`,
        [`${innerTokens.dateStructureFontLineHeight}`]: `var(${tokens.calendarDayFontLineHeight})`,
        [`${innerTokens.dateStructureFontLetterSpacing}`]: `var(${tokens.calendarDayFontLetterSpacing})`,
        [`${innerTokens.dateStructureFontStyle}`]: `var(${tokens.calendarDayFontStyle})`,
        [`${innerTokens.dateStructureSelectedFontWeight}`]: `var(${tokens.calendarDaySelectedFontWeight})`,
        [`${innerTokens.dateStructureBorderRadius}`]: `var(${tokens.calendarDayItemBorderRadius})`,
    };

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

    const handleMouseOutGrid = () => onHoverDay?.(undefined);

    const getRefs = (element: HTMLDivElement, isDayInCurrentMonth: boolean, i: number, j: number) => {
        if (isDayInCurrentMonth) {
            outerRefs.current[i + offset][j] = element;
        }
    };

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarDays
            role="grid"
            aria-labelledby="id-grid-label"
            onKeyDown={onKeyDown}
            onMouseLeave={handleMouseOutGrid}
        >
            <StyledCalendarDaysHint id="withShift">{I18N.navigationByShift[locale]}</StyledCalendarDaysHint>
            <>
                {SHORT_DAY_NAMES[locale].map((name) => (
                    <DateStructureItem
                        role="columnheader"
                        aria-label={FULL_DAY_NAMES[locale][name]}
                        key={name}
                        dayOfWeek
                        day={name}
                        style={dayItemTokens}
                    >
                        {name}
                    </DateStructureItem>
                ))}
            </>
            {days.map((day: DateItem[], i) => (
                <Fragment key={i}>
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
                                disabledDates,
                            },
                            j,
                        ) => (
                            <DateStructureItem
                                ref={(element: HTMLDivElement) => getRefs(element, Boolean(isDayInCurrentMonth), i, j)}
                                style={dayItemTokens}
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
                                key={`StyledDay-${i}-${j}`}
                                role="gridcell"
                                disabledArrowKey={disabledArrowKey}
                                disabledMonths={disabledDates}
                            >
                                {date.day}
                            </DateStructureItem>
                        ),
                    )}
                </Fragment>
            ))}
        </StyledCalendarDays>
    );
};
