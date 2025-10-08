import React, { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent, SyntheticEvent, KeyboardEvent, FocusEvent } from 'react';
import cls from 'classnames';
import { customDayjs } from 'src/utils/datejs';
import { useForkRef } from '@salutejs/plasma-core';
import type { RootProps } from 'src/engines';

import { getDateFormatDelimiter } from '../DatePicker/utils/dateHelper';
import type { DateType } from '../Calendar/Calendar.types';

import type { DateTimePickerProps, DateTimePickerRootProps } from './DateTimePicker.types';
import { base, CalendarContainerOverlay, LeftHelper } from './DateTimePicker.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as eventTooltipSizeCSS } from './variations/_tooltip-size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { CalendarGrid, DateShortcutList, Input, Popover, StyledSeparator, TimeGrid } from './ui';
import { classes } from './DateTimePicker.tokens';
import { useDateTimePicker } from './hooks/useDateTimePicker';
import { getFormattedDateTime } from './utils';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

export const dateTimePickerRoot = (Root: RootProps<HTMLDivElement, DateTimePickerRootProps>) =>
    forwardRef<HTMLInputElement, DateTimePickerProps>(
        (
            {
                className,

                value: outerValue,
                defaultDate = '',

                // variation props
                size,
                view,
                readOnly = false,
                disabled = false,

                // popover props
                opened = false,
                placement = ['top', 'bottom'],
                offset,
                frame = 'document',
                zIndex,
                closeOnOverlayClick = true,
                closeOnEsc = true,
                usePortal = false,

                // calendar props
                type = 'Days',
                lang = 'ru',
                dateFormat = 'DD.MM.YYYY',
                timeFormat = 'HH:mm:ss',
                dateTimeSeparator = ' ',
                maskWithFormat,
                min,
                max,
                renderFromDate,
                includeEdgeDates,
                isDouble,
                dateOnTimeSelectOnly,

                dateShortcuts,
                dateShortcutsPlacement = 'left',
                dateShortcutsWidth,

                eventTooltipOptions,
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventQuarterList,
                disabledQuarterList,
                eventYearList,
                disabledYearList,

                calendarContainerWidth,
                calendarContainerHeight,
                stretched,

                // input props
                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                requiredPlacement = 'right',
                required = false,
                hasRequiredIndicator = false,
                preserveInvalidOnBlur,
                placeholder,
                valueError,
                valueSuccess,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                autoComplete,

                // callbacks
                onChangeValue,
                onCommitDate,
                onToggle,
                onFocus,
                onBlur,

                ...rest
            },
            ref,
        ) => {
            const inputRef = useRef<HTMLInputElement | null>(null);
            const inputInnerRef = useForkRef(inputRef, ref);

            const calendarOverlayRef = useRef<HTMLDivElement | null>(null);
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const dateFormatDelimiter = useMemo(() => getDateFormatDelimiter(dateFormat), [dateFormat]);
            const timeFormatDelimiter = useMemo(() => getDateFormatDelimiter(timeFormat), [timeFormat]);

            const timeColumnsCount = timeFormat?.split(timeFormatDelimiter).length || 2;
            const fullFormat = dateFormat + dateTimeSeparator + timeFormat;

            const [innerDate, setInnerDate] = useState<string | DateType>(defaultDate || '');
            const dateValue = outerValue ?? innerDate;

            const initialValues = getFormattedDateTime({
                value: dateValue,
                lang,
                format: fullFormat,
                includeEdgeDates,
                min,
                max,
                dateFormat,
                timeFormat,
            });

            const [correctDates, setCorrectDates] = useState({
                input: initialValues.formattedDate,
                calendar: initialValues.dateValue,
                time: initialValues.timeValue,
            });

            const calendarGridValue: DateType = initialValues.dateValue;
            const timeGridValue = initialValues.timeValue;

            customDayjs.locale(lang);
            const timeVisibleValue = timeGridValue ? customDayjs(timeGridValue).format(timeFormat) : '';
            const inputValue = initialValues.formattedDate;

            const isDateEqualEdge = (dateEdge?: Date) => {
                if (!dateEdge) {
                    return false;
                }

                const normalizedEdgeDate = customDayjs(dateEdge);
                normalizedEdgeDate.set('hours', 0);
                normalizedEdgeDate.set('minutes', 0);
                normalizedEdgeDate.set('seconds', 0);

                const normalizedCurrentDate = customDayjs(correctDates.calendar);
                normalizedCurrentDate.set('hours', 0);
                normalizedCurrentDate.set('minutes', 0);
                normalizedCurrentDate.set('seconds', 0);

                if (normalizedCurrentDate.isSame(normalizedEdgeDate)) {
                    return true;
                }

                return false;
            };

            const {
                errorClass,
                successClass,
                handleChangeValue,
                handleSearch,
                getQuarterInfo,
                handleCalendarPick,
                handleTimePick,
                updateExternalDate,
            } = useDateTimePicker({
                valueError,
                valueSuccess,
                type,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                format: fullFormat,
                dateFormat,
                timeFormat,
                currentValue: inputValue,
                delimiters: [dateFormatDelimiter, timeFormatDelimiter, dateTimeSeparator],
                inputRef,
                correctDates,
                max,
                min,
                includeEdgeDates,
                dateOnTimeSelectOnly,

                setCorrectDates,
                setInnerDate,
                onChangeValue,
                onCommitDate,
            });

            const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
                if (!preserveInvalidOnBlur) {
                    customDayjs.locale(lang);

                    const originalDate = correctDates.calendar;

                    if (!originalDate) {
                        if (onChangeValue) {
                            onChangeValue(event, correctDates.input, {
                                originalDate: undefined,
                                isoDate: '',
                            });
                        }

                        if (onCommitDate) {
                            onCommitDate(correctDates.input, {
                                quarterInfo: undefined,
                                originalDate: undefined,
                                isoDate: '',
                            });
                        }

                        return;
                    }

                    if (correctDates.time) {
                        originalDate.setHours(
                            correctDates.time.getHours(),
                            correctDates.time.getMinutes(),
                            correctDates.time.getSeconds(),
                        );
                    }

                    setInnerDate(originalDate);

                    if (!timeGridValue) {
                        if (correctDates.calendar) {
                            setInnerDate(correctDates.calendar);
                        }
                    }

                    if (onChangeValue) {
                        onChangeValue(event, correctDates.input, {
                            originalDate,
                            isoDate: originalDate.toISOString(),
                        });
                    }

                    if (onCommitDate) {
                        const quarterInfo = getQuarterInfo(originalDate);

                        onCommitDate(correctDates.input, {
                            quarterInfo,
                            originalDate,
                            isoDate: originalDate.toISOString(),
                        });
                    }
                }

                if (onBlur) {
                    onBlur(event);
                }
            };

            const handleCalendarOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
                if (disabled || readOnly) {
                    return;
                }

                event.stopPropagation();

                if (isInnerOpen && stretched && event.target === calendarOverlayRef?.current) {
                    setIsInnerOpen(false);

                    if (onToggle) {
                        onToggle(false, event);
                    }
                }
            };

            const handleToggle = (innerOpened: boolean, event?: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    event?.target === inputRef?.current && (event as KeyboardEvent<HTMLInputElement>).code !== 'Escape'
                        ? true
                        : innerOpened;

                if (onToggle) {
                    onToggle(isCalendarOpen, event);

                    return;
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const { onKeyDown } = useKeyNavigation({
                opened: isInnerOpen,
                format: fullFormat,
                maskWithFormat,
                delimiters: [dateFormatDelimiter, timeFormatDelimiter, dateTimeSeparator],
                closeOnEsc,
                onToggle: handleToggle,
            });

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

            useLayoutEffect(() => {
                if (!dateValue) {
                    updateExternalDate(defaultDate);
                }
            }, [defaultDate, fullFormat, lang]);

            return (
                <Root
                    view={view}
                    size={size}
                    className={cls(classes.root, className, {
                        [classes.stretched]: stretched,
                    })}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    eventTooltipSize={eventTooltipOptions?.size}
                >
                    <Popover
                        target={
                            <Input
                                ref={inputInnerRef}
                                className={cls(errorClass, successClass)}
                                value={inputValue}
                                label={label}
                                labelPlacement={labelPlacement}
                                keepPlaceholder={keepPlaceholder}
                                requiredPlacement={requiredPlacement}
                                required={required}
                                hasRequiredIndicator={hasRequiredIndicator}
                                preserveInvalidOnBlur={preserveInvalidOnBlur}
                                placeholder={placeholder}
                                valueError={valueError}
                                valueSuccess={valueSuccess}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                textBefore={textBefore}
                                textAfter={textAfter}
                                autoComplete={autoComplete}
                                readOnly={readOnly}
                                disabled={disabled}
                                onChange={handleChangeValue}
                                onSearch={(e) => handleSearch(e?.currentTarget?.value)}
                                onFocus={onFocus}
                                onBlur={handleBlur}
                                onKeyDown={onKeyDown}
                                {...rest}
                            />
                        }
                        opened={isInnerOpen}
                        usePortal={usePortal}
                        frame={frame}
                        offset={offset}
                        placement={placement}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        zIndex={zIndex}
                        calendarContainerWidth={calendarContainerWidth}
                        calendarContainerHeight={calendarContainerHeight}
                        onToggle={handleToggle}
                    >
                        <CalendarContainerOverlay ref={calendarOverlayRef} onClick={handleCalendarOverlayClick} />

                        <Root
                            view={view}
                            size={size}
                            className={cls(classes.root, className, {
                                [classes.stretched]: stretched,
                            })}
                            disabled={disabled}
                            readOnly={!disabled && readOnly}
                        >
                            {dateShortcuts?.length ? (
                                <DateShortcutList
                                    items={dateShortcuts}
                                    setShortcutDate={updateExternalDate}
                                    dateShortcutsWidth={dateShortcutsWidth}
                                    calendarContainerHeight={calendarContainerHeight}
                                    dateShortcutsPlacement={dateShortcutsPlacement}
                                />
                            ) : null}

                            <CalendarGrid
                                value={calendarGridValue}
                                isDouble={isDouble}
                                calendarContainerWidth={calendarContainerWidth}
                                calendarContainerHeight={calendarContainerHeight}
                                type={type}
                                eventTooltipOptions={eventTooltipOptions}
                                eventList={eventList}
                                disabledList={disabledList}
                                eventMonthList={eventMonthList}
                                disabledMonthList={disabledMonthList}
                                eventQuarterList={eventQuarterList}
                                disabledQuarterList={disabledQuarterList}
                                eventYearList={eventYearList}
                                disabledYearList={disabledYearList}
                                min={min}
                                max={max}
                                renderFromDate={renderFromDate}
                                includeEdgeDates={includeEdgeDates}
                                lang={lang}
                                handleCalendarPick={handleCalendarPick}
                            />

                            <StyledSeparator />

                            <TimeGrid
                                value={timeVisibleValue}
                                format={timeFormat}
                                columns={timeColumnsCount}
                                calendarContainerWidth={calendarContainerWidth}
                                calendarContainerHeight={calendarContainerHeight}
                                dropdownHeight={calendarContainerHeight}
                                onChange={handleTimePick}
                                {...(isDateEqualEdge(min) && { min })}
                                {...(isDateEqualEdge(max) && { max })}
                            />
                        </Root>
                    </Popover>
                    {leftHelper && <LeftHelper className={cls('errorClass, successClass')}>{leftHelper}</LeftHelper>}
                </Root>
            );
        },
    );

export const dateTimePickerConfig = {
    name: 'DateTimePicker',
    tag: 'div',
    layout: dateTimePickerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        eventTooltipSize: {
            css: eventTooltipSizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
