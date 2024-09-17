import React, {
    MutableRefObject,
    SyntheticEvent,
    createRef,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import type { RootProps } from '../../../engines';
import { cx } from '../../../utils';
import { formatCalendarValue, formatInputValue, getDateFormatDelimiter } from '../utils/dateHelper';
import { useDatePicker } from '../hooks/useDatePicker';
import type { RangeInputRefs } from '../../Range/Range.types';
import { classes } from '../DatePicker.tokens';
import { useKeyNavigation } from '../hooks/useKeyboardNavigation';

import type { DatePickerRangeProps } from './RangeDate.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledLabel, StyledRange, base } from './RangeDate.styles';
import { RangeDatePopover } from './RangeDatePopover/RangeDatePopover';

export const datePickerRangeRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerRangeProps, 'opened' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<RangeInputRefs, DatePickerRangeProps>(
        (
            {
                className,

                isDoubleCalendar = false,
                opened = false,

                label,
                leftHelper,
                contentLeft,
                contentRight,
                view,
                size,
                readOnly = false,
                disabled = false,

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
                closeOnEsc = true,
                offset,

                onToggle,

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
            const rangeRef = ref && 'current' in ref ? ref : createRef<RangeInputRefs>();
            const rootRef = useRef<HTMLDivElement | null>(null);

            const [firstInputRef, setFirstInputRef] = useState<MutableRefObject<HTMLInputElement | null> | undefined>(
                rangeRef?.current?.firstTextField(),
            );
            const [secondInputRef, setSecondInputRef] = useState<MutableRefObject<HTMLInputElement | null> | undefined>(
                rangeRef?.current?.secondTextField(),
            );
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const [calendarFirstValue, setCalendarFirstValue] = useState(
                formatCalendarValue(defaultFirstDate, format, lang),
            );
            const [inputFirstValue, setInputFirstValue] = useState(
                formatInputValue({ value: defaultFirstDate, format, lang }),
            );

            const [calendarSecondValue, setCalendarSecondValue] = useState(
                formatCalendarValue(defaultSecondDate, format, lang),
            );
            const [inputSecondValue, setInputSecondValue] = useState(
                formatInputValue({ value: defaultSecondDate, format, lang }),
            );

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);

            const {
                handleChangeValue: handleChangeFirstValue,
                handleCommitDate: handleCommitFirstDate,
            } = useDatePicker({
                currentValue: inputFirstValue,
                setInputValue: setInputFirstValue,
                setCalendarValue: setCalendarFirstValue,
                setIsInnerOpen,
                dateFormatDelimiter,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: firstValueError,
                valueSuccess: firstValueSuccess,
                inputRef: firstInputRef,
                onChangeValue: onChangeFirstValue,
                onCommitDate: onCommitFirstDate,
            });

            const {
                handleChangeValue: handleChangeSecondValue,
                handleCommitDate: handleCommitSecondDate,
            } = useDatePicker({
                currentValue: inputSecondValue,
                setInputValue: setInputSecondValue,
                setCalendarValue: setCalendarSecondValue,
                setIsInnerOpen,
                dateFormatDelimiter,
                format,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: secondValueError,
                valueSuccess: secondValueSuccess,
                inputRef: secondInputRef,
                onChangeValue: onChangeSecondValue,
                onCommitDate: onCommitSecondDate,
            });

            const handleToggle = (opened: boolean, event: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    firstInputRef?.current?.contains((event.target as Node) || null) ||
                    secondInputRef?.current?.contains((event.target as Node) || null)
                        ? true
                        : opened;

                if (onToggle) {
                    return onToggle(isCalendarOpen, event);
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const { onKeyDown } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                onToggle: handleToggle,
            });

            const RangeComponent = (
                <>
                    {/* TODO https://github.com/salute-developers/plasma/issues/1227
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore */}
                    <StyledRange
                        ref={rangeRef}
                        dividerIcon={dividerIcon}
                        dividerVariant={dividerVariant}
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
                        onSearchFirstValue={(_, date) => {
                            handleCommitFirstDate(String(date), true, false);
                            if (!calendarSecondValue || secondValueError) {
                                rangeRef?.current?.secondTextField()?.current?.focus();
                            }
                        }}
                        onSearchSecondValue={(_, date) => {
                            handleCommitSecondDate(String(date), true, false);
                            if (!calendarFirstValue || firstValueError) {
                                rangeRef?.current?.firstTextField()?.current?.focus();
                            }
                        }}
                        onFocusFirstTextfield={onFocusFirstTextfield}
                        onFocusSecondTextfield={onFocusSecondTextfield}
                        onBlurFirstTextfield={onBlurFirstTextfield}
                        onBlurSecondTextfield={onBlurSecondTextfield}
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
                setCalendarFirstValue(formatCalendarValue(defaultFirstDate, format, lang));
                setInputFirstValue(formatInputValue({ value: defaultFirstDate, format, lang }));
            }, [defaultFirstDate]);

            useEffect(() => {
                setCalendarSecondValue(formatCalendarValue(defaultSecondDate, format, lang));
                setInputSecondValue(formatInputValue({ value: defaultSecondDate, format, lang }));
            }, [defaultSecondDate]);

            useEffect(() => {
                setCalendarFirstValue(formatCalendarValue(defaultFirstDate, format, lang));
                setInputFirstValue(formatInputValue({ value: defaultFirstDate, format, lang }));

                setCalendarSecondValue(formatCalendarValue(defaultSecondDate, format, lang));
                setInputSecondValue(formatInputValue({ value: defaultSecondDate, format, lang }));
            }, [format, lang]);

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
                    {label && <StyledLabel>{label}</StyledLabel>}
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
                        placement={placement}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        offset={offset}
                        type={type}
                        onToggle={handleToggle}
                        isDoubleCalendar={isDoubleCalendar}
                        onChangeStartOfRange={(firstDate, dateInfo) => {
                            handleCommitFirstDate(firstDate, false, true, dateInfo);
                            handleCommitSecondDate('');
                        }}
                        onChangeValue={([firstDate, secondDate], dateInfo) => {
                            firstDate && handleCommitFirstDate(firstDate, false, true, dateInfo);
                            secondDate && handleCommitSecondDate(secondDate, false, true, dateInfo);
                            if (firstDate && secondDate && !firstValueError && !secondValueError) {
                                setIsInnerOpen(false);
                            }
                        }}
                    />
                    {leftHelper && <LeftHelper>{leftHelper}</LeftHelper>}
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
