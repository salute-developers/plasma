import React, { forwardRef, SyntheticEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import type { RootProps } from '../../../engines';
import { cx, getPlacements, noop } from '../../../utils';
import { formatCalendarValue, formatInputValue, getDateFormatDelimiter } from '../utils/dateHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import { classes } from '../DatePicker.tokens';
import { InputHidden, StyledCalendar } from '../DatePickerBase.styles';
import { keys, useKeyNavigation } from '../hooks/useKeyboardNavigation';

import type { DatePickerProps } from './SingleDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledInput, StyledPopover, base } from './SingleDate.styles';

export const datePickerRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerProps, 'opened' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<HTMLInputElement, DatePickerProps>(
        (
            {
                className,
                opened = false,
                value,

                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                required = false,
                requiredPlacement = 'right',
                hasRequiredIndicator = true,
                placeholder,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                view,
                size,
                readOnly = false,
                disabled = false,
                name,

                defaultDate = '',
                valueError,
                valueSuccess,
                format = 'DD.MM.YYYY',
                lang = 'ru',
                maskWithFormat,
                min,
                max,
                renderFromDate,
                includeEdgeDates = false,
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventQuarterList,
                disabledQuarterList,
                eventYearList,
                disabledYearList,
                type = 'Days',

                frame = 'document',
                usePortal = false,
                placement = ['top', 'bottom'],
                closeOnOverlayClick = true,
                closeOnEsc = true,
                offset,

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
            // const inputForkRef = useForkRef(inputRef, ref);
            const inputForkRef = useForkRef(innerRef, ref);
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const externalDate = innerRef?.current?.value || value || defaultDate;

            const [calendarValue, setCalendarValue] = useState(formatCalendarValue(externalDate, format, lang));
            const [inputValue, setInputValue] = useState(formatInputValue({ value: externalDate, format, lang }));

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);

            const {
                datePickerErrorClass,
                datePickerSuccessClass,
                handleChangeValue,
                handleCommitDate,
                updateExternalDate,
            } = useDatePicker({
                currentValue: inputValue,
                setInputValue,
                setCalendarValue,
                dateFormatDelimiter,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError,
                valueSuccess,
                name,
                onChangeValue,
                onCommitDate,
                onChange,
            });

            const handleToggle = (opened: boolean, event: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    event.target === inputRef?.current &&
                    (event as KeyboardEvent<HTMLInputElement>).code !== keys.Escape
                        ? true
                        : opened;

                if (!isCalendarOpen && inputValue) {
                    inputRef?.current?.focus();
                }

                if (onToggle) {
                    onToggle(isCalendarOpen, event);

                    return;
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                onToggle: handleToggle,
                closeOnEsc,
            });

            useEffect(() => {
                console.log(innerRef?.current?.value, 'inputValue');
            }, [innerRef?.current?.value]);

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

            useLayoutEffect(() => {
                // setTimeout(() => {
                console.log('value from setter', innerRef?.current?.value);
                // }, 1100);
                const externalDate = value || defaultDate;
                updateExternalDate(externalDate, setInputValue, setCalendarValue);
            }, [innerRef?.current?.value, value, defaultDate, format, lang]);

            const DatePickerInput = (
                <StyledInput
                    ref={inputRef}
                    className={cx(datePickerErrorClass, datePickerSuccessClass)}
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
                    onSearch={(date) => handleCommitDate(date, true, false)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    required={required}
                    requiredPlacement={requiredPlacement}
                    hasRequiredIndicator={hasRequiredIndicator}
                    label={label}
                    labelPlacement={labelPlacement}
                    keepPlaceholder={keepPlaceholder}
                />
            );

            return (
                <Root
                    view={view}
                    size={size}
                    className={cx(classes.datePickerRoot, className)}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
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
                    >
                        <Root
                            view={view}
                            size={size}
                            className={cx(classes.datePickerRoot, className)}
                            disabled={disabled}
                            readOnly={!disabled && readOnly}
                        >
                            <StyledCalendar
                                size={size}
                                value={calendarValue}
                                type={type}
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
                                onChangeValue={(date, dateInfo) => handleCommitDate(date, false, true, dateInfo)}
                            />
                        </Root>
                    </StyledPopover>
                    {leftHelper && (
                        <LeftHelper className={cx(datePickerErrorClass, datePickerSuccessClass)}>
                            {leftHelper}
                        </LeftHelper>
                    )}
                    <InputHidden
                        type="hidden"
                        datatype="datepicker-single"
                        name={name}
                        value={inputValue}
                        ref={inputForkRef}
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
