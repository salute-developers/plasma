import type { ChangeEvent } from 'react';
import { customDayjs } from 'src/utils/datejs';
import { QUARTER_NAMES } from 'src/components/Calendar/utils';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import type { CalendarValueType, DateInfo } from '../../Calendar/Calendar.types';
import { getFormattedDates, getMaskedDateOnInput } from '../utils';

export const useDatePicker = ({
    currentValue,
    format,
    lang = 'ru',
    disabled,
    readOnly,
    valueError,
    valueSuccess,
    name,
    type,
    min,
    max,
    includeEdgeDates,
    maskWithFormat,
    dateFormatDelimiter,
    setCorrectDates,
    setInputValue,
    setCalendarValue,
    onChangeValue,
    onCommitDate,
    onChange,
}: UseDatePickerProps) => {
    const datePickerErrorClass = valueError ? classes.datePickerError : undefined;
    const datePickerSuccessClass = valueSuccess ? classes.datePickerSuccess : undefined;

    const getQuarterInfo = (originalDate: Date) => {
        if (type !== 'Quarters') {
            return;
        }

        const endQuarter = new Date(originalDate);

        endQuarter.setMonth(originalDate.getMonth() + 3);
        endQuarter.setDate(0);

        customDayjs.locale(lang);
        const quarterIndex = customDayjs(originalDate).quarter() - 1;

        return {
            name: QUARTER_NAMES[quarterIndex],
            fullValue: [originalDate, endQuarter] as CalendarValueType,
        };
    };

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
            return;
        }
        const { value } = event.target;

        const newValue = maskWithFormat
            ? getMaskedDateOnInput(value, format, dateFormatDelimiter, currentValue)
            : value;

        const { formattedDate, isoDate, originalDate } = getFormattedDates({
            value: newValue,
            lang,
            delimiter: dateFormatDelimiter,
            format,
            includeEdgeDates,
            min,
            max,
        });

        if (originalDate) {
            setCorrectDates({ calendar: originalDate, input: formattedDate });

            const dateInfo = getQuarterInfo(originalDate);

            if (onCommitDate) {
                onCommitDate(formattedDate, false, true, dateInfo, originalDate, isoDate);
            }

            setCalendarValue(originalDate);
            setInputValue(formattedDate);

            if (onChangeValue) {
                onChangeValue(event, formattedDate, originalDate, isoDate);
            }

            if (onChange) {
                onChange({
                    target: {
                        value: formattedDate,
                        originalDate,
                        isoDate,
                        name,
                    },
                });
            }

            return;
        }

        if (formattedDate === '') {
            setCorrectDates({ calendar: undefined, input: '' });
        }

        setCalendarValue(originalDate);
        setInputValue(formattedDate);

        if (onChangeValue) {
            onChangeValue(event, formattedDate, originalDate, isoDate);
        }

        if (onChange) {
            onChange({ target: { value: formattedDate, originalDate, isoDate, name } });
        }
    };

    const handleSearch = (date: string) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setCalendarValue(undefined);
            setInputValue('');

            if (onCommitDate) {
                onCommitDate('', false, true, undefined, undefined, '');
            }

            return;
        }

        const { formattedDate, isoDate, originalDate } = getFormattedDates({
            value: date,
            lang,
            delimiter: dateFormatDelimiter,
            format,
            includeEdgeDates,
            min,
            max,
        });

        if (originalDate) {
            const dateInfo = getQuarterInfo(originalDate);

            if (onCommitDate) {
                onCommitDate(formattedDate, false, true, dateInfo, originalDate, isoDate);
            }
        }
    };

    const handleCalendarPick = (date?: Date | null, dateInfo?: DateInfo) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setInputValue('');
            setCalendarValue(date);
            setCorrectDates({ calendar: date || undefined, input: '' });

            if (onChangeValue) {
                onChangeValue(null, '', date, '');
            }
            if (onChange) {
                onChange({ target: { value: '', originalDate: date, isoDate: '', name } });
            }
            if (onCommitDate) {
                onCommitDate('', false, true, dateInfo, date || undefined, '');
            }

            return;
        }

        customDayjs.locale(lang);
        const formattedDate = customDayjs(date).format(format);
        const isoDate = date.toISOString();

        setCalendarValue(date);
        setInputValue(formattedDate);
        setCorrectDates({ calendar: date, input: formattedDate });

        if (onChangeValue) {
            onChangeValue(null, formattedDate, date, isoDate);
        }
        if (onChange) {
            onChange({ target: { value: formattedDate, originalDate: date, isoDate, name } });
        }
        if (onCommitDate) {
            onCommitDate(formattedDate, false, true, dateInfo, date, isoDate);
        }
    };

    const updateExternalDate = (externalDate: Date | string | undefined) => {
        const { formattedDate, originalDate } = getFormattedDates({
            value: externalDate || null,
            lang,
            delimiter: dateFormatDelimiter,
            format,
            includeEdgeDates,
            min,
            max,
        });

        setInputValue(formattedDate);
        setCalendarValue(originalDate);

        if (originalDate) {
            setCorrectDates({ calendar: originalDate, input: formattedDate });
        }

        if (formattedDate === '') {
            setCorrectDates({ calendar: undefined, input: '' });
        }
    };

    return {
        datePickerErrorClass,
        datePickerSuccessClass,
        handleChangeValue,
        handleSearch,
        handleCalendarPick,
        updateExternalDate,
    };
};
