import React, {
    forwardRef,
    SyntheticEvent,
    useCallback,
    useEffect,
    FocusEvent,
    useRef,
    useState,
    useLayoutEffect,
} from 'react';
import type { KeyboardEvent } from 'react';
import { DateType } from 'src/components/Calendar/Calendar.types';
import type { RootProps } from 'src/engines';
import { cx, getPlacements, noop } from 'src/utils';

import { getDateFormatDelimiter } from '../utils/delimiterHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import { classes } from '../DatePicker.tokens';
import { InputHidden, StyledCalendar } from '../DatePickerBase.styles';
import { keys, SelectionBeforeChange, useKeyNavigation } from '../hooks/useKeyboardNavigation';
import { parseFormatToStructure } from '../utils/formatHelper';
import { formatStaticValue } from '../utils/valueFormatter';

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

                autoComplete,
                ...rest
            },
            ref,
        ) => {
            if (value && defaultDate) {
                console.error("Controlled DatePicker can't have `defaultDate`, use `value` instead");
            }

            const inputRef = useRef<HTMLInputElement | null>(null);
            const innerRef = useRef<HTMLInputElement | null>(null);
            const [isInnerOpen, setIsInnerOpen] = useState(opened);
            const [currentKey, setCurrentKey] = useState<string | undefined>(undefined);
            const [selectionBeforeChange, setSelectionBeforeChange] = useState<SelectionBeforeChange>({
                selectionStart: null,
                selectionEnd: null,
            });

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);
            const formatStructure = parseFormatToStructure(format, dateFormatDelimiter());

            const initialValues = formatStaticValue({
                value: value || defaultDate,
                format,
                formatStructure,
                delimiter: dateFormatDelimiter(),
                lang,
                min,
                max,
                includeEdgeDates,
            });

            const [correctDates, setCorrectDates] = useState({
                calendar: initialValues.originalDate,
                input: initialValues.formattedDate,
            });
            const [calendarValue, setCalendarValue] = useState<DateType>(initialValues.originalDate);
            const [inputValue, setInputValue] = useState(initialValues.formattedDate);

            const {
                datePickerErrorClass,
                datePickerSuccessClass,
                handleChangeValue,
                handleCalendarPick,
                handleSearch,
                updateExternalDate,
            } = useDatePicker({
                currentValue: inputValue,
                currentKeyPressed: currentKey,
                selectionBeforeChange,
                formatStructure,
                inputRef,
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
                setInputValue,
                setCalendarValue,
                dateFormatDelimiter,
                onChangeValue,
                onCommitDate,
                onChange,
            });

            const handleToggle = (innerOpened: boolean, event: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    event.target === inputRef?.current &&
                    (event as KeyboardEvent<HTMLInputElement>).code !== keys.Escape
                        ? true
                        : innerOpened;

                if (!innerOpened && !calendarValue) {
                    setCalendarValue((prevValue) => (prevValue === undefined ? null : undefined));
                }

                if (onToggle) {
                    onToggle(isCalendarOpen, event);

                    return;
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

            const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
                if (!calendarValue && correctDates.calendar) {
                    setCalendarValue(new Date(correctDates.calendar));
                    setInputValue(correctDates.input);
                }

                if (onBlur) {
                    onBlur(event);
                }
            };

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
                />
            );

            useLayoutEffect(() => {
                updateExternalDate(value);
            }, [value, format, lang]);

            useLayoutEffect(() => {
                !value && updateExternalDate(defaultDate);
            }, [defaultDate, format, lang]);

            useEffect(() => {
                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened]);

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
                                onChangeValue={handleCalendarPick}
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
