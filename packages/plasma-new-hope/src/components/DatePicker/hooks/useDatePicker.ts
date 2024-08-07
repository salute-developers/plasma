import { ChangeEvent, SyntheticEvent } from 'react';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import { formatCalendarValue, formatInputValue, getDateFromFormat, getMaskedDateOnInput } from '../utils/dateHelper';
import type { DateInfo } from '../../Calendar/Calendar.types';

export const useDatePicker = ({
    currentValue,
    setInputValue,
    setCalendarValue,
    setIsInnerOpen,
    dateFormatDelimiter,
    format,
    disabled,
    readOnly,
    maskWithFormat,
    valueError,
    valueSuccess,
    inputRef,
    onToggle,
    onChangeValue,
    onCommitDate,
}: UseDatePickerProps) => {
    const datePickerErrorClass = valueError ? classes.datePickerError : undefined;
    const datePickerSuccessClass = valueSuccess ? classes.datePickerSuccess : undefined;

    const handleToggle = (opened: boolean, event: SyntheticEvent | Event) => {
        if (disabled || readOnly) {
            return;
        }

        const isCalendarOpen = event.target === inputRef?.current ? true : opened;

        if (onToggle) {
            return onToggle(isCalendarOpen, event);
        }

        setIsInnerOpen(isCalendarOpen);
    };

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
            return;
        }
        const { value } = event.target;

        const newValue = maskWithFormat
            ? getMaskedDateOnInput(value, format, dateFormatDelimiter(), currentValue)
            : value;

        if (!format) {
            setCalendarValue(formatCalendarValue(newValue));
        } else if (newValue?.length === format.length) {
            setCalendarValue(formatCalendarValue(newValue, format));
        }

        setInputValue(formatInputValue(newValue, format));

        onChangeValue?.(event, newValue);
    };

    const handleCommitDate = (
        date?: Date | string,
        applyFormat?: boolean,
        isCalendarValue?: boolean,
        dateInfo?: DateInfo,
    ) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setCalendarValue(undefined);
            setInputValue('');

            return onCommitDate?.('', false, true);
        }

        if (isCalendarValue) {
            setCalendarValue(formatCalendarValue(date, format));
            setInputValue(formatInputValue(date, format));

            return onCommitDate?.(date, false, true, dateInfo);
        }

        const formatString = applyFormat ? format : undefined;

        const { value: newDate, isError, isSuccess } = getDateFromFormat(date, formatString);

        setCalendarValue(formatCalendarValue(newDate, format));
        setInputValue(formatInputValue(newDate, format));

        onCommitDate?.(newDate, isError, isSuccess);
    };

    return {
        datePickerErrorClass,
        datePickerSuccessClass,
        handleToggle,
        handleChangeValue,
        handleCommitDate,
    };
};
