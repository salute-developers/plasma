import type { MutableRefObject } from 'react';

import { customDayjs } from '../../../utils/datejs';
import type { SelectionBeforeChange } from '../hooks/useKeyboardNavigation';

import { dateSymbolsMap } from './formatHelper';
import type { DateInfo, DateTypes, FormatStructure } from './formatHelper';
import { checkFullMonthEntered, formatFullMonthName } from './monthFullNameFormatter';
import type { Langs } from './monthFullNameFormatter';

export type CleanDateStructure = {
    [key in DateTypes]: string;
};

type FormatStaticValueArgs = {
    value: Date | string | null;
    formatStructure: FormatStructure | null;
    delimiter: string;
    lang?: Langs;
    format?: string;
    includeEdgeDates?: boolean;
    min?: Date;
    max?: Date;
};

type FormatValueOnInputArgs = {
    value: string | null;
    previousValue: string | null;
    formatStructure: FormatStructure | null;
    delimiter: string;
    selectionStart: number;
    selectionBeforeChange: SelectionBeforeChange;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    lang?: Langs;
    format?: string;
    currentKeyPressed?: string;
};

type HandleRemoveSymbolArgs = {
    value: string;
    delimiter: string;
    previousValue: string | null;
    selectionStart: number;
    prevDelimiterIndex: number;
    nextDelimiterIndex: number;
    delimiterNearIndex: number;
    sliceIndex: number;
    newSelectionStart: number;
    inputRef: MutableRefObject<HTMLInputElement | null>;
};

type NormalizeDatesArgs = {
    originalDate: Date;
    lang: Langs;
    includeEdgeDates?: boolean;
    format?: string;
    min?: Date;
    max?: Date;
};

const initialValueStructure = {
    isoDate: '',
    originalDate: undefined,
    formattedDate: '',
};

const dateRegExp = new RegExp('[^\\d]', 'g');

const getOriginalDates = (value: Date | string, lang: string, format?: string) => {
    customDayjs.locale(lang);

    if (value instanceof Date) {
        return {
            isoDate: new Date(value).toISOString(),
            originalDate: new Date(value),
        };
    }

    if (customDayjs(value, format).locale(lang).isValid()) {
        const isoDate = customDayjs(value, format).toISOString();
        const originalDate = customDayjs(value, format).toDate();

        return { isoDate, originalDate };
    }

    return { isoDate: '', originalDate: undefined };
};

const formatDateItemLength = (value: string, dateInfo: DateInfo) => {
    if (value.length > dateInfo.length) {
        return value.slice(0, dateInfo.length);
    }

    return value;
};

const isDateItemEntered = (dateInfo: DateInfo, currentDateItem: string, lang: Langs) => {
    return dateInfo.type === dateSymbolsMap.M && !dateInfo.isNumeric
        ? checkFullMonthEntered({ monthName: currentDateItem, lang, monthFormatLenght: dateInfo.length })
        : currentDateItem.length === dateInfo.length;
};

export const normalizeDates = ({ originalDate, lang, format, includeEdgeDates, min, max }: NormalizeDatesArgs) => {
    let dateCandidate = originalDate;

    customDayjs.locale(lang);

    if (min && includeEdgeDates && min > originalDate) {
        dateCandidate = min;
    } else if (min && !includeEdgeDates && min >= originalDate) {
        dateCandidate = customDayjs(min).add(1, 'd').toDate();
    } else if (max && includeEdgeDates && max < originalDate) {
        dateCandidate = max;
    } else if (max && !includeEdgeDates && max <= originalDate) {
        dateCandidate = customDayjs(max).subtract(1, 'd').toDate();
    }

    const formattedDateCandidate = format ? customDayjs(dateCandidate).format(format) : dateCandidate.toString();

    return {
        normalizedDate: dateCandidate,
        formattedNormalizedDate: formattedDateCandidate,
    };
};

const handleRemoveSymbol = ({
    inputRef,
    value,
    delimiter,
    previousValue,
    selectionStart,
    prevDelimiterIndex,
    nextDelimiterIndex,
    delimiterNearIndex,
    sliceIndex,
    newSelectionStart,
}: HandleRemoveSymbolArgs) => {
    if (previousValue?.charAt(selectionStart) === delimiter) {
        if (previousValue?.charAt(prevDelimiterIndex) === delimiter) {
            return {
                ...initialValueStructure,
                formattedDate:
                    selectionStart < prevDelimiterIndex
                        ? previousValue.slice(0, sliceIndex)
                        : previousValue.slice(0, selectionStart),
            };
        }

        if (previousValue?.charAt(nextDelimiterIndex) === delimiter || !previousValue?.charAt(nextDelimiterIndex)) {
            return {
                ...initialValueStructure,
                formattedDate: delimiterNearIndex > 0 ? previousValue.slice(0, delimiterNearIndex) : '',
            };
        }

        const cleanDate = previousValue.slice(0, sliceIndex) + previousValue.slice(sliceIndex + 1);

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.setSelectionRange(newSelectionStart, newSelectionStart);
            }
        }, 0);

        return {
            ...initialValueStructure,
            formattedDate: cleanDate || previousValue.slice(0, selectionStart),
        };
    }

    setTimeout(() => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(selectionStart, selectionStart);
        }
    }, 0);

    return {
        ...initialValueStructure,
        formattedDate: value || '',
    };
};

const getBeforeDateLength = (prevDateParts: Array<string>, formatStructure: FormatStructure, dateIndex: number) => {
    const beforeDatePartIndexes = Object.keys(formatStructure).filter(
        (beforeMonthIndex) => Number(beforeMonthIndex) < dateIndex,
    );

    return beforeDatePartIndexes.reduce((acc, index) => {
        acc += prevDateParts[Number(index)].length + 1;
        return acc;
    }, 0);
};

export const formatStaticValue = ({
    value,
    format,
    formatStructure,
    delimiter,
    lang,
    includeEdgeDates,
    min,
    max,
}: FormatStaticValueArgs) => {
    if (!value || !lang) {
        return initialValueStructure;
    }

    if (!formatStructure || !format || value instanceof Date) {
        const { isoDate, originalDate } = getOriginalDates(value, lang);

        if (originalDate) {
            const { normalizedDate, formattedNormalizedDate } = normalizeDates({
                originalDate,
                lang,
                format,
                includeEdgeDates,
                min,
                max,
            });

            return {
                formattedDate: formattedNormalizedDate,
                isoDate: normalizedDate.toISOString(),
                originalDate: normalizedDate,
            };
        }

        const formattedDate = format ? customDayjs(value).format(format) : value.toString();

        return {
            formattedDate,
            isoDate,
            originalDate,
        };
    }

    const dateParts = value.split(delimiter);
    const lastDateIndex = Math.max(...Object.keys(formatStructure).map(Number));

    const cleanDateStructure = Object.entries(formatStructure).reduce((acc, [dateIndex, dateInfo]) => {
        const parsedDateIndex = Number(dateIndex);
        const currentDateItem = dateParts?.[parsedDateIndex];
        if (parsedDateIndex >= dateParts.length) {
            return acc;
        }

        const dateType = dateInfo.type;

        let cleanDateItem =
            dateType === dateSymbolsMap.M && !dateInfo.isNumeric
                ? formatFullMonthName({
                      monthName: currentDateItem,
                      lang,
                      monthFormatLenght: dateInfo.length,
                  })
                : formatDateItemLength(currentDateItem.replace(dateRegExp, ''), dateInfo);

        const dateItemEntered = isDateItemEntered(dateInfo, cleanDateItem, lang);

        if (parsedDateIndex !== lastDateIndex && dateItemEntered) {
            cleanDateItem += delimiter;
        }

        acc = [...acc, cleanDateItem];

        return acc;
    }, [] as Array<string>);

    const cleanDate = cleanDateStructure.join('');
    const { isoDate, originalDate } = getOriginalDates(cleanDate, lang, format);

    if (originalDate) {
        const { normalizedDate, formattedNormalizedDate } = normalizeDates({
            originalDate,
            lang,
            format,
            includeEdgeDates,
            min,
            max,
        });

        return {
            formattedDate: formattedNormalizedDate,
            isoDate: normalizedDate.toISOString(),
            originalDate: normalizedDate,
        };
    }

    return {
        formattedDate: cleanDate,
        isoDate,
        originalDate,
    };
};

export const formatValueOnInput = ({
    value,
    previousValue,
    format,
    formatStructure,
    delimiter,
    lang,
    currentKeyPressed,
    selectionStart,
    inputRef,
    selectionBeforeChange,
}: FormatValueOnInputArgs) => {
    if (!value || !lang) {
        return initialValueStructure;
    }

    if (!formatStructure) {
        const { isoDate, originalDate } = getOriginalDates(value, lang);

        return {
            formattedDate: value,
            isoDate,
            originalDate,
        };
    }

    const { selectionStart: selectionStartBefore, selectionEnd: selectionEndBefore } = selectionBeforeChange;

    if (selectionStartBefore && selectionEndBefore && selectionStartBefore !== selectionEndBefore) {
        return formatStaticValue({ value, format, formatStructure, delimiter, lang });
    }

    if (currentKeyPressed === 'Backspace') {
        return handleRemoveSymbol({
            inputRef,
            value,
            delimiter,
            previousValue,
            selectionStart,
            prevDelimiterIndex: selectionStart - 1,
            nextDelimiterIndex: selectionStart + 1,
            delimiterNearIndex: selectionStart - 1,
            sliceIndex: selectionStart - 1,
            newSelectionStart: selectionStart - 1,
        });
    }

    if (currentKeyPressed === 'Delete') {
        return handleRemoveSymbol({
            inputRef,
            value,
            delimiter,
            previousValue,
            selectionStart,
            prevDelimiterIndex: selectionStart + 1,
            nextDelimiterIndex: selectionStart - 1,
            delimiterNearIndex: selectionStart,
            sliceIndex: selectionStart + 1,
            newSelectionStart: selectionStart + 1,
        });
    }

    let newSelectionStart = selectionStart;

    const dateParts = value.split(delimiter);
    const prevDateParts = previousValue?.split(delimiter) || [];
    const lastDateIndex = Math.max(...Object.keys(formatStructure).map(Number));

    const changedPartsArray = dateParts
        .map((part, index) => (part !== prevDateParts[index] ? index : undefined))
        .filter((item) => item !== undefined);
    const changedPartIndex = changedPartsArray?.[0];

    if (changedPartIndex === undefined) {
        const { isoDate, originalDate } = getOriginalDates(value, lang);

        return {
            formattedDate: value,
            isoDate,
            originalDate,
        };
    }

    let formattedDate = value;
    const currentFormatPart = formatStructure[changedPartIndex];

    const dateBeforeLength = getBeforeDateLength(prevDateParts, formatStructure, changedPartIndex);
    const startOfNextDatePart = getBeforeDateLength(prevDateParts, formatStructure, changedPartIndex + 1);

    const endOfDatePart = dateBeforeLength + (formatStructure[changedPartIndex]?.length || 0);

    const formattedPart =
        currentFormatPart.type === dateSymbolsMap.M && !currentFormatPart.isNumeric
            ? formatFullMonthName({
                  monthName: dateParts[changedPartIndex],
                  lang,
                  monthFormatLenght: currentFormatPart.length,
              })
            : formatDateItemLength(dateParts[changedPartIndex].replace(dateRegExp, ''), currentFormatPart);

    formattedDate = formattedDate.slice(0, dateBeforeLength) + formattedPart + formattedDate.slice(startOfNextDatePart);

    if (currentFormatPart.type === dateSymbolsMap.M && !currentFormatPart?.isNumeric) {
        if (isDateItemEntered(currentFormatPart, formattedPart, lang)) {
            formattedDate += delimiter;
            newSelectionStart += 1;
        } else {
            newSelectionStart = dateBeforeLength + formattedPart.length;
        }
    } else if (
        (currentFormatPart?.isNumeric || currentFormatPart.type !== dateSymbolsMap.M) &&
        selectionBeforeChange.selectionStart + 1 === endOfDatePart
    ) {
        if (
            previousValue?.charAt(selectionBeforeChange.selectionStart + 1) !== delimiter &&
            changedPartIndex !== lastDateIndex
        ) {
            formattedDate += delimiter;
        }

        newSelectionStart += 1;
    }

    const { isoDate, originalDate } = getOriginalDates(formattedDate, lang, format);

    setTimeout(() => {
        if (inputRef.current) {
            const newCursorPos = newSelectionStart;
            inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
        }
    }, 0);

    return {
        formattedDate,
        isoDate,
        originalDate,
    };
};
