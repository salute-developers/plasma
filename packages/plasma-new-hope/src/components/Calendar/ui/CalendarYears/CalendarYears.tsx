import React, { useCallback, useEffect, useRef } from 'react';

import { useYears } from '../../hooks';
import { innerTokens, tokens } from '../../Calendar.tokens';
import { ROW_YEAR_STEP, canSelectDate, getInRange, getSideInRange, isSameDay, isSelectProcess } from '../../utils';
import { DateStructureItem } from '../DateStructureItem/DateStructureItem';

import type { CalendarYearsProps } from './CalendarYears.types';
import { StyledCalendarYears, StyledFlex } from './CalendarYears.styles';

/**
 * Компонент годов в календаре.
 */
export const CalendarYears: React.FC<CalendarYearsProps> = ({
    date: currentDate,
    value,
    startYear,
    selectIndexes,
    eventList,
    disabledList,
    min,
    max,
    outerRefs,
    isDouble,
    isSecond,
    hoveredYear,
    onChangeYear,
    onHoverYear,
    onSetSelected,
    onKeyDown,
}) => {
    const [years, selected] = useYears({ date: currentDate, value, startYear, eventList, disabledList, min, max });
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const offset = isSecond ? ROW_YEAR_STEP : 0;

    const yearItemTokens = {
        [`${innerTokens.dateStructureFontFamily}`]: `var(${tokens.calendarYearFontFamily})`,
        [`${innerTokens.dateStructureFontSize}`]: `var(${tokens.calendarYearFontSize})`,
        [`${innerTokens.dateStructureFontWeight}`]: `var(${tokens.calendarYearFontWeight})`,
        [`${innerTokens.dateStructureFontLineHeight}`]: `var(${tokens.calendarYearFontLineHeight})`,
        [`${innerTokens.dateStructureFontLetterSpacing}`]: `var(${tokens.calendarYearFontLetterSpacing})`,
        [`${innerTokens.dateStructureFontStyle}`]: `var(${tokens.calendarYearFontStyle})`,
        [`${innerTokens.dateStructureSelectedFontWeight}`]: `var(${tokens.calendarYearSelectedFontWeight})`,
        [`${innerTokens.dateStructureWidth}`]: `var(${tokens.calendarYearItemWidth})`,
        [`${innerTokens.dateStructureHeight}`]: `var(${tokens.calendarYearItemHeight})`,
        [`${innerTokens.dateStructureBorderRadius}`]: `var(${tokens.calendarYearItemBorderRadius})`,
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

    const handleOnChangeYear = useCallback(
        (i: number, j: number) => (event: React.MouseEvent<HTMLDivElement>) => {
            /**
             * нужно вызвать stopImmediatePropagation для случаев, когда
             * обработчик события onClick навешивается снаружи.
             * Как, например, в компоненте Popup
             */
            event.nativeEvent.stopImmediatePropagation();

            const selectedDate = getSelectedDate(event);

            if (!selectedDate) {
                return;
            }

            onChangeYear(selectedDate, [i + offset, j]);

            if (isSelectProcess(value)) {
                onHoverYear?.(undefined);
            }
        },
        [getSelectedDate, onChangeYear, offset, value, onHoverYear],
    );

    const handleOnHoverYear = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelectedDate(event);
            const isSelectedDone = Array.isArray(value) && value[0] && value[1];

            if (!selectedDate || !Array.isArray(value) || isSelectedDone) {
                return;
            }

            onHoverYear?.(selectedDate);
        },
        [getSelectedDate, onHoverYear, value],
    );

    const getRefs = useCallback(
        (element: HTMLDivElement, i: number, j: number) => {
            outerRefs.current[i + offset][j] = element;
        },
        [outerRefs],
    );

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarYears role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            {years.map((year, i) => (
                <StyledFlex role="row" key={i}>
                    {year.map(
                        (
                            {
                                yearValue,
                                isSelected,
                                isCurrent,
                                date,
                                events,
                                isOutOfMinMaxRange,
                                inRange,
                                disabled,
                                disabledArrowKey,
                                disabledDates,
                            },
                            j,
                        ) => {
                            return (
                                <DateStructureItem
                                    ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                                    style={yearItemTokens}
                                    eventList={events}
                                    disabled={disabled}
                                    day={date.day}
                                    year={yearValue}
                                    monthIndex={date.monthIndex}
                                    isFocused={
                                        i + offset === selectIndexes?.[0] &&
                                        j === selectIndexes?.[1] &&
                                        !isOutOfMinMaxRange
                                    }
                                    isSelected={isSelected}
                                    isCurrent={isCurrent}
                                    isDouble={isDouble}
                                    isHovered={isSameDay(date, hoveredYear)}
                                    inRange={getInRange(value, date, hoveredYear, inRange)}
                                    sideInRange={getSideInRange(value, date, hoveredYear, isSelected)}
                                    onClick={disabled ? undefined : handleOnChangeYear(i, j)}
                                    onMouseOver={disabled ? undefined : handleOnHoverYear}
                                    key={`StyledYear-${i}-${j}`}
                                    role="gridcell"
                                    data-year={yearValue}
                                    data-month-index={date.monthIndex}
                                    data-day={date.day}
                                    aria-label={String(yearValue)}
                                    disabledArrowKey={disabledArrowKey}
                                    disabledMonths={disabledDates}
                                    isDayInCurrentMonth
                                >
                                    {yearValue}
                                </DateStructureItem>
                            );
                        },
                    )}
                </StyledFlex>
            ))}
        </StyledCalendarYears>
    );
};
