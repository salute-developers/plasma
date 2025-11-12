import { useMemo, useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { customDayjs } from 'src/utils/datejs';
import { QUARTER_NAMES } from 'src/components/Calendar/utils';
import type { TimePickerGridChangeEvent } from 'src/components/TimePickerGrid/TimePickerGrid.types';
import { getDateFormatDelimiter } from 'src/components/DatePicker/utils/dateHelper';

import type { CalendarValueType, DateInfo, DateType } from '../../Calendar/Calendar.types';
import { classes } from '../DateTimePicker.tokens';
import type { UseDateTimePickerArgs } from '../DateTimePicker.types';
import { getMaskedValue } from '../utils/getMaskedValue';
import { getFormattedDateTime, normalizeDateTime } from '../utils';

type GetFormattedCorrectInputArgs = {
    formattedDate: string;
    originalDate: Date | undefined;
    dateValue: Date | undefined;
    timeValue: Date | undefined;
};

export const useDateTimePicker = ({
    valueError,
    valueSuccess,
    type,
    lang = 'ru',
    disabled,
    readOnly,
    outerValue,
    defaultDate,
    maskWithFormat,
    dateFormat = 'DD.MM.YYYY',
    timeFormat = 'HH:mm:ss',
    dateTimeSeparator = ' ',
    inputRef,
    min,
    max,
    includeEdgeDates,
    dateOnTimeSelectOnly,
    preserveInvalidOnBlur,
    onChangeValue,
    onCommitDate,
    onBlur,
}: UseDateTimePickerArgs) => {
    const errorClass = valueError ? classes.error : undefined;
    const successClass = valueSuccess ? classes.success : undefined;

    const dateFormatDelimiter = useMemo(() => getDateFormatDelimiter(dateFormat), [dateFormat]);
    const timeFormatDelimiter = useMemo(() => getDateFormatDelimiter(timeFormat), [timeFormat]);

    const delimiters = [dateFormatDelimiter, timeFormatDelimiter, dateTimeSeparator];

    const format = dateFormat + dateTimeSeparator + timeFormat;
    const timeColumnsCount = timeFormat?.split(timeFormatDelimiter).length || 2;

    const [innerDate, setInnerDate] = useState<string | DateType>(defaultDate || '');
    const dateVisibleValue = outerValue ?? innerDate;

    const initialValues = getFormattedDateTime({
        value: dateVisibleValue,
        lang,
        format,
        includeEdgeDates,
        min,
        max,
        dateFormat,
        timeFormat,
    });

    const [correctDates, setCorrectDates] = useState({
        input: initialValues.formattedDate,
        calendar: initialValues.dateValue,
        time: initialValues.timeValue,
    });

    const calendarGridValue: DateType = initialValues.dateValue;
    const timeGridValue = initialValues.timeValue;

    customDayjs.locale(lang);
    const timeVisibleValue = timeGridValue ? customDayjs(timeGridValue).format(timeFormat) : '';
    const inputValue = initialValues.formattedDate;

    const getQuarterInfo = (originalDate?: Date) => {
        if (type !== 'Quarters' || !originalDate) {
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

    const isDateEqualEdge = (dateEdge?: Date) => {
        if (!dateEdge) {
            return false;
        }

        const normalizedEdgeDate = customDayjs(dateEdge);
        normalizedEdgeDate.set('hours', 0);
        normalizedEdgeDate.set('minutes', 0);
        normalizedEdgeDate.set('seconds', 0);

        const normalizedCurrentDate = customDayjs(correctDates.calendar);
        normalizedCurrentDate.set('hours', 0);
        normalizedCurrentDate.set('minutes', 0);
        normalizedCurrentDate.set('seconds', 0);

        if (normalizedCurrentDate.isSame(normalizedEdgeDate)) {
            return true;
        }

        return false;
    };

    const getFormattedCorrectInput = ({
        originalDate,
        formattedDate,
        dateValue,
        timeValue,
    }: GetFormattedCorrectInputArgs) => {
        if (originalDate || formattedDate === '') {
            return {
                input: formattedDate,
            };
        }

        if (dateValue && timeValue) {
            return {
                input: formattedDate,
            };
        }

        if (dateValue && !timeValue) {
            return {
                input: formattedDate.slice(0, dateFormat?.length),
            };
        }

        return {
            input: '',
        };
    };

    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) {
            return;
        }
        const { value, selectionStart } = event.target;

        const { formattedValue, selectionStart: newSelectionStart } = maskWithFormat
            ? getMaskedValue({ value, format, delimiters, prevValue: inputValue, selectionStart })
            : { formattedValue: value, selectionStart };

        const { formattedDate, isoDate, originalDate, dateValue, timeValue } = getFormattedDateTime({
            value: formattedValue,
            lang,
            format,
            dateFormat,
            timeFormat,
            includeEdgeDates,
            min,
            max,
        });

        const { input: inputCorrectValue } = getFormattedCorrectInput({
            originalDate,
            formattedDate,
            dateValue,
            timeValue,
        });

        setCorrectDates((prevCorrectDates) => ({
            ...prevCorrectDates,
            input: inputCorrectValue,
            calendar: inputCorrectValue ? dateValue || prevCorrectDates.calendar : undefined,
            time: inputCorrectValue ? timeValue || prevCorrectDates.time : undefined,
        }));
        setInnerDate(formattedDate);

        if (originalDate) {
            const quarterInfo = getQuarterInfo(originalDate);

            if (onCommitDate) {
                onCommitDate(formattedDate, { quarterInfo, originalDate, isoDate });
            }
        }

        if (onChangeValue) {
            onChangeValue(event, formattedDate, { originalDate, isoDate });
        }

        requestAnimationFrame(() => {
            if (inputRef.current) {
                inputRef.current.setSelectionRange(newSelectionStart, newSelectionStart);
            }
        });
    };

    const handleSearch = (date?: string) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            if (onCommitDate) {
                onCommitDate('', { quarterInfo: undefined, originalDate: undefined, isoDate: '' });
            }

            return;
        }

        const { formattedDate, isoDate, originalDate } = getFormattedDateTime({
            value: date,
            lang,
            format,
            dateFormat,
            timeFormat,
            includeEdgeDates,
            min,
            max,
        });

        const quarterInfo = getQuarterInfo(originalDate);

        if (onCommitDate) {
            onCommitDate(formattedDate, { quarterInfo, originalDate, isoDate });
        }
    };

    const handleCalendarPick = (date?: Date | null, quarterInfo?: DateInfo) => {
        if (disabled || readOnly) {
            return;
        }

        if (!date) {
            return;
        }

        customDayjs.locale(lang);
        let rawDate = customDayjs(date);

        if (correctDates.time) {
            const correctTimeDate = customDayjs(correctDates.time);
            const correctHours = correctTimeDate.get('hours');
            const correctMinutes = correctTimeDate.get('minutes');
            const correctSeconds = correctTimeDate.get('seconds');

            rawDate = rawDate.set('hours', correctHours).set('minutes', correctMinutes).set('seconds', correctSeconds);
        }

        const { normalizedDate, formattedNormalizedDate } = normalizeDateTime({
            originalDate: rawDate.toDate(),
            lang,
            format,
            includeEdgeDates,
            min,
            max,
        });

        const isoDate = normalizedDate.toISOString();

        setCorrectDates((prevCorrectDates) => ({
            ...prevCorrectDates,
            input: formattedNormalizedDate,
            calendar: normalizedDate,
            time: normalizedDate,
        }));
        setInnerDate(formattedNormalizedDate);

        if (onCommitDate) {
            onCommitDate(formattedNormalizedDate, { quarterInfo, originalDate: normalizedDate, isoDate });
        }

        if (onChangeValue) {
            onChangeValue(null, formattedNormalizedDate, { originalDate: normalizedDate, isoDate });
        }
    };

    const handleTimePick = (time?: TimePickerGridChangeEvent) => {
        if (disabled || readOnly) {
            return;
        }

        if (!time?.value) {
            return;
        }

        customDayjs.locale(lang);

        let rawDate: Dayjs;
        if (!correctDates.calendar) {
            if (dateOnTimeSelectOnly) {
                rawDate = customDayjs(dateOnTimeSelectOnly);
            } else {
                rawDate = customDayjs();
            }
        } else {
            rawDate = customDayjs(correctDates.calendar);
        }

        const { timeValues } = time;

        rawDate = rawDate
            .set('hours', timeValues.hour || 0)
            .set('minutes', timeValues.minute || 0)
            .set('seconds', timeValues.second || 0);

        const { normalizedDate, formattedNormalizedDate } = normalizeDateTime({
            originalDate: rawDate.toDate(),
            lang,
            format,
            includeEdgeDates,
            min,
            max,
        });

        const isoDate = normalizedDate.toISOString();

        const quarterInfo = getQuarterInfo(normalizedDate);

        setCorrectDates((prevCorrectDates) => ({
            ...prevCorrectDates,
            input: formattedNormalizedDate,
            calendar: normalizedDate,
            time: normalizedDate,
        }));
        setInnerDate(formattedNormalizedDate);

        if (onCommitDate) {
            onCommitDate(formattedNormalizedDate, { quarterInfo, originalDate: normalizedDate, isoDate });
        }

        if (onChangeValue) {
            onChangeValue(null, formattedNormalizedDate, { originalDate: normalizedDate, isoDate });
        }
    };

    const updateExternalDate = (externalDate: Date | string | undefined) => {
        const { formattedDate, originalDate, dateValue, timeValue } = getFormattedDateTime({
            value: externalDate,
            lang,
            format,
            dateFormat,
            timeFormat,
            includeEdgeDates,
            min,
            max,
        });
        const { input: inputCorrectValue } = getFormattedCorrectInput({
            originalDate,
            formattedDate,
            dateValue,
            timeValue,
        });

        setCorrectDates((prevCorrectDates) => ({
            ...prevCorrectDates,
            input: inputCorrectValue,
            calendar: inputCorrectValue ? dateValue || prevCorrectDates.calendar : undefined,
            time: inputCorrectValue ? timeValue || prevCorrectDates.time : undefined,
        }));
        setInnerDate(formattedDate);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (!preserveInvalidOnBlur) {
            customDayjs.locale(lang);

            const originalDate = correctDates.calendar;

            if (!originalDate) {
                if (onChangeValue) {
                    onChangeValue(event, correctDates.input, {
                        originalDate: undefined,
                        isoDate: '',
                    });
                }

                if (onCommitDate) {
                    onCommitDate(correctDates.input, {
                        quarterInfo: undefined,
                        originalDate: undefined,
                        isoDate: '',
                    });
                }

                return;
            }

            if (correctDates.time) {
                originalDate.setHours(
                    correctDates.time.getHours(),
                    correctDates.time.getMinutes(),
                    correctDates.time.getSeconds(),
                );
            }

            setInnerDate(originalDate);

            if (!timeGridValue) {
                if (correctDates.calendar) {
                    setInnerDate(correctDates.calendar);
                }
            }

            if (onChangeValue) {
                onChangeValue(event, correctDates.input, {
                    originalDate,
                    isoDate: originalDate.toISOString(),
                });
            }

            if (onCommitDate) {
                const quarterInfo = getQuarterInfo(originalDate);

                onCommitDate(correctDates.input, {
                    quarterInfo,
                    originalDate,
                    isoDate: originalDate.toISOString(),
                });
            }
        }

        if (onBlur) {
            onBlur(event);
        }
    };

    return {
        format,
        dateVisibleValue,
        calendarGridValue,
        inputValue,
        timeVisibleValue,
        timeColumnsCount,
        errorClass,
        successClass,
        handleChangeValue,
        handleSearch,
        handleCalendarPick,
        handleTimePick,
        handleBlur,
        updateExternalDate,
        getQuarterInfo,
        isDateEqualEdge,
    };
};
