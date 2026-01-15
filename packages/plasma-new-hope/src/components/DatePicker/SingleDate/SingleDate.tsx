import React, { forwardRef, SyntheticEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cls from 'classnames';
import type { KeyboardEvent, FocusEvent, MouseEvent } from 'react';
import type { DateInfo, DateType } from 'src/components/Calendar/Calendar.types';
import type { RootProps } from 'src/engines';
import { getPlacements, getSizeValueFromProp, noop } from 'src/utils';

import { getDateFormatDelimiter } from '../utils/dateHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import { classes } from '../DatePicker.tokens';
import { InputHidden, StyledCalendar } from '../DatePickerBase.styles';
import { keys, useKeyNavigation } from '../hooks/useKeyboardNavigation';
import { getFormattedDates, invokeOnCommitDate } from '../utils';
import { StyledShortcutList } from '../ui';

import type { DatePickerProps, RootDatePickerProps } from './SingleDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
import { base as eventTooltipSizeCSS } from './variations/_tooltip-size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledInput, StyledPopover, base } from './SingleDate.styles';

export const datePickerRoot = (Root: RootProps<HTMLDivElement, RootDatePickerProps>) =>
    forwardRef<HTMLInputElement, DatePickerProps>(
        (
            {
                className,
                name,
                autoComplete,

                // controlled
                value: outerValue,
                opened = false,

                defaultDate = '',
                preserveInvalidOnBlur,

                // variations
                view,
                size,
                readOnly = false,
                disabled = false,
                appearance,
                hasClearDivider,
                stretched,

                valueError,
                valueSuccess,

                // layout
                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                required = false,
                requiredPlacement = 'right',
                hasRequiredIndicator = false,
                placeholder,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,

                // hint
                hintTrigger = 'hover',
                hintText,
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintTargetPlacement = 'outer',
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset = [0, 0],
                hintWidth,
                hintContentLeft,

                // calendar-container
                frame = 'document',
                usePortal = false,
                zIndex,
                placement = ['top', 'bottom'],
                closeOnOverlayClick = true,
                closeOnEsc = true,
                closeAfterDateSelect = true,
                offset,

                // calendar
                format = 'DD.MM.YYYY',
                lang = 'ru',
                maskWithFormat,
                min,
                max,
                renderFromDate,
                includeEdgeDates = false,
                eventTooltipOptions,
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventQuarterList,
                disabledQuarterList,
                eventYearList,
                disabledYearList,
                type = 'Days',

                calendarContainerWidth,
                calendarContainerHeight,

                dateShortcuts,
                dateShortcutsPlacement = 'left',
                dateShortcutsWidth,

                onChangeValue,
                onCommitDate,
                onToggle,
                onFocus,
                onBlur,
                onChange,

                ...rest
            },
            ref,
        ) => {
            const inputRef = useRef<HTMLInputElement | null>(null);
            const innerRef = useRef<HTMLInputElement | null>(null);
            const calendarRootRef = useRef<HTMLDivElement | null>(null);
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const dateFormatDelimiter = getDateFormatDelimiter(format);

            const [innerDate, setInnerDate] = useState<string | DateType>(defaultDate || '');
            const dateValue = outerValue ?? innerDate;

            const initialValues = getFormattedDates({
                value: dateValue,
                delimiter: dateFormatDelimiter,
                lang,
                format,
                includeEdgeDates,
                min,
                max,
            });

            const [correctDates, setCorrectDates] = useState({
                calendar: initialValues.originalDate,
                input: initialValues.formattedDate,
            });

            const calendarValue: DateType = initialValues.originalDate;
            const inputValue = initialValues.formattedDate;

            const calendarContainerWidthValue = calendarContainerWidth
                ? getSizeValueFromProp(calendarContainerWidth, 'rem')
                : undefined;
            const calendarContainerHeightValue = calendarContainerHeight
                ? getSizeValueFromProp(calendarContainerHeight, 'rem')
                : undefined;

            const {
                datePickerErrorClass,
                datePickerSuccessClass,
                handleChangeValue,
                handleCalendarPick: onCalendarPick,
                handleSearch,
                getQuarterInfo,
                updateExternalDate,
            } = useDatePicker({
                currentValue: inputValue,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError,
                valueSuccess,
                name,
                type,
                min,
                max,
                includeEdgeDates,
                setCorrectDates,
                setInnerDate,
                dateFormatDelimiter,
                onChangeValue,
                onCommitDate,
                onChange,
            });

            const handleToggle = (innerOpened: boolean, event?: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    event?.target === inputRef?.current &&
                    (event as KeyboardEvent<HTMLInputElement>).code !== keys.Escape
                        ? true
                        : innerOpened;

                if (onToggle) {
                    onToggle(isCalendarOpen, event);

                    return;
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const handleCalendarRootClick = (event: MouseEvent<HTMLDivElement>) => {
                if (disabled || readOnly) {
                    return;
                }

                if (isInnerOpen && stretched && event.target === calendarRootRef?.current) {
                    setIsInnerOpen(false);

                    if (onToggle) {
                        onToggle(false, event);
                    }
                }
            };

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                format,
                maskWithFormat,
                delimiter: dateFormatDelimiter,
                closeOnEsc,
                onToggle: handleToggle,
            });

            const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
                if (!preserveInvalidOnBlur && !calendarValue && correctDates.calendar) {
                    setInnerDate(new Date(correctDates.calendar));
                    if (onChangeValue) {
                        onChangeValue(
                            event,
                            correctDates.input,
                            correctDates.calendar,
                            correctDates.calendar.toISOString(),
                        );
                    }

                    if (onCommitDate) {
                        const dateInfo = getQuarterInfo(correctDates.calendar);

                        invokeOnCommitDate({
                            callback: onCommitDate,
                            value: correctDates.input,
                            formattedValues: {
                                error: false,
                                success: true,
                                dateInfo,
                                originalDate: correctDates.calendar,
                                isoDate: correctDates.calendar.toISOString(),
                            },
                        });
                    }

                    if (onChange) {
                        onChange({
                            target: {
                                value: correctDates.input,
                                originalDate: correctDates.calendar,
                                isoDate: correctDates.calendar.toISOString(),
                                name,
                            },
                        });
                    }
                }

                if (onBlur) {
                    onBlur(event);
                }
            };

            const handleCalendarPick = (date?: Date | null, dateInfo?: DateInfo) => {
                onCalendarPick(date, dateInfo);

                if (closeAfterDateSelect) {
                    setIsInnerOpen(false);
                    handleToggle(false);
                }
            };

            const DatePickerInput = (
                <StyledInput
                    ref={inputRef}
                    className={cls(datePickerErrorClass, datePickerSuccessClass)}
                    value={inputValue}
                    size={size}
                    readOnly={readOnly}
                    disabled={disabled}
                    placeholder={placeholder}
                    contentLeft={contentLeft}
                    contentRight={contentRight}
                    textBefore={textBefore}
                    textAfter={textAfter}
                    onChange={handleChangeValue}
                    onSearch={handleSearch}
                    onFocus={onFocus}
                    onBlur={handleBlur}
                    onKeyDown={onKeyDown}
                    required={required}
                    requiredPlacement={requiredPlacement}
                    hasRequiredIndicator={hasRequiredIndicator}
                    label={label}
                    labelPlacement={labelPlacement}
                    keepPlaceholder={keepPlaceholder}
                    autoComplete={autoComplete}
                    appearance={appearance}
                    hasDivider={hasClearDivider}
                    {...(hintText
                        ? {
                              hintText,
                              hintView,
                              hintSize,
                              hintTrigger,
                              hintTargetIcon,
                              hintPlacement,
                              hintHasArrow,
                              hintOffset,
                              hintWidth,
                              hintContentLeft,
                              hintTargetPlacement,
                          }
                        : { hintText: undefined })}
                />
            );

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

            useLayoutEffect(() => {
                if (!dateValue) {
                    updateExternalDate(defaultDate);
                }
            }, [defaultDate, format, lang]);

            return (
                <Root
                    view={view}
                    size={size}
                    className={cls(classes.datePickerRoot, className, { [classes.datePickerstretched]: stretched })}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    ref={ref}
                    eventTooltipSize={eventTooltipOptions?.size}
                    {...(hintText && {
                        hintView,
                        hintSize,
                    })}
                    {...rest}
                >
                    <StyledPopover
                        opened={isInnerOpen}
                        usePortal={usePortal}
                        frame={frame}
                        onToggle={handleToggle}
                        offset={offset}
                        placement={getPlacements(placement, false)}
                        trigger="click"
                        closeOnOverlayClick={closeOnOverlayClick}
                        isFocusTrapped={false}
                        target={DatePickerInput}
                        preventOverflow={false}
                        zIndex={zIndex}
                    >
                        <Root
                            ref={calendarRootRef}
                            view={view}
                            size={size}
                            className={cls(classes.datePickerRoot, className, {
                                [classes.datePickerstretched]: stretched,
                            })}
                            disabled={disabled}
                            readOnly={!disabled && readOnly}
                            onClick={handleCalendarRootClick}
                        >
                            {dateShortcuts?.length ? (
                                <StyledShortcutList
                                    items={dateShortcuts}
                                    setShortcutDate={onCalendarPick}
                                    dateShortcutsWidth={dateShortcutsWidth}
                                    calendarContainerHeight={calendarContainerHeight}
                                    dateShortcutsPlacement={dateShortcutsPlacement}
                                />
                            ) : null}

                            <StyledCalendar
                                className={cls({ [classes.datePickerCalendarstretched]: stretched })}
                                innerWidth={calendarContainerWidthValue}
                                innerHeight={calendarContainerHeightValue}
                                size={size}
                                value={calendarValue}
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
                                isRange={false}
                                locale={lang}
                                onChangeValue={handleCalendarPick}
                            />
                        </Root>
                    </StyledPopover>
                    {leftHelper && (
                        <LeftHelper className={cls(datePickerErrorClass, datePickerSuccessClass)}>
                            {leftHelper}
                        </LeftHelper>
                    )}
                    <InputHidden
                        type="hidden"
                        datatype="datepicker-single"
                        name={name}
                        value={inputValue}
                        ref={innerRef}
                        {...noop}
                    />
                </Root>
            );
        },
    );

export const datePickerConfig = {
    name: 'DatePicker',
    tag: 'div',
    layout: datePickerRoot,
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
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
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
        eventTooltipSizeCSS: 'm',
    },
};
