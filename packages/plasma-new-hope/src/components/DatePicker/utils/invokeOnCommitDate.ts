import type {
    FormattedDateValues,
    OnCommitDateCallback,
    OnCommitDateCallbackDeprecated,
    OnCommitDateCallbackUnion,
} from '../DatePickerBase.types';

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

    if (typeof formattedValues === 'object' && formattedValues !== null) {
        // Новая сигнатура: (value, formattedValues) => void
        (callback as OnCommitDateCallback)(value, formattedValues);
    } else {
        // Deprecated сигнатура: (value, error, success, dateInfo, originalDate, isoDate) => void
        (callback as OnCommitDateCallbackDeprecated)(value, error, success, dateInfo, originalDate, isoDate);
    }
};
