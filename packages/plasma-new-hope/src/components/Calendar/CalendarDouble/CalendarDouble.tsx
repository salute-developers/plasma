import React, { useState, useCallback, useMemo, forwardRef, HTMLAttributes } from 'react';

import type { Calendar, DateObject } from '../shared/types';
import { getDateFromValue, getNextDate, getPrevDate, isValueUpdate } from '../shared/utils';
import { useKeyNavigation } from '../shared/hooks';
import { CalendarDays, CalendarHeader } from '../ui';
import { RootProps } from '../../../engines/types';

import { StyledCalendar, StyledSeparator, StyledWrapper } from './CalendarDouble.styles';

export type CalendarDoubleProps = HTMLAttributes<HTMLDivElement> & Calendar;

/**
 * Компонент двойного календаря.
 */
export const calendarDoubleRoot = (Root: RootProps<HTMLDivElement, CalendarDoubleProps>) =>
    forwardRef<HTMLDivElement, CalendarDoubleProps>(
        ({ value: externalValue, min, max, eventList, disabledList, onChangeValue, ...rest }) => {
            const [firstValue, secondValue] = useMemo(
                () => (Array.isArray(externalValue) ? externalValue : [externalValue]),
                [externalValue],
            );
            const value = secondValue || firstValue;
            const [hoveredDay, setHoveredDay] = useState<DateObject | undefined>();

            const [date, setDate] = useState<DateObject>(getDateFromValue(value));
            const [prevValue, setPrevValue] = useState(value);
            const [doubleDate, setMonths] = useState(() => {
                const nextDate = getDateFromValue(firstValue);
                const [initialYear, initialMonth] = getNextDate(nextDate.year, nextDate.monthIndex);

                return {
                    monthIndex: [nextDate.monthIndex, initialMonth],
                    year: [nextDate.year, initialYear],
                };
            });

            const handleMonth = useCallback(
                (getDate: (currentYear: number, currentMonth: number) => number[]) => {
                    const [newCurrentYear, newCurrentMonth] = getDate(doubleDate.year[0], doubleDate.monthIndex[0]);
                    const [newNextYear, newNextMonth] = getDate(doubleDate.year[1], doubleDate.monthIndex[1]);

                    setMonths({
                        monthIndex: [newCurrentMonth, newNextMonth],
                        year: [newCurrentYear, newNextYear],
                    });
                },
                [doubleDate],
            );

            const handlePrev = useCallback(() => {
                handleMonth(getPrevDate);
            }, [handleMonth]);

            const handleNext = useCallback(() => {
                handleMonth(getNextDate);
            }, [handleMonth]);

            const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs] = useKeyNavigation({
                isDouble: true,
                size: [11, 6],
                onNext: handleNext,
                onPrev: handlePrev,
            });

            const handleOnChangeDay = useCallback(
                (newDate: DateObject, coord: number[]) => {
                    const newDay = new Date(newDate.year, newDate.monthIndex, newDate.day);
                    onChangeValue?.(newDay);

                    onSelectIndexes(coord);
                },
                [onChangeValue, onSelectIndexes],
            );

            const firstDate = useMemo(
                () => ({
                    day: date.day,
                    year: doubleDate.year[0],
                    monthIndex: doubleDate.monthIndex[0],
                }),
                [date, doubleDate],
            );

            const secondDate = useMemo(
                () => ({
                    day: date.day,
                    year: doubleDate.year[1],
                    monthIndex: doubleDate.monthIndex[1],
                }),
                [date, doubleDate],
            );

            if (value && prevValue && isValueUpdate(value, prevValue)) {
                const newDate = getDateFromValue(value);

                const { year, monthIndex } = newDate;

                const {
                    monthIndex: [, prevMonthIndex],
                    year: [, prevYear],
                } = doubleDate;

                if (prevMonthIndex !== monthIndex || prevYear !== year) {
                    const [nextYear, nextMonthIndex] = getNextDate(year, monthIndex);

                    setDate(newDate);

                    setMonths({
                        monthIndex: [monthIndex, nextMonthIndex],
                        year: [year, nextYear],
                    });
                }

                setPrevValue(value);
            }

            return (
                <Root aria-label="Выбор даты" {...rest}>
                    <CalendarHeader
                        isDouble
                        firstDate={firstDate}
                        secondDate={secondDate}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />

                    <StyledWrapper>
                        <CalendarDays
                            isDouble
                            eventList={eventList}
                            disabledList={disabledList}
                            min={min}
                            max={max}
                            value={externalValue}
                            date={firstDate}
                            hoveredDay={hoveredDay}
                            selectIndexes={selectIndexes}
                            onChangeDay={handleOnChangeDay}
                            onHoverDay={setHoveredDay}
                            onSetSelected={onSelectIndexes}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                        />
                        <StyledSeparator />
                        <CalendarDays
                            isDouble
                            isSecond
                            eventList={eventList}
                            disabledList={disabledList}
                            min={min}
                            max={max}
                            value={externalValue}
                            date={secondDate}
                            hoveredDay={hoveredDay}
                            selectIndexes={selectIndexes}
                            onChangeDay={handleOnChangeDay}
                            onHoverDay={setHoveredDay}
                            onSetSelected={onSelectIndexes}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                        />
                    </StyledWrapper>
                </Root>
            );
        },
    );

export const calendarDoubleConfig = {
    name: 'CalendarDouble',
    tag: 'div',
    layout: calendarDoubleRoot,
    base: StyledCalendar,
    variations: {},
    defaults: {},
};
