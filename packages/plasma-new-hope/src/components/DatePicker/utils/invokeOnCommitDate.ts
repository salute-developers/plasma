import type { DateInfo } from '../../Calendar/Calendar.types';
import type { FormattedDateValues, OnCommitDateCallbackUnion } from '../DatePickerBase.types';

type InvokeOnCommitDateArgs = {
    callback: OnCommitDateCallbackUnion;
    value: Date | string;
    formattedValues: FormattedDateValues;
};

/**
 * Вызывает onCommitDate callback с учётом его сигнатуры.
 * Если callback принимает 2 аргумента - использует новую сигнатуру (value, formattedValues).
 * Если больше - использует deprecated сигнатуру (value, error, success, dateInfo, originalDate, isoDate).
 */
export const invokeOnCommitDate = ({ callback, value, formattedValues }: InvokeOnCommitDateArgs): void => {
    const { error, success, dateInfo, originalDate, isoDate } = formattedValues;

    if (callback.length <= 2) {
        // Новая сигнатура: (value, formattedValues) => void
        (callback as (value: Date | string, formattedValues: FormattedDateValues) => void)(value, formattedValues);
    } else {
        // Deprecated сигнатура: (value, error, success, dateInfo, originalDate, isoDate) => void
        (callback as (
            value: Date | string,
            error?: boolean,
            success?: boolean,
            dateInfo?: DateInfo,
            originalDate?: Date,
            isoDate?: string,
        ) => void)(value, error, success, dateInfo, originalDate, isoDate);
    }
};
