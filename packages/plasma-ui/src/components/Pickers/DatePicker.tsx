import React from 'react';
import styled from 'styled-components';
import { useIsomorphicLayoutEffect } from '@salutejs/plasma-core';

import { SimpleDatePicker, SimpleDatePickerProps } from './SimpleDatePicker';
import { getDateValues, getTimeValues } from './utils';

type Datetype = readonly [number, number, number];

const isChanged = ([oldYear, oldMonth, oldDay]: Datetype, [newYear, newMonth, newDay]: Datetype) =>
    oldYear !== newYear || oldMonth !== newMonth || oldDay !== newDay;

const getMaxDayInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();

const defaultOptions = {
    years: true,
    months: true,
    days: true,
    shortMonthName: false,
};

const getSeconds = (date: Datetype) => new Date(...date, 0, 0, 0).getTime();

const getNormalizeValues = (current: Date, min: Date, max: Date) => {
    const curValues = getDateValues(current);
    const minValues = getDateValues(min);
    const maxValues = getDateValues(max);

    const curSeconds = getSeconds(curValues);
    const minSeconds = getSeconds(minValues);
    const maxSeconds = getSeconds(maxValues);

    if (curSeconds < minSeconds) {
        return minValues;
    }

    if (curSeconds > maxSeconds) {
        return maxValues;
    }

    return curValues;
};

const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
`;

export interface DatePickerProps extends Omit<SimpleDatePickerProps, 'type' | 'from' | 'to' | 'onChange'> {
    /**
     * Обработчик изменения
     */
    onChange?: (value: Date) => void;
    /**
     * Значение контрола
     */
    value: Date;
    /**
     * Максимальное значение даты
     */
    max: Date;
    /**
     * Минимальное значение даты
     */
    min: Date;
    /**
     * Формат выводимого значения
     */
    options?: Partial<typeof defaultOptions>;
}

/**
 * Компонент для выбора даты.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
    id,
    options = defaultOptions,
    size,
    value,
    max,
    min,
    disabled,
    controls,
    autofocus,
    visibleItems,
    scrollSnapType,
    onChange,
    ...rest
}) => {
    const normalizeValues = React.useMemo(() => getNormalizeValues(value, min, max), [value, min, max]);

    const [[year, month, day], setState] = React.useState(normalizeValues);
    const [minYear, minMonth, minDay] = getDateValues(min);
    const [maxYear, maxMonth, maxDay] = getDateValues(max);

    const monthsInterval = React.useMemo(() => {
        if (minYear >= year) {
            return [minMonth, 11];
        }

        if (maxYear <= year) {
            return [0, maxMonth];
        }

        return [0, 11];
    }, [minMonth, maxMonth, year, minYear, maxYear]);

    const daysInterval = React.useMemo(() => {
        if (year >= maxYear && maxMonth === month) {
            return [1, maxDay];
        }

        const maxDayInMonth = getMaxDayInMonth(month, year);

        if (year <= minYear && minMonth === month) {
            return [minDay, maxDayInMonth];
        }

        return [1, maxDayInMonth];
    }, [minMonth, maxMonth, minDay, maxDay, year, month, minYear, maxYear]);

    const getNextMonth = React.useCallback(
        (currentMonth: number, currentYear: number): number => {
            if (currentYear >= maxYear && currentMonth >= maxMonth) {
                return maxMonth;
            }

            if (currentYear <= minYear && currentMonth <= minMonth) {
                return minMonth;
            }

            return currentMonth;
        },
        [minMonth, maxMonth, minYear, maxYear],
    );

    const getNextDay = React.useCallback(
        (nextDay: number, nextMonth: number, nextYear: number): number => {
            if (nextYear >= maxYear && nextMonth >= maxMonth && nextDay >= maxDay) {
                return maxDay;
            }

            if (nextYear <= minYear && nextMonth <= maxMonth && nextDay <= minDay) {
                return minDay;
            }

            const possibleMaxDayInMonth = getMaxDayInMonth(nextMonth, nextYear);

            if (possibleMaxDayInMonth < nextDay) {
                return possibleMaxDayInMonth;
            }

            return nextDay;
        },
        [minDay, maxDay, maxMonth, minYear, maxYear],
    );

    const onYearChange = React.useCallback(
        ({ value: y }) => {
            setState(([, m, d]) => {
                const nextMonth = getNextMonth(m, y);
                const nextDay = getNextDay(d, nextMonth, y);

                console.log('YEAR CHANGE', y, nextMonth, nextDay);

                return [y, nextMonth, nextDay];
            });
        },
        [getNextDay, getNextMonth],
    );
    const onMonthChange = React.useCallback(
        ({ value: m }) => {
            setState(([y, , d]) => {
                const nextDay = getNextDay(d, m, y);

                console.log('MONTH CHANGE', y, m, nextDay);

                return [y, m, nextDay];
            });
        },
        [getNextDay],
    );
    const onDayChange = React.useCallback(({ value: d }) => setState(([y, m]) => [y, m, d]), []);

    /**
     * При очередном прогоне, если значения year, month, day изменились,
     * необходимо вызвать событие изменения, создав новый экземпляр Date
     */
    useIsomorphicLayoutEffect(() => {
        const oldDate = normalizeValues;

        if (onChange && isChanged(oldDate, [year, month, day])) {
            const a = getTimeValues(value);

            onChange(new Date(year, month, day, ...a));
        }
    }, [year, month, day]);

    /**
     * Если значение value обновилось извне, необходимо изменить стейт
     * и вызвать событие изменения, создав новый экземпляр Date
     */
    useIsomorphicLayoutEffect(() => {
        setState((prevDate) => {
            const newDate = normalizeValues;

            if (!isChanged(prevDate, newDate)) {
                return prevDate;
            }

            if (onChange) {
                onChange(new Date(...normalizeValues));
            }

            return newDate;
        });
    }, [value, normalizeValues]);

    const getOption = (key: keyof typeof defaultOptions) => (key in options ? options[key] : defaultOptions[key]);

    const daysOption = getOption('days');
    const monthsOption = getOption('months');
    const yearsOption = getOption('years');
    const shortMonthNameOption = getOption('shortMonthName');
    const monthNameFormat = shortMonthNameOption ? 'short' : 'long';

    return (
        <StyledWrapper id={id} {...rest}>
            {daysOption && (
                <SimpleDatePicker
                    id={id}
                    autofocus={autofocus}
                    size={size}
                    type="day"
                    value={day}
                    from={daysInterval[0]}
                    to={daysInterval[1]}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    onChange={onDayChange}
                />
            )}
            {monthsOption && (
                <SimpleDatePicker
                    id={id}
                    autofocus={autofocus && !options.days}
                    size={size}
                    type="month"
                    monthNameFormat={monthNameFormat}
                    value={month}
                    from={monthsInterval[0]}
                    to={monthsInterval[1]}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    onChange={onMonthChange}
                />
            )}
            {yearsOption && (
                <SimpleDatePicker
                    id={id}
                    autofocus={autofocus && !options.days && !options.months}
                    size={size}
                    type="year"
                    value={year}
                    from={minYear}
                    to={maxYear}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    onChange={onYearChange}
                />
            )}
        </StyledWrapper>
    );
};
