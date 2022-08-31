import React from 'react';
import styled from 'styled-components';
import { useIsomorphicLayoutEffect } from '@salutejs/plasma-core';

import { PickerDots } from './PickerDots';
import { SimpleTimePicker, SimpleTimePickerProps } from './SimpleTimePicker';
import { getNewDate, getNormalizeValues, getRange, getTimeValues, getValuesInRange, isChanged } from './utils';
import type { TimeType } from './types';

const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
    align-items: stretch;
`;

const defaultOptions = {
    hours: true,
    minutes: true,
    seconds: true,
};

/**
 * Вернёт секунды
 */
const getSeconds = ([hours, minutes, seconds]: TimeType) => hours * 60 * 60 + minutes * 60 + seconds;

export interface TimePickerProps extends Omit<SimpleTimePickerProps, 'type' | 'range' | 'onChange'> {
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
    options?: typeof defaultOptions;
    /**
     * Интервалы в секундах.
     * @example:
     * 7200 = интервал в 2 часа
     * 300 = интервал в 5 минут
     * 5 = интервал в 5 секунд
     * 7505 = интервалы 2 часа, 5 минут, 5 секунд
     */
    step?: number;
    /**
     * Сменить WAI-ARIA Label списка дней.
     */
    secondsAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка месяцев.
     */
    minutesAriaLabel?: string;
    /**
     * Сменить WAI-ARIA Label списка годов.
     */
    hoursAriaLabel?: string;
}

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
    ...rest
}: TimePickerProps) => {
    const normalizeValues = React.useMemo(() => getNormalizeValues(getTimeValues, getSeconds)(value, min, max), [
        value,
    ]);
    const [hoursN, minutesN] = normalizeValues;

    const [minHours, minMinutes, minSeconds] = getTimeValues(min);
    const [maxHours, maxMinutes, maxSeconds] = getTimeValues(max);

    // Диапазоны для списков зависят от min и max,
    // при чем min и max принимаются как возможные предельные значения,
    // а не как контейнеры для компонент hours, minutes, seconds
    const [hoursRange, minsRange, secsRange] = React.useMemo(() => {
        let minMins = 0;
        let maxMins = 59;
        let minSecs = 0;
        let maxSecs = 59;

        if (hoursN === minHours) {
            minMins = minMinutes;
        }

        if (hoursN === maxHours) {
            maxMins = maxMinutes;
        }

        if (hoursN === minHours && minutesN === minMinutes) {
            minSecs = minSeconds;
        }

        if (hoursN === maxHours && minutesN === maxMinutes) {
            maxSecs = maxSeconds;
        }

        let hoursStep = 1;
        let minsStep = 1;
        let secsStep = 1;

        if (step) {
            const hoursMod = step % 3600;
            const minsMod = hoursMod % 60;
            hoursStep = (step - hoursMod) / 3600 || 1;
            minsStep = (hoursMod - minsMod) / 60 || 1;
            secsStep = minsMod || 1;
        }

        return [
            getRange(minHours, maxHours, hoursStep),
            getRange(minMins, maxMins, minsStep),
            getRange(minSecs, maxSecs, secsStep),
        ];
    }, [
        minHours,
        maxHours,
        minMinutes,
        maxMinutes,
        minSeconds,
        maxSeconds,
        hoursN === maxHours || hoursN === minHours,
        minutesN === minMinutes || minutesN === maxMinutes,
        step,
    ]);

    const [prevValue, setPrevValue] = React.useState(value);
    const [[hours, minutes, seconds], setState] = React.useState(() => {
        return getValuesInRange([hoursRange, minsRange, secsRange], normalizeValues, value);
    });

    const onHoursChange = React.useCallback(({ value: h }) => setState(([, m, s]) => [h, m, s]), []);
    const onMinutesChange = React.useCallback(({ value: m }) => setState(([h, , s]) => [h, m, s]), []);
    const onSecondsChange = React.useCallback(({ value: s }) => setState(([h, m]) => [h, m, s]), []);

    /**
     * Если значение (value) обновилось извне, необходимо изменить стейт
     */
    if (prevValue.getTime() !== value.getTime()) {
        setPrevValue(value);

        setState((prevTime) => {
            const [newHours, newMins, newSecs] = getValuesInRange(
                [hoursRange, minsRange, secsRange],
                normalizeValues,
                value,
            );

            if (!isChanged(prevTime, [newHours, newMins, newSecs])) {
                return prevTime;
            }

            return [newHours, newMins, newSecs];
        });
    }

    /**
     * Если обновился внутренний стейт, необходимо проверить условия
     * и вызвать событие изменения, создав новый экземпляр Date
     */
    useIsomorphicLayoutEffect(() => {
        const valueTime = [value.getHours(), value.getMinutes(), value.getSeconds()];

        if (isChanged(valueTime, [hours, minutes, seconds])) {
            onChange?.(getNewDate(value, [hours, minutes, seconds]));
        }
    }, [hours, minutes, seconds, value]);

    return (
        <StyledWrapper id={id} {...rest}>
            {options.hours && (
                <SimpleTimePicker
                    id={id}
                    type="hours"
                    autofocus={autofocus}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={hoursRange}
                    value={hours}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onHoursChange}
                    aria-label={hoursAriaLabel}
                />
            )}
            {options.hours && options.minutes && <PickerDots $size={size} />}
            {options.minutes && (
                <SimpleTimePicker
                    id={id}
                    type="minutes"
                    autofocus={autofocus && !options.hours}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={minsRange}
                    value={minutes}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onMinutesChange}
                    aria-label={minutesAriaLabel}
                />
            )}
            {options.minutes && options.seconds && <PickerDots $size={size} />}
            {options.seconds && (
                <SimpleTimePicker
                    id={id}
                    type="seconds"
                    autofocus={autofocus && !options.hours && !options.minutes}
                    disabled={disabled}
                    controls={controls}
                    visibleItems={visibleItems}
                    size={size}
                    range={secsRange}
                    value={seconds}
                    scrollSnapType={scrollSnapType}
                    infiniteScroll={infiniteScroll}
                    onChange={onSecondsChange}
                    aria-label={secondsAriaLabel}
                />
            )}
            {enableNativeControl && <input type="hidden" value={value.toISOString()} name={name} />}
        </StyledWrapper>
    );
};
