import { ChangeEvent, SyntheticEvent } from 'react';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import { formatCalendarValue, formatInputValue, getDateFromFormat, getMaskedDateOnInput } from '../utils/dateHelper';
import type { DateInfo } from '../../Calendar/Calendar.types';
import { customDayjs } from '../../../utils/datejs';

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
            setInputValue(formatInputValue({ value: newValue, format, lang }));
            onChangeValue?.(event, newValue);

            return;
        }

        /**
         * NOTE: если в формате даты есть месяц в полном названии или сокращенном,
         * нужно дополнительно проводить валидацию на полноту введенной даты.
         * Иначе dayjs циклически будет пытаться отформатировать некорректную дату.
         */
        const hasMonthFullName = /M{3,4}/g.test(format);
        let isValidMonth;
        let isLengthEqual;

        if (hasMonthFullName) {
            customDayjs.locale(lang);

            const firstIndexOfMonth = format.indexOf('M');
            const lastIndexOfMonth = newValue.indexOf(dateFormatDelimiter(), firstIndexOfMonth);

            const fullMonthName = !lastIndexOfMonth
                ? newValue.slice(firstIndexOfMonth)
                : newValue.slice(firstIndexOfMonth, lastIndexOfMonth);

            const monthFormatting = format.replace(/[^M]/g, '');

            isValidMonth = customDayjs(`01 ${fullMonthName} 1970`, `DD ${monthFormatting} YYYY`, true).isValid();
            isLengthEqual = format.length - monthFormatting.length === newValue.length - fullMonthName.length;
        }

        if ((!hasMonthFullName && newValue?.length === format?.length) || (isValidMonth && isLengthEqual)) {
            setCalendarValue(formatCalendarValue(newValue, format, lang));
        }

        setInputValue(
            formatInputValue({ value: newValue, format, lang, hasMonthFullName, isValidMonth, isLengthEqual }),
        );

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
            setCalendarValue(formatCalendarValue(date, format, lang));
            setInputValue(formatInputValue({ value: date, format, lang }));
            onCommitDate?.(date, false, true, dateInfo);

            return;
        }

        const formatString = applyFormat ? format : undefined;

        const { value: newDate, isError, isSuccess } = getDateFromFormat(date, formatString, lang);

        setCalendarValue(formatCalendarValue(newDate, format, lang));
        setInputValue(formatInputValue({ value: newDate, format, lang }));

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
