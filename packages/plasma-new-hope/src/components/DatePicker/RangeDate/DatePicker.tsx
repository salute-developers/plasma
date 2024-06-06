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
import { StyledCalendar } from '../DatePickerBase.styles';

import type { DatePickerRangeProps } from './DatePicker.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { StyledRange, base } from './DatePicker.styles';
import { RangeDoubleDate } from './RangeDoubleDate/RangeDoubleDate';

export const datePickerRangeRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerRangeProps, 'isOpen' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<RangeInputRefs, DatePickerRangeProps>(
        (
            {
                className,
                isOpenFirst = false,
                isOpenSecond = false,

                isDoubleCalendar = false,
                isOpenDouble,

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
                maskWithFormat,
                min,
                max,
                includeEdgeDates = false,
                eventList,
                disabledList,
                type = 'Days',

                placement = ['top', 'bottom'],
                closeOnOverlayClick = true,
                offset,

                onToggleDouble,
                onToggleFirst,
                onToggleSecond,

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
            const [isInnerOpenFirst, setIsInnerOpenFirst] = useState(isOpenFirst);
            const [isInnerOpenSecond, setIsInnerOpenSecond] = useState(isOpenSecond);
            const [isInnerOpenDouble, setIsInnerOpenDouble] = useState(isOpenDouble);

            const [calendarFirstValue, setCalendarFirstValue] = useState(formatCalendarValue(defaultFirstDate, format));
            const [inputFirstValue, setInputFirstValue] = useState(formatInputValue(defaultFirstDate, format));

            const [calendarSecondValue, setCalendarSecondValue] = useState(
                formatCalendarValue(defaultSecondDate, format),
            );
            const [inputSecondValue, setInputSecondValue] = useState(formatInputValue(defaultSecondDate, format));

            const dateFormatDelimiter = useCallback(() => getDateFormatDelimiter(format), [format]);

            const {
                handleToggle: handleToggleFirst,
                handleChangeValue: handleChangeFirstValue,
                handleCommitDate: handleCommitFirstDate,
            } = useDatePicker({
                currentValue: inputFirstValue,
                setInputValue: setInputFirstValue,
                setCalendarValue: setCalendarFirstValue,
                setIsInnerOpen: setIsInnerOpenFirst,
                dateFormatDelimiter,
                format,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: firstValueError,
                valueSuccess: firstValueSuccess,
                inputRef: firstInputRef,
                onToggle: onToggleFirst,
                onChangeValue: onChangeFirstValue,
                onCommitDate: onCommitFirstDate,
            });

            const {
                handleToggle: handleToggleSecond,
                handleChangeValue: handleChangeSecondValue,
                handleCommitDate: handleCommitSecondDate,
            } = useDatePicker({
                currentValue: inputSecondValue,
                setInputValue: setInputSecondValue,
                setCalendarValue: setCalendarSecondValue,
                setIsInnerOpen: setIsInnerOpenSecond,
                dateFormatDelimiter,
                format,
                disabled,
                readOnly,
                maskWithFormat,
                valueError: secondValueError,
                valueSuccess: secondValueSuccess,
                inputRef: secondInputRef,
                onToggle: onToggleSecond,
                onChangeValue: onChangeSecondValue,
                onCommitDate: onCommitSecondDate,
            });

            const handleToggleDouble = (opened: boolean, event: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    firstInputRef?.current?.contains((event.target as Node) || null) ||
                    secondInputRef?.current?.contains((event.target as Node) || null)
                        ? true
                        : opened;

                if (onToggleDouble) {
                    return onToggleDouble(isCalendarOpen, event);
                }

                setIsInnerOpenDouble(isCalendarOpen);
            };

            const FirstCalendar = (
                <StyledCalendar
                    value={calendarFirstValue}
                    type={type}
                    eventList={eventList}
                    disabledList={disabledList}
                    min={min}
                    max={calendarSecondValue || max}
                    includeEdgeDates={includeEdgeDates}
                    isRange={false}
                    onChangeValue={(date) => {
                        handleCommitFirstDate(date, false, true);
                        setIsInnerOpenFirst(false);
                        if (!calendarSecondValue || secondValueError) {
                            rangeRef?.current?.secondTextField()?.current?.focus();
                            setIsInnerOpenSecond(true);
                        }
                    }}
                />
            );

            const SecondCalendar = (
                <StyledCalendar
                    value={calendarSecondValue}
                    type={type}
                    eventList={eventList}
                    disabledList={disabledList}
                    min={calendarFirstValue || min}
                    max={max}
                    includeEdgeDates={includeEdgeDates}
                    isRange={false}
                    onChangeValue={(date) => {
                        handleCommitSecondDate(date, false, true);

                        setIsInnerOpenSecond(false);
                        if (!calendarFirstValue || firstValueError) {
                            rangeRef?.current?.firstTextField()?.current?.focus();
                            setIsInnerOpenFirst(true);
                        }
                    }}
                />
            );

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
                        label={label}
                        leftHelper={leftHelper}
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
                        onSearchFirstValue={(_, date) => handleCommitFirstDate(String(date), true, false)}
                        onSearchSecondValue={(_, date) => handleCommitSecondDate(String(date), true, false)}
                        onFocusFirstTextfield={onFocusFirstTextfield}
                        onFocusSecondTextfield={onFocusSecondTextfield}
                        onBlurFirstTextfield={onBlurFirstTextfield}
                        onBlurSecondTextfield={onBlurSecondTextfield}
                        {...(!isDoubleCalendar && {
                            isOpenFirst: isOpenFirst || isInnerOpenFirst,
                            isOpenSecond: isOpenSecond || isInnerOpenSecond,
                            onToggleFirst: handleToggleFirst,
                            onToggleSecond: handleToggleSecond,
                            firstInputPopoverContent: FirstCalendar,
                            secondInputPopoverContent: SecondCalendar,
                            offset,
                            placement,
                            closeOnOverlayClick,
                        })}
                    />
                </>
            );

            useEffect(() => {
                setFirstInputRef(rangeRef.current?.firstTextField());
                setSecondInputRef(rangeRef.current?.secondTextField());
            }, [rangeRef.current]);

            if (isDoubleCalendar) {
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
                        <RangeDoubleDate
                            calendarValue={[calendarFirstValue, calendarSecondValue]}
                            target={RangeComponent}
                            isOpen={isOpenDouble || isInnerOpenDouble}
                            onToggle={handleToggleDouble}
                            onChangeStartOfRange={(firstDate) => {
                                handleCommitFirstDate(firstDate, false, true);
                                handleCommitSecondDate('');
                            }}
                            onChangeValue={([firstDate, secondDate]) => {
                                firstDate && handleCommitFirstDate(firstDate, false, true);
                                secondDate && handleCommitSecondDate(secondDate, false, true);
                                if (firstDate && secondDate && !firstValueError && !secondValueError) {
                                    setIsInnerOpenDouble(false);
                                }
                            }}
                        />
                    </Root>
                );
            }

            return (
                <Root
                    view={view}
                    size={size}
                    className={cx(classes.datePickerRoot, className)}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    {...rest}
                >
                    {RangeComponent}
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
