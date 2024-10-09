import { ChangeEvent, SyntheticEvent } from 'react';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import {
    formatCalendarValue,
    formatInputValue,
    getDateFromFormat,
    getMaskedDateOnInput,
    validateDateWithFullMonth,
} from '../utils/dateHelper';
import type { DateInfo } from '../../Calendar/Calendar.types';

export const useDatePicker = ({
    currentValue,
    setInputValue,
    setCalendarValue,
    setIsInnerOpen,
    dateFormatDelimiter,
    format,
    lang = 'ru',
    disabled,
    readOnly,
    maskWithFormat,
    valueError,
    valueSuccess,
    inputRef,
    name,
    onToggle,
    onChangeValue,
    onCommitDate,
    onChange,
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
            setInputValue(formatInputValue({ value: newValue, format, lang }));
            onChangeValue?.(event, newValue);
            onChange?.({ target: { value: newValue, name } });

            return;
        }

        const { hasMonthFullName, isValidMonth, isLengthEqual } = validateDateWithFullMonth({
            currentValue: newValue,
            format,
            lang,
        });

        if ((!hasMonthFullName && newValue?.length === format?.length) || (isValidMonth && isLengthEqual)) {
            setCalendarValue(formatCalendarValue(newValue, format, lang));
        }

        setInputValue(
            formatInputValue({ value: newValue, format, lang, hasMonthFullName, isValidMonth, isLengthEqual }),
        );

        onChangeValue?.(event, newValue);
        onChange?.({ target: { value: newValue, name } });
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
            const formattedInputValue = formatInputValue({ value: date, format, lang });

            setCalendarValue(formatCalendarValue(date, format, lang));
            setInputValue(formattedInputValue);

            onCommitDate?.(date, false, true, dateInfo);
            onChangeValue?.(null, formattedInputValue);
            onChange?.({ target: { value: formattedInputValue, name } });

            return;
        }

        const formatString = applyFormat ? format : undefined;

        const { value: newDate, isError, isSuccess } = getDateFromFormat(date, formatString, lang);
        const formattedInputValue = formatInputValue({ value: newDate, format, lang });

        setCalendarValue(formatCalendarValue(newDate, format, lang));
        setInputValue(formattedInputValue);

        onCommitDate?.(newDate, isError, isSuccess);
        onChangeValue?.(null, formattedInputValue);
        onChange?.({ target: { value: formattedInputValue, name } });
    };

    return {
        datePickerErrorClass,
        datePickerSuccessClass,
        handleToggle,
        handleChangeValue,
        handleCommitDate,
    };
};
