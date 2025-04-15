import React, { createRef, forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type {
    KeyboardEvent,
    FocusEvent,
    FocusEventHandler,
    MutableRefObject,
    SyntheticEvent,
    PropsWithChildren,
    FC,
} from 'react';
import type { RootProps } from 'src/engines';
import { cx, noop } from 'src/utils';

import { getDateFormatDelimiter } from '../utils/delimiterHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import type { RangeInputRefs } from '../../Range/Range.types';
import { classes } from '../DatePicker.tokens';
import { keys, SelectionBeforeChange, useKeyNavigation } from '../hooks/useKeyboardNavigation';
import { InputHidden } from '../DatePickerBase.styles';
import { getSortedValues } from '../../Calendar/utils';
import type { DateInfo, DateType } from '../../Calendar/Calendar.types';
import { parseFormatToStructure } from '../utils/formatHelper';
import { formatStaticValue } from '../utils/valueFormatter';

import type { DatePickerRangeProps } from './RangeDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledRange, base } from './RangeDate.styles';
import { RangeDatePopover } from './RangeDatePopover/RangeDatePopover';

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
                console.error("Controlled DatePicker can't have `default{First|Second}Date`, use `value` instead");
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
            const [currentKey, setCurrentKey] = useState<string | undefined>(undefined);
            const [selectionBeforeChange, setSelectionBeforeChange] = useState<SelectionBeforeChange>({
                selectionStart: 0,
                selectionEnd: 0,
            });

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);
            const formatStructure = parseFormatToStructure(format, dateFormatDelimiter());

            const [startExternalValue, endExternalValue] = externalValue || [];
            const startInitialValues = formatStaticValue({
                value: startExternalValue || defaultFirstDate,
                format,
                formatStructure,
                delimiter: dateFormatDelimiter(),
                lang,
            });
            const endInitialValues = formatStaticValue({
                value: endExternalValue || defaultSecondDate,
                format,
                formatStructure,
                delimiter: dateFormatDelimiter(),
                lang,
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
                currentKeyPressed: currentKey,
                selectionBeforeChange,
                formatStructure,
                inputRef: firstInputRef,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: firstValueError,
                valueSuccess: firstValueSuccess,
                name,
                min,
                max,
                includeEdgeDates,
                setCorrectDates: setCorrectStartDates,
                setInputValue: setFirstInputValue,
                setCalendarValue: setCalendarFirstValue,
                dateFormatDelimiter,
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
                currentKeyPressed: currentKey,
                selectionBeforeChange,
                formatStructure,
                inputRef: secondInputRef,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: secondValueError,
                valueSuccess: secondValueSuccess,
                name,
                min,
                max,
                includeEdgeDates,
                setCorrectDates: setCorrectEndDates,
                setInputValue: setSecondInputValue,
                setCalendarValue: setCalendarSecondValue,
                dateFormatDelimiter,
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

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                closeOnEsc,
                delimiter: dateFormatDelimiter(),
                onToggle: handleToggle,
                setCurrentKey,
                setSelectionBeforeChange,
            });

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

                let { originalDate: startOriginalDate } = formatStaticValue({
                    value: inputFirstValue,
                    format,
                    formatStructure,
                    delimiter: dateFormatDelimiter(),
                    lang,
                });

                let { originalDate: endOriginalDate } = formatStaticValue({
                    value: inputSecondValue,
                    format,
                    formatStructure,
                    delimiter: dateFormatDelimiter(),
                    lang,
                });

                if (!calendarFirstValue && correctStartDates.calendar) {
                    startOriginalDate = new Date(correctStartDates.calendar);
                }

                if (!calendarSecondValue && correctEndDates.calendar) {
                    endOriginalDate = new Date(correctEndDates.calendar);
                }

                const [startValue, endValue] = getSortedValues([startOriginalDate, endOriginalDate]);

                const { formattedDate: startFormattedDate } = formatStaticValue({
                    value: startValue || null,
                    format,
                    formatStructure,
                    delimiter: dateFormatDelimiter(),
                    lang,
                });

                const { formattedDate: endFormattedDate } = formatStaticValue({
                    value: endValue || null,
                    format,
                    formatStructure,
                    delimiter: dateFormatDelimiter(),
                    lang,
                });

                setFirstInputValue(startFormattedDate);
                setSecondInputValue(endFormattedDate);

                setCalendarFirstValue(startOriginalDate);
                setCalendarSecondValue(endOriginalDate);

                outerHandler?.(event);
            };

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

            useLayoutEffect(() => {
                updateExternalFirstDate(startExternalValue || undefined);
            }, [startExternalValue, format, lang]);

            useLayoutEffect(() => {
                updateExternalSecondDate(endExternalValue || undefined);
            }, [endExternalValue, format, lang]);

            useLayoutEffect(() => {
                !startExternalValue && updateExternalFirstDate(defaultFirstDate);
            }, [defaultFirstDate, format, lang]);

            useLayoutEffect(() => {
                !endExternalValue && updateExternalSecondDate(defaultSecondDate);
            }, [defaultSecondDate, format, lang]);

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

            const RootWrapper = useCallback<FC<PropsWithChildren>>(
                ({ children }) => (
                    <Root
                        view={view}
                        size={size}
                        className={cx(classes.datePickerRoot, className)}
                        disabled={disabled}
                        readOnly={!disabled && readOnly}
                    >
                        {children}
                    </Root>
                ),
                [view, size, disabled, readOnly],
            );

            return (
                <Root
                    ref={rootRef}
                    view={view}
                    size={size}
                    className={cx(classes.datePickerRoot, className)}
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
                        type={type}
                        onToggle={handleToggle}
                        lang={lang}
                        isDoubleCalendar={isDoubleCalendar}
                        rootWrapper={RootWrapper}
                        onChangeStartOfRange={handleChangeStartOfRange}
                        onChangeValue={handleChangeCalendarValue}
                    />
                    {leftHelper && (
                        <LeftHelper className={cx(rangeErrorClass, rangeSuccessClass)}>{leftHelper}</LeftHelper>
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
