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

import type { DatePickerRangeProps } from './DatePicker.types';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { LeftHelper, StyledLabel, StyledRange, base } from './DatePicker.styles';
import { RangeDatePopover } from './RangeDatePopover/RangeDatePopover';

export const datePickerRangeRoot = (
    Root: RootProps<HTMLDivElement, Omit<DatePickerRangeProps, 'isOpen' | 'defaultValue' | 'onChangeValue'>>,
) =>
    forwardRef<RangeInputRefs, DatePickerRangeProps>(
        (
            {
                className,

                isDoubleCalendar = false,
                isOpen = false,

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
            const [isInnerOpen, setIsInnerOpen] = useState(isOpen);

            const [calendarFirstValue, setCalendarFirstValue] = useState(formatCalendarValue(defaultFirstDate, format));
            const [inputFirstValue, setInputFirstValue] = useState(formatInputValue(defaultFirstDate, format));

            const [calendarSecondValue, setCalendarSecondValue] = useState(
                formatCalendarValue(defaultSecondDate, format),
            );
            const [inputSecondValue, setInputSecondValue] = useState(formatInputValue(defaultSecondDate, format));

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
                    />
                </>
            );

            useEffect(() => {
                setFirstInputRef(rangeRef.current?.firstTextField());
                setSecondInputRef(rangeRef.current?.secondTextField());
            }, [rangeRef.current]);

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
                        isOpen={isOpen || isInnerOpen}
                        includeEdgeDates={includeEdgeDates}
                        eventList={eventList}
                        disabledList={disabledList}
                        min={min}
                        max={max}
                        placement={placement}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        offset={offset}
                        type={type}
                        onToggle={handleToggle}
                        isDoubleCalendar={isDoubleCalendar}
                        onChangeStartOfRange={(firstDate) => {
                            handleCommitFirstDate(firstDate, false, true);
                            handleCommitSecondDate('');
                        }}
                        onChangeValue={([firstDate, secondDate]) => {
                            firstDate && handleCommitFirstDate(firstDate, false, true);
                            secondDate && handleCommitSecondDate(secondDate, false, true);
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
