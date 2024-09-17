import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import type { RootProps } from '../../../engines';
import { cx, getPlacements } from '../../../utils';
import { formatCalendarValue, formatInputValue, getDateFormatDelimiter } from '../utils/dateHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import { classes } from '../DatePicker.tokens';
import { StyledCalendar } from '../DatePickerBase.styles';
import { useKeyNavigation } from '../hooks/useKeyboardNavigation';

import type { DatePickerProps } from './SingleDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledInput, StyledLabel, StyledPopover, base } from './SingleDate.styles';

export const datePickerRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerProps, 'opened' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<HTMLInputElement, DatePickerProps>(
        (
            {
                className,
                opened = false,

                label,
                labelPlacement = 'outer',
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

                defaultDate = '',
                valueError,
                valueSuccess,
                format = 'DD.MM.YYYY',
                lang = 'ru',
                maskWithFormat,
                min,
                max,
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

                placement = ['top', 'bottom'],
                closeOnOverlayClick = true,
                offset,

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
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const [calendarValue, setCalendarValue] = useState(formatCalendarValue(defaultDate, format, lang));
            const [inputValue, setInputValue] = useState(formatInputValue({ value: defaultDate, format, lang }));

            const innerLabelPlacement = labelPlacement === 'inner';

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);

            const {
                datePickerErrorClass,
                datePickerSuccessClass,
                handleToggle,
                handleChangeValue,
                handleCommitDate,
            } = useDatePicker({
                currentValue: inputValue,
                setInputValue,
                setCalendarValue,
                setIsInnerOpen,
                dateFormatDelimiter,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError,
                valueSuccess,
                inputRef,
                onToggle,
                onChangeValue,
                onCommitDate,
            });

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                onToggle: handleToggle,
            });

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
                    {...(innerLabelPlacement && { label, labelPlacement })}
                />
            );

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

            useEffect(() => {
                setCalendarValue(formatCalendarValue(defaultDate, format, lang));
                setInputValue(formatInputValue({ value: defaultDate, format, lang }));
            }, [defaultDate]);

            useEffect(() => {
                setCalendarValue(formatCalendarValue(defaultDate, format, lang));
                setInputValue(formatInputValue({ value: defaultDate, format, lang }));
            }, [format, lang]);

            return (
                <Root
                    view={view}
                    size={size}
                    className={cx(classes.datePickerRoot, className)}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    ref={ref}
                    {...rest}
                >
                    {!innerLabelPlacement && label && <StyledLabel>{label}</StyledLabel>}
                    <StyledPopover
                        opened={isInnerOpen}
                        usePortal={false}
                        onToggle={handleToggle}
                        offset={offset}
                        placement={getPlacements(placement)}
                        trigger="click"
                        closeOnOverlayClick={closeOnOverlayClick}
                        isFocusTrapped={false}
                        target={DatePickerInput}
                        preventOverflow={false}
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
                            includeEdgeDates={includeEdgeDates}
                            isRange={false}
                            onChangeValue={(date, dateInfo) => handleCommitDate(date, false, true, dateInfo)}
                        />
                    </StyledPopover>
                    {leftHelper && <LeftHelper>{leftHelper}</LeftHelper>}
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
