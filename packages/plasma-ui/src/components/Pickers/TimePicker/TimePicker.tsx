import React, { useCallback, useMemo, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@salutejs/plasma-core';

import { PickerDots } from '../PickerDots';
import type { PickerItem } from '../types';

import { defaultOptions, MAX_MINUTES, MAX_SECONDS, MIN_MINUTES, MIN_SECONDS } from './constants';
import { StyledSimpleTimePicker, StyledWrapper } from './TimePicker.styles';
import { TimePickerProps } from './TimePicker.types';
import {
    getDateStructure,
    getHoursRange,
    getRange,
    getNormalizeValues,
    getHours,
    getMinutes,
    getSeconds,
    getTimeFromStructure,
} from './utils';

/**
 * Компонент для выбора времени.
 */
export const TimePicker = ({
    id,
    options = defaultOptions,
    step,
    size,
    value,
    min,
    max,
    disabled,
    controls,
    autofocus,
    scrollSnapType,
    visibleItems,
    onChange,
    name,
    enableNativeControl,
    secondsAriaLabel,
    minutesAriaLabel,
    hoursAriaLabel,
    infiniteScroll,
    disableScrollSnapAlign = false,
    hoursLabel,
    minutesLabel,
    secondsLabel,
    hasLabel = false,
    ...rest
}: TimePickerProps) => {
    const normalizeValues = useMemo(() => getNormalizeValues(value, min, max, step), [value]);
    const [{ year, month, day, hours, minutes, seconds }, setState] = useState(normalizeValues);
    const minDateStructure = getDateStructure(min);
    const maxDateStructure = getDateStructure(max);

    const [secondsFrom, secondsTo] = useMemo(() => {
        const minSecondsDate = new Date(min);
        const maxSecondsDate = new Date(max);

        const currentSecondsDate = new Date(year, month, day, hours, minutes);

        const minSecondsValue = getSeconds(minSecondsDate);
        const maxSecondsValue = getSeconds(maxSecondsDate);

        minSecondsDate.setSeconds(0);
        maxSecondsDate.setSeconds(0);

        const minDateTime = minSecondsDate.getTime();
        const maxDateTime = maxSecondsDate.getTime();
        const currentDateTime = currentSecondsDate.getTime();

        if (minDateTime === currentDateTime && maxDateTime === currentDateTime) {
            return [minSecondsValue, maxSecondsValue];
        }

        if (minDateTime >= currentDateTime) {
            return [minSecondsValue, MAX_SECONDS];
        }

        if (maxDateTime <= currentDateTime) {
            return [MIN_SECONDS, maxSecondsValue];
        }

        return [MIN_SECONDS, MAX_SECONDS];
    }, [min, max, year, month, day, hours, minutes]);

    const [minutesFrom, minutesTo] = useMemo(() => {
        const minMinutesDate = new Date(min);
        const maxMinutesDate = new Date(max);
        const currentMinutesDate = new Date(year, month, day, hours);

        const minMinutesValue = getMinutes(minMinutesDate);
        const maxMinutesValue = getMinutes(maxMinutesDate);

        minMinutesDate.setMinutes(0);
        maxMinutesDate.setMinutes(0);

        minMinutesDate.setSeconds(0);
        maxMinutesDate.setSeconds(0);

        const minDateTime = minMinutesDate.getTime();
        const maxDateTime = maxMinutesDate.getTime();
        const currentDateTime = currentMinutesDate.getTime();

        if (minDateTime === currentDateTime && maxDateTime === currentDateTime) {
            return [minMinutesValue, maxMinutesValue];
        }

        if (minDateTime >= currentDateTime) {
            return [minMinutesValue, MAX_MINUTES];
        }

        if (maxDateTime <= currentDateTime) {
            return [MIN_MINUTES, maxMinutesValue];
        }

        return [MIN_MINUTES, MAX_MINUTES];
    }, [min, max, year, month, day, hours]);

    const secondsRange = useMemo(() => {
        const secondsStep = step ? (step % 3600) % 60 : 1;
        const currentDate = new Date(year, month, day, hours, minutes);

        return getRange(secondsFrom, secondsTo, currentDate, 'seconds', secondsStep || 1);
    }, [secondsFrom, secondsTo, step, year, month, day, hours, minutes]);

    const minutesRange = useMemo(() => {
        let minsStep = 1;
        if (step) {
            const hoursMod = step % 3600;
            const minsMod = hoursMod % 60;

            minsStep = (hoursMod - minsMod) / 60 || 1;
        }
        const currentDate = new Date(year, month, day, hours);

        return getRange(minutesFrom, minutesTo, currentDate, 'minutes', minsStep || 1);
    }, [minutesFrom, minutesTo, step, year, month, day, hours]);

    const hoursRange = useMemo(() => {
        let hoursStep = 1;
        if (step) {
            const hoursMod = step % 3600;

            hoursStep = (step - hoursMod) / 3600 || 1;
        }

        return getHoursRange(minDateStructure, maxDateStructure, hoursStep || 1);
    }, [minDateStructure, maxDateStructure, step]);

    const getNextDateStructure = useCallback(
        (currentDate: Date) => {
            const minDate = new Date(min);
            const maxDate = new Date(max);

            const nextDate = new Date(currentDate);
            nextDate.setMinutes(minutes);
            nextDate.setSeconds(seconds);

            const nextDateTime = nextDate.getTime();
            const minDateTime = minDate.getTime();
            const maxDateTime = maxDate.getTime();

            if (nextDateTime >= maxDateTime) {
                return { nextMinute: maxDateStructure.minutes, nextSecond: maxDateStructure.seconds };
            }

            if (nextDateTime <= minDateTime) {
                return { nextMinute: minDateStructure.minutes, nextSecond: minDateStructure.seconds };
            }

            return { nextMinute: minutes, nextSecond: seconds };
        },
        [min, max, hours, minutes, seconds],
    );

    const onSecondsChange = ({ date }: PickerItem) => {
        const secondsDate = new Date(date as Date);

        setState((prevDate) => ({ ...prevDate, seconds: getSeconds(secondsDate) }));

        if (onChange) {
            onChange(secondsDate);
        }
    };

    const onMinutesChange = ({ date }: PickerItem) => {
        const minutesDate = new Date(date as Date);

        const { nextSecond } = getNextDateStructure(minutesDate);

        setState((prevDate) => ({ ...prevDate, minutes: getMinutes(minutesDate), seconds: nextSecond }));

        minutesDate.setSeconds(nextSecond);

        if (onChange) {
            onChange(minutesDate);
        }
    };

    const onHoursChange = ({ date }: PickerItem) => {
        const hoursDate = new Date(date as Date);

        const { nextMinute, nextSecond } = getNextDateStructure(hoursDate);

        hoursDate.setMinutes(nextMinute);
        hoursDate.setSeconds(nextSecond);

        setState(getDateStructure(hoursDate));

        if (onChange) {
            onChange(hoursDate);
        }
    };

    /**
     * Если значение value обновилось извне, необходимо изменить стейт
     * и вызвать событие изменения, создав новый экземпляр Date
     */
    useIsomorphicLayoutEffect(() => {
        const oldDate = getTimeFromStructure({ year, month, day, hours, minutes, seconds });
        const newDate = getTimeFromStructure(normalizeValues);

        if (newDate !== oldDate) {
            setState(normalizeValues);
        }
    }, [value, normalizeValues]);

    return (
        <StyledWrapper id={id} {...rest}>
            {options.hours && (
                <StyledSimpleTimePicker
                    id={id}
                    type="hours"
                    autofocus={autofocus}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={hoursRange}
                    value={`${year}_${month}_${day}_${hours}`}
                    dateStructureGetter={getHours}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onHoursChange}
                    aria-label={hoursAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
                    data-label={hasLabel ? hoursLabel || 'часов' : null}
                />
            )}
            {options.hours && options.minutes && <PickerDots $size={size} />}
            {options.minutes && (
                <StyledSimpleTimePicker
                    id={id}
                    type="minutes"
                    autofocus={autofocus && !options.hours}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={minutesRange}
                    value={minutes}
                    dateStructureGetter={getMinutes}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onMinutesChange}
                    aria-label={minutesAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
                    data-label={hasLabel ? minutesLabel || 'минут' : null}
                />
            )}
            {options.minutes && options.seconds && <PickerDots $size={size} />}
            {options.seconds && (
                <StyledSimpleTimePicker
                    id={id}
                    type="seconds"
                    autofocus={autofocus && !options.hours && !options.minutes}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={secondsRange}
                    value={seconds}
                    dateStructureGetter={getSeconds}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onSecondsChange}
                    aria-label={secondsAriaLabel}
                    disableScrollSnapAlign={disableScrollSnapAlign}
                    data-label={hasLabel ? secondsLabel || 'секунд' : null}
                />
            )}
            {enableNativeControl && <input type="hidden" value={value.toISOString()} name={name} />}
        </StyledWrapper>
    );
};
