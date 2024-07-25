import React, { useCallback, useEffect, useRef } from 'react';

import { useMonths } from '../../hooks';
import { innerTokens, tokens } from '../../Calendar.tokens';
import { ROW_MONTH_STEP, canSelectDate, getInRange, getSideInRange, isSameDay, isSelectProcess } from '../../utils';
import { DateStructureItem } from '../DateStructureItem/DateStructureItem';

import type { CalendarMonthsProps } from './CalendarMonths.types';
import { StyledCalendarMonths, StyledFlex } from './CalendarMonths.styles';

/**
 * Компонент месяцев в календаре.
 */
export const CalendarMonths: React.FC<CalendarMonthsProps> = ({
    date: currentDate,
    value,
    selectIndexes,
    eventList,
    disabledList,
    min,
    max,
    outerRefs,
    isDouble,
    isSecond,
    hoveredMonth,
    onChangeMonth,
    onHoverMonth,
    onSetSelected,
    onKeyDown,
}) => {
    const [months, selected] = useMonths({ date: currentDate, value, eventList, disabledList, min, max });
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const offset = isSecond ? ROW_MONTH_STEP : 0;

    const monthItemTokens = {
        [`${innerTokens.dateStructureFontFamily}`]: `var(${tokens.calendarMonthFontFamily})`,
        [`${innerTokens.dateStructureFontSize}`]: `var(${tokens.calendarMonthFontSize})`,
        [`${innerTokens.dateStructureFontWeight}`]: `var(${tokens.calendarMonthFontWeight})`,
        [`${innerTokens.dateStructureFontLineHeight}`]: `var(${tokens.calendarMonthFontLineHeight})`,
        [`${innerTokens.dateStructureFontLetterSpacing}`]: `var(${tokens.calendarMonthFontLetterSpacing})`,
        [`${innerTokens.dateStructureFontStyle}`]: `var(${tokens.calendarMonthFontStyle})`,
        [`${innerTokens.dateStructureSelectedFontWeight}`]: `var(${tokens.calendarMonthSelectedFontWeight})`,
        [`${innerTokens.dateStructureWidth}`]: `var(${tokens.calendarMonthItemWidth})`,
        [`${innerTokens.dateStructureHeight}`]: `var(${tokens.calendarMonthItemHeight})`,
        [`${innerTokens.dateStructureBorderRadius}`]: `var(${tokens.calendarMonthItemBorderRadius})`,
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

    const handleOnChangeMonth = useCallback(
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

            onChangeMonth(selectedDate, [i + offset, j]);

            if (isSelectProcess(value)) {
                onHoverMonth?.(undefined);
            }
        },
        [getSelectedDate, onChangeMonth, offset, value, onHoverMonth],
    );

    const handleOnHoverMonth = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelectedDate(event);
            const isSelectedDone = Array.isArray(value) && value[0] && value[1];

            if (!selectedDate || !Array.isArray(value) || isSelectedDone) {
                return;
            }

            onHoverMonth?.(selectedDate);
        },
        [getSelectedDate, onHoverMonth, value],
    );

    const getRefs = useCallback(
        (element: HTMLDivElement, i: number, j: number) => {
            outerRefs.current[i + offset][j] = element;
        },
        [offset, outerRefs],
    );

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarMonths role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            {months.map((month, i) => (
                <StyledFlex role="row" key={i}>
                    {month.map(
                        (
                            {
                                monthName,
                                monthIndex,
                                isSelected,
                                isCurrent,
                                monthFullName,
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
                                    style={monthItemTokens}
                                    eventList={events}
                                    disabled={disabled}
                                    day={date.day}
                                    year={date.year}
                                    monthIndex={monthIndex}
                                    isFocused={
                                        i + offset === selectIndexes?.[0] &&
                                        j === selectIndexes?.[1] &&
                                        !isOutOfMinMaxRange
                                    }
                                    isSelected={isSelected}
                                    isCurrent={isCurrent}
                                    isDouble={isDouble}
                                    isHovered={isSameDay(date, hoveredMonth)}
                                    inRange={getInRange(value, date, hoveredMonth, inRange)}
                                    sideInRange={getSideInRange(value, date, hoveredMonth, isSelected)}
                                    onClick={disabled ? undefined : handleOnChangeMonth(i, j)}
                                    onMouseOver={disabled ? undefined : handleOnHoverMonth}
                                    key={`StyledMonth-${i}-${j}`}
                                    role="gridcell"
                                    aria-label={monthFullName}
                                    disabledArrowKey={disabledArrowKey}
                                    disabledMonths={disabledDates}
                                    isDayInCurrentMonth
                                >
                                    {monthName}
                                </DateStructureItem>
                            );
                        },
                    )}
                </StyledFlex>
            ))}
        </StyledCalendarMonths>
    );
};
