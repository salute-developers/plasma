import React, { createRef, forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cls from 'classnames';
import type { KeyboardEvent, FocusEvent, FocusEventHandler, MutableRefObject, SyntheticEvent } from 'react';
import type { RootProps } from 'src/engines';
import { noop } from 'src/utils';

import { getDateFormatDelimiter } from '../utils/dateHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import type { RangeInputRefs } from '../../Range/Range.types';
import { classes } from '../DatePicker.tokens';
import { keys, useKeyNavigation } from '../hooks/useKeyboardNavigation';
import { InputHidden } from '../DatePickerBase.styles';
import { getSortedValues } from '../../Calendar/utils';
import type { DateInfo, DateType } from '../../Calendar/Calendar.types';
import { getFormattedDates } from '../utils';

import type { DatePickerRangeProps } from './RangeDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledRange, base } from './RangeDate.styles';
import { RangeDatePopover } from './RangeDatePopover/RangeDatePopover';
import { RootWrapperProps } from './RangeDatePopover/RangeDatePopover.types';

export const datePickerRangeRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerRangeProps, 'opened' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<RangeInputRefs, DatePickerRangeProps>(
        (
            {
                className,
                autoComplete,

                isDoubleCalendar = false,
                opened = false,
                value: externalValue,

                label,
                leftHelper,
                contentLeft,
                contentRight,
                view,
                size,
                readOnly = false,
                disabled = false,
                name,

                dividerVariant = 'dash',
                dividerIcon,

                defaultFirstDate = '',
                defaultSecondDate = '',
                firstValueError,
                secondValueError,
                firstValueSuccess,
                secondValueSuccess,
                firstPlaceholder,
                secondPlaceholder,
                firstTextfieldContentLeft,
                firstTextfieldContentRight,
                secondTextfieldContentLeft,
                secondTextfieldContentRight,
                firstTextfieldTextBefore,
                secondTextfieldTextBefore,
                firstTextfieldTextAfter,
                secondTextfieldTextAfter,

                required,
                requiredPlacement = 'right',
                hasRequiredIndicator = true,

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
                closeAfterDateSelect = true,
                offset,

                calendarContainerWidth,
                calendarContainerHeight,
                stretched,

                onToggle,

                onChange,
                onChangeFirstValue,
                onChangeSecondValue,

                onCommitFirstDate,
                onCommitSecondDate,

                onFocusFirstTextfield,
                onFocusSecondTextfield,
                onBlurFirstTextfield,
                onBlurSecondTextfield,

                ...rest
            },
            ref,
        ) => {
            if (externalValue?.length && (defaultFirstDate || defaultSecondDate)) {
                throw new Error("Controlled DatePicker can't have `default{First|Second}Date`, use `value` instead");
            }

            const rangeRef = ref && 'current' in ref ? ref : createRef<RangeInputRefs>();
            const rootRef = useRef<HTMLDivElement | null>(null);

            const innerRefFirst = useRef<HTMLInputElement>(null);
            const innerRefSecond = useRef<HTMLInputElement>(null);

            const [firstInputRef, setFirstInputRef] = useState<MutableRefObject<HTMLInputElement | null> | undefined>(
                rangeRef?.current?.firstTextField(),
            );
            const [secondInputRef, setSecondInputRef] = useState<MutableRefObject<HTMLInputElement | null> | undefined>(
                rangeRef?.current?.secondTextField(),
            );

            const [isInnerOpen, setIsInnerOpen] = useState(opened);
            const dateFormatDelimiter = getDateFormatDelimiter(format);

            const [startExternalValue, endExternalValue] = externalValue || [];
            const startInitialValues = getFormattedDates({
                value: startExternalValue || defaultFirstDate,
                delimiter: dateFormatDelimiter,
                lang,
                format,
                includeEdgeDates,
                min,
                max,
            });
            const endInitialValues = getFormattedDates({
                value: endExternalValue || defaultSecondDate,
                delimiter: dateFormatDelimiter,
                lang,
                format,
                includeEdgeDates,
                min,
                max,
            });

            const [correctStartDates, setCorrectStartDates] = useState({
                calendar: startInitialValues.originalDate,
                input: startInitialValues.formattedDate,
            });
            const [correctEndDates, setCorrectEndDates] = useState({
                calendar: endInitialValues.originalDate,
                input: endInitialValues.formattedDate,
            });

            const [calendarFirstValue, setCalendarFirstValue] = useState<DateType>(startInitialValues.originalDate);
            const [inputFirstValue, setInputFirstValue] = useState(startInitialValues.formattedDate);

            const [calendarSecondValue, setCalendarSecondValue] = useState<DateType>(endInitialValues.originalDate);
            const [inputSecondValue, setInputSecondValue] = useState(endInitialValues.formattedDate);

            const [fullDateEntered, setFullDateEntered] = useState(Boolean(calendarFirstValue && calendarSecondValue));

            const [secondTextFieldClicked, setSecondTextFieldClicked] = useState(false);

            const rangeErrorClass = firstValueError || secondValueError ? classes.datePickerError : undefined;
            const rangeSuccessClass = firstValueSuccess || secondValueSuccess ? classes.datePickerSuccess : undefined;

            const setFirstInputValue = (value: React.SetStateAction<string>) => {
                setInputFirstValue(value);

                if (onChange) {
                    onChange({
                        target: {
                            value: `${value} - ${inputSecondValue}`,
                            name,
                        },
                    });
                }
            };

            const setSecondInputValue = (value: React.SetStateAction<string>) => {
                setInputSecondValue(value);

                if (onChange) {
                    onChange({
                        target: {
                            value: `${inputFirstValue} - ${value}`,
                            name,
                        },
                    });
                }
            };

            const {
                handleChangeValue: handleChangeFirstValue,
                handleCalendarPick: handleFirstCalendarPick,
                handleSearch: handleSearchFirst,
                updateExternalDate: updateExternalFirstDate,
            } = useDatePicker({
                currentValue: inputFirstValue,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: firstValueError,
                valueSuccess: firstValueSuccess,
                name,
                type,
                min,
                max,
                includeEdgeDates,
                dateFormatDelimiter,
                setCorrectDates: setCorrectStartDates,
                setInputValue: setFirstInputValue,
                setCalendarValue: setCalendarFirstValue,
                onChangeValue: onChangeFirstValue,
                onCommitDate: onCommitFirstDate,
            });

            const {
                handleChangeValue: handleChangeSecondValue,
                handleCalendarPick: handleSecondCalendarPick,
                handleSearch: handleSearchSecond,
                updateExternalDate: updateExternalSecondDate,
            } = useDatePicker({
                currentValue: inputSecondValue,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: secondValueError,
                valueSuccess: secondValueSuccess,
                name,
                type,
                min,
                max,
                includeEdgeDates,
                dateFormatDelimiter,
                setCorrectDates: setCorrectEndDates,
                setInputValue: setSecondInputValue,
                setCalendarValue: setCalendarSecondValue,
                onChangeValue: onChangeSecondValue,
                onCommitDate: onCommitSecondDate,
            });

            const handleToggle = (currentOpened: boolean, event?: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    (firstInputRef?.current?.contains((event?.target as Node) || null) ||
                        secondInputRef?.current?.contains((event?.target as Node) || null)) &&
                    (event as KeyboardEvent<HTMLInputElement>)?.code !== keys.Escape
                        ? true
                        : currentOpened;

                if (!isCalendarOpen) {
                    if (calendarFirstValue && !calendarSecondValue) {
                        secondInputRef?.current?.focus();
                    }
                    if (calendarSecondValue && !calendarFirstValue) {
                        firstInputRef?.current?.focus();
                    }
                }

                if (!isCalendarOpen) {
                    setSecondTextFieldClicked(false);
                }

                if (onToggle) {
                    return onToggle(isCalendarOpen, event);
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const handleFocusFirstTextField = (event: FocusEvent<HTMLInputElement>) => {
                onFocusFirstTextfield?.(event);
                setSecondTextFieldClicked(false);
            };

            const handleFocusSecondTextField = (event: FocusEvent<HTMLInputElement>) => {
                onFocusSecondTextfield?.(event);
                setSecondTextFieldClicked(true);
            };

            const handleBlur = (
                event: FocusEvent<HTMLInputElement>,
                outerHandler?: FocusEventHandler<HTMLInputElement>,
            ) => {
                if (!inputFirstValue || !inputSecondValue) {
                    outerHandler?.(event);
                    return;
                }

                let { originalDate: startOriginalDate } = getFormattedDates({
                    value: inputFirstValue,
                    delimiter: dateFormatDelimiter,
                    lang,
                    format,
                    includeEdgeDates,
                    min,
                    max,
                });

                let { originalDate: endOriginalDate } = getFormattedDates({
                    value: inputSecondValue,
                    delimiter: dateFormatDelimiter,
                    lang,
                    format,
                    includeEdgeDates,
                    min,
                    max,
                });

                if (!calendarFirstValue && correctStartDates.calendar) {
                    startOriginalDate = new Date(correctStartDates.calendar);
                }

                if (!calendarSecondValue && correctEndDates.calendar) {
                    endOriginalDate = new Date(correctEndDates.calendar);
                }

                const [startValue, endValue] = getSortedValues([startOriginalDate, endOriginalDate]);

                const { formattedDate: startFormattedDate } = getFormattedDates({
                    value: startValue || null,
                    delimiter: dateFormatDelimiter,
                    lang,
                    format,
                    includeEdgeDates,
                    min,
                    max,
                });

                const { formattedDate: endFormattedDate } = getFormattedDates({
                    value: endValue || null,
                    delimiter: dateFormatDelimiter,
                    lang,
                    format,
                    includeEdgeDates,
                    min,
                    max,
                });

                setFirstInputValue(startFormattedDate);
                setSecondInputValue(endFormattedDate);

                setCalendarFirstValue(startOriginalDate);
                setCalendarSecondValue(endOriginalDate);

                outerHandler?.(event);
            };

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                format,
                maskWithFormat,
                delimiter: dateFormatDelimiter,
                closeOnEsc,
                onToggle: handleToggle,
            });

            const handleChangeStartOfRange = (chosenDate: Date, dateInfo?: DateInfo) => {
                if (!fullDateEntered) {
                    handleFirstCalendarPick(chosenDate, dateInfo);
                    handleSecondCalendarPick(undefined);

                    return;
                }

                const prevValue = secondTextFieldClicked ? calendarFirstValue : calendarSecondValue;

                const [first, second] = getSortedValues([prevValue, chosenDate]);

                handleFirstCalendarPick(first, dateInfo);
                handleSecondCalendarPick(second, dateInfo);

                if (!firstValueError && !secondValueError && closeAfterDateSelect) {
                    handleToggle(false);
                }
            };

            const handleChangeCalendarValue = ([firstDate, secondDate]: [DateType, DateType], dateInfo?: DateInfo) => {
                if (firstDate) {
                    handleFirstCalendarPick(firstDate, dateInfo);
                }

                if (secondDate) {
                    handleSecondCalendarPick(secondDate, dateInfo);
                }

                if (firstDate && secondDate && !firstValueError && !secondValueError && closeAfterDateSelect) {
                    handleToggle(false);
                }
            };

            const RangeComponent = (
                <>
                    {/* TODO https://github.com/salute-developers/plasma/issues/1227
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore */}
                    <StyledRange
                        ref={rangeRef}
                        autoComplete={autoComplete}
                        dividerIcon={dividerIcon}
                        dividerVariant={dividerVariant}
                        label={label}
                        required={required}
                        requiredPlacement={requiredPlacement}
                        hasRequiredIndicator={hasRequiredIndicator}
                        disabled={disabled}
                        readOnly={!disabled && readOnly}
                        firstPlaceholder={firstPlaceholder}
                        secondPlaceholder={secondPlaceholder}
                        contentLeft={contentLeft}
                        contentRight={contentRight}
                        firstTextfieldTextBefore={firstTextfieldTextBefore}
                        secondTextfieldTextBefore={secondTextfieldTextBefore}
                        firstTextfieldTextAfter={firstTextfieldTextAfter}
                        secondTextfieldTextAfter={secondTextfieldTextAfter}
                        firstTextfieldContentLeft={firstTextfieldContentLeft}
                        firstTextfieldContentRight={firstTextfieldContentRight}
                        secondTextfieldContentLeft={secondTextfieldContentLeft}
                        secondTextfieldContentRight={secondTextfieldContentRight}
                        firstValue={inputFirstValue}
                        secondValue={inputSecondValue}
                        firstValueError={firstValueError}
                        secondValueError={secondValueError}
                        firstValueSuccess={firstValueSuccess}
                        secondValueSuccess={secondValueSuccess}
                        onChangeFirstValue={handleChangeFirstValue}
                        onChangeSecondValue={handleChangeSecondValue}
                        name={name}
                        onSearchFirstValue={(_, date) => {
                            handleSearchFirst(String(date));
                            if (!calendarSecondValue || secondValueError) {
                                rangeRef?.current?.secondTextField()?.current?.focus();
                            }
                        }}
                        onSearchSecondValue={(_, date) => {
                            handleSearchSecond(String(date));
                            if (!calendarFirstValue || firstValueError) {
                                rangeRef?.current?.firstTextField()?.current?.focus();
                            }
                        }}
                        onFocusFirstTextfield={handleFocusFirstTextField}
                        onFocusSecondTextfield={handleFocusSecondTextField}
                        onBlurFirstTextfield={(event) => handleBlur(event, onBlurFirstTextfield)}
                        onBlurSecondTextfield={(event) => handleBlur(event, onBlurSecondTextfield)}
                        onKeyDown={onKeyDown}
                    />
                </>
            );

            useEffect(() => {
                setFirstInputRef(rangeRef.current?.firstTextField());
                setSecondInputRef(rangeRef.current?.secondTextField());
            }, [rangeRef.current]);

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

            useEffect(() => {
                if (calendarFirstValue && calendarSecondValue) {
                    setFullDateEntered(true);
                }
            }, [calendarFirstValue, calendarSecondValue]);

            useLayoutEffect(() => {
                if (!defaultFirstDate) {
                    updateExternalFirstDate(startExternalValue || undefined);
                }
            }, [startExternalValue, format, lang]);

            useLayoutEffect(() => {
                if (!defaultSecondDate) {
                    updateExternalSecondDate(endExternalValue || undefined);
                }
            }, [endExternalValue, format, lang]);

            useLayoutEffect(() => {
                if (!startExternalValue) {
                    updateExternalFirstDate(defaultFirstDate);
                }
            }, [defaultFirstDate, format, lang]);

            useLayoutEffect(() => {
                if (!endExternalValue) {
                    updateExternalSecondDate(defaultSecondDate);
                }
            }, [defaultSecondDate, format, lang]);

            const RootWrapper = useCallback<RootWrapperProps>(
                forwardRef(({ children, className: rootWrapperClassName, onClick }, rootWrapperRef) => (
                    <Root
                        ref={rootWrapperRef}
                        view={view}
                        size={size}
                        className={rootWrapperClassName}
                        disabled={disabled}
                        readOnly={!disabled && readOnly}
                        onClick={onClick}
                    >
                        {children}
                    </Root>
                )),
                [view, size, disabled, readOnly],
            );

            return (
                <Root
                    ref={rootRef}
                    view={view}
                    size={size}
                    className={cls(classes.datePickerRoot, className, { [classes.datePickerstretched]: stretched })}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    {...rest}
                >
                    <RangeDatePopover
                        calendarValue={[calendarFirstValue, calendarSecondValue]}
                        target={RangeComponent}
                        opened={isInnerOpen}
                        includeEdgeDates={includeEdgeDates}
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
                        frame={frame}
                        usePortal={usePortal}
                        placement={placement}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        offset={offset}
                        stretched={stretched}
                        calendarContainerWidth={calendarContainerWidth}
                        calendarContainerHeight={calendarContainerHeight}
                        type={type}
                        onToggle={handleToggle}
                        lang={lang}
                        isDoubleCalendar={isDoubleCalendar}
                        rootWrapper={RootWrapper}
                        onChangeStartOfRange={handleChangeStartOfRange}
                        onChangeValue={handleChangeCalendarValue}
                        setIsInnerOpen={setIsInnerOpen}
                    />
                    {leftHelper && (
                        <LeftHelper className={cls(rangeErrorClass, rangeSuccessClass)}>{leftHelper}</LeftHelper>
                    )}
                    <InputHidden
                        name={name}
                        type="hidden"
                        datatype="datepicker-double"
                        data-datepicker="from"
                        value={inputFirstValue}
                        ref={innerRefFirst}
                        {...noop}
                    />
                    <InputHidden
                        name={name}
                        type="hidden"
                        datatype="datepicker-double"
                        data-datepicker="to"
                        value={inputSecondValue}
                        ref={innerRefSecond}
                        {...noop}
                    />
                </Root>
            );
        },
    );

export const datePickerRangeConfig = {
    name: 'DatePickerRange',
    tag: 'div',
    layout: datePickerRangeRoot,
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
