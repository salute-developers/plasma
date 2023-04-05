import React from 'react';
import styled from 'styled-components';
import { useIsomorphicLayoutEffect } from '@salutejs/plasma-core';

import { SimpleDatePicker, SimpleDatePickerProps } from './SimpleDatePicker';
import { getDateValues, getNormalizeValues, getRange, getTimeValues, getValuesInRange, isChanged } from './utils';
import { DateType, PickerItem } from './types';

const defaultOptions = {
    years: true,
    months: true,
    days: true,
    shortMonthName: false,
};

/**
 * Вернёт максимальное количество дней в месяце
 */
const getMaxDayInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();

/**
 * Вернёт секунды
 */
const getSeconds = ([year, month, day]: DateType) => new Date(year, month, day, 0, 0, 0).getTime();

const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
`;

export interface DatePickerProps extends Omit<SimpleDatePickerProps, 'type' | 'range' | 'onChange'> {
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
    /**
     * Сменить WAI-ARIA Label списка дней.
     */
    daysAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка месяцев.
     */
    monthsAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка годов.
     */
    yearsAriaLabel?: string;
}

/**
 * Компонент для выбора даты.
 */
export const DatePicker = ({
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
    name,
    enableNativeControl,
    daysAriaLabel: dayAriaLabel,
    monthsAriaLabel: monthAriaLabel,
    yearsAriaLabel: yearAriaLabel,
    infiniteScroll,
    disableScrollSnapAlign = false,
    ...rest
}: DatePickerProps) => {
    const normalizeValues = React.useMemo(() => getNormalizeValues(getDateValues, getSeconds)(value, min, max), [
        value,
    ]);

    const [[year, month, day], setState] = React.useState(normalizeValues);
    const [minYear, minMonth, minDay] = getDateValues(min);
    const [maxYear, maxMonth, maxDay] = getDateValues(max);

    const [monthsFrom, monthsTo] = React.useMemo(() => {
        if (minYear === year && maxYear === year) {
            return [minMonth, maxMonth];
        }

        if (minYear >= year) {
            return [minMonth, 11];
        }

        if (maxYear <= year) {
            return [0, maxMonth];
        }

        return [0, 11];
    }, [minMonth, maxMonth, year, minYear, maxYear]);

    const [daysFrom, daysTo] = React.useMemo(() => {
        if (year >= maxYear && maxMonth === month) {
            return [1, maxDay];
        }

        const maxDayInMonth = getMaxDayInMonth(month, year);

        if (year <= minYear && minMonth === month) {
            return [minDay, maxDayInMonth];
        }

        return [1, maxDayInMonth];
    }, [minMonth, maxMonth, minDay, maxDay, year, month, minYear, maxYear]);

    const [daysRange] = React.useMemo(() => {
        return [getRange(daysFrom, daysTo)];
    }, [daysFrom, daysTo]);

    const [monthsRange] = React.useMemo(() => {
        return [getRange(monthsFrom, monthsTo)];
    }, [monthsFrom, monthsTo]);

    const [yearRange] = React.useMemo(() => {
        return [getRange(minYear, maxYear)];
    }, [minYear, maxYear]);

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

    // TODO: https://github.com/salute-developers/plasma/issues/242
    const onYearChange = React.useCallback(
        ({ value: y }: PickerItem) => {
            setState(([, m, d]) => {
                const nextMonth = getNextMonth(m, y as number);
                const nextDay = getNextDay(d, nextMonth, y as number);

                return [y as number, nextMonth, nextDay];
            });
        },
        [getNextDay, getNextMonth],
    );

    // TODO: https://github.com/salute-developers/plasma/issues/242
    const onMonthChange = React.useCallback(
        ({ value: m }: PickerItem) => {
            setState(([y, , d]) => {
                const nextDay = getNextDay(d, m as number, y);

                return [y, m as number, nextDay];
            });
        },
        [getNextDay],
    );
    // TODO: https://github.com/salute-developers/plasma/issues/242
    const onDayChange = React.useCallback(({ value: d }: PickerItem) => setState(([y, m]) => [y, m, d as number]), []);

    /**
     * При очередном прогоне, если значения year, month, day изменились,
     * необходимо вызвать событие изменения, создав новый экземпляр Date
     */
    useIsomorphicLayoutEffect(() => {
        const oldDate = normalizeValues;

        if (onChange && isChanged(oldDate, [year, month, day])) {
            onChange(new Date(year, month, day, ...getTimeValues(value)));
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
                const [newYear, newMonth, newDay] = newDate;
                onChange(new Date(newYear, newMonth, newDay, ...getTimeValues(value)));
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

    const newTime = getValuesInRange([yearRange, monthsRange, daysRange], [year, month, day], value);
    if (isChanged([year, month, day], newTime)) {
        setState(newTime);
    }

    return (
        <StyledWrapper id={id} {...rest}>
            {daysOption && (
                <SimpleDatePicker
                    id={id}
                    autofocus={autofocus}
                    size={size}
                    type="day"
                    value={day}
                    range={daysRange}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onDayChange}
                    aria-label={dayAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
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
                    range={monthsRange}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onMonthChange}
                    aria-label={monthAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
                />
            )}
            {yearsOption && (
                <SimpleDatePicker
                    id={id}
                    autofocus={autofocus && !options.days && !options.months}
                    size={size}
                    type="year"
                    value={year}
                    range={yearRange}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onYearChange}
                    aria-label={yearAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
                />
            )}
            {enableNativeControl && <input type="hidden" value={value.toISOString()} name={name} />}
        </StyledWrapper>
    );
};
