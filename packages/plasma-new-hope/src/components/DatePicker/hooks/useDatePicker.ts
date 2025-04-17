import type { ChangeEvent } from 'react';
import { customDayjs } from 'src/utils/datejs';

import { classes } from '../DatePicker.tokens';
import type { UseDatePickerProps } from '../DatePickerBase.types';
import type { CalendarValueType, DateInfo } from '../../Calendar/Calendar.types';
import { formatStaticValue, formatValueOnInput, normalizeDates } from '../utils/valueFormatter';
import { QUARTER_NAMES } from '../../Calendar/utils';

export const useDatePicker = ({
    currentValue,
    selectionBeforeChange,
    format,
    lang = 'ru',
    disabled,
    readOnly,
    valueError,
    valueSuccess,
    name,
    type,
    formatStructure,
    currentKeyPressed,
    inputRef,
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
        if (disabled || readOnly || !inputRef) {
            return;
        }
        const { value } = event.target;

        const selectionStart = event.target.selectionStart || 0;

        const { formattedDate, isoDate, originalDate } = formatValueOnInput({
            value,
            previousValue: currentValue,
            format,
            formatStructure,
            delimiter: dateFormatDelimiter(),
            lang,
            currentKeyPressed,
            selectionStart,
            selectionBeforeChange,
            inputRef,
        });

        if (originalDate) {
            const { normalizedDate, formattedNormalizedDate } = normalizeDates({
                originalDate,
                lang,
                format,
                includeEdgeDates,
                min,
                max,
            });

            setCorrectDates({ calendar: normalizedDate, input: formattedNormalizedDate });

            const dateInfo = getQuarterInfo(normalizedDate);

            onCommitDate?.(
                formattedNormalizedDate,
                false,
                true,
                dateInfo,
                normalizedDate,
                normalizedDate.toISOString(),
            );

            setCalendarValue(normalizedDate);
            setInputValue(formattedNormalizedDate);

            onChangeValue?.(event, formattedNormalizedDate, normalizedDate, isoDate);
            onChange?.({
                target: {
                    value: formattedNormalizedDate,
                    originalDate: normalizedDate,
                    isoDate: normalizedDate.toISOString(),
                    name,
                },
            });

            return;
        }

        if (formattedDate === '') {
            setCorrectDates({ calendar: undefined, input: '' });
        }

        setCalendarValue(originalDate);
        setInputValue(formattedDate);

        onChangeValue?.(event, formattedDate, originalDate, isoDate);
        onChange?.({ target: { value: formattedDate, originalDate, isoDate, name } });
    };

    const handleCalendarPick = (date?: Date | null, dateInfo?: DateInfo) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setInputValue('');
            setCalendarValue(date);
            setCorrectDates({ calendar: date || undefined, input: '' });

            onChangeValue?.(null, '', date, '');
            onChange?.({ target: { value: '', originalDate: date, isoDate: '', name } });
            onCommitDate?.('', false, true, dateInfo, date || undefined, '');

            return;
        }

        customDayjs.locale(lang);
        const formattedDate = customDayjs(date).format(format);
        const isoDate = date.toISOString();

        setCalendarValue(date);
        setInputValue(formattedDate);
        setCorrectDates({ calendar: date, input: formattedDate });

        onChangeValue?.(null, formattedDate, date, isoDate);
        onChange?.({ target: { value: formattedDate, originalDate: date, isoDate, name } });
        onCommitDate?.(formattedDate, false, true, dateInfo, date, isoDate);
    };

    const handleSearch = (date: string) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            setCalendarValue(undefined);
            setInputValue('');

            return onCommitDate?.('', false, true, undefined, undefined, '');
        }

        const { formattedDate, isoDate, originalDate } = formatStaticValue({
            value: date,
            format,
            formatStructure,
            delimiter: dateFormatDelimiter(),
            lang,
        });

        if (originalDate) {
            const dateInfo = getQuarterInfo(originalDate);

            onCommitDate?.(formattedDate, false, true, dateInfo, originalDate, isoDate);
        }
    };

    const updateExternalDate = (externalDate: Date | string | undefined) => {
        const { formattedDate, originalDate } = formatStaticValue({
            value: externalDate || null,
            format,
            formatStructure,
            delimiter: dateFormatDelimiter(),
            lang,
            min,
            max,
            includeEdgeDates,
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
