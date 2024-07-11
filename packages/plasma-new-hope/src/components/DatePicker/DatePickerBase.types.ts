import type { Dispatch, MutableRefObject, SetStateAction, SyntheticEvent, ChangeEvent } from 'react';

export type DatePickerdVariationProps = {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
};

export type UseDatePickerProps = {
    currentValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    setCalendarValue: Dispatch<SetStateAction<Date | undefined>>;
    setIsInnerOpen: Dispatch<SetStateAction<boolean>>;
    dateFormatDelimiter: () => string;
    format?: string;
    disabled?: boolean;
    readOnly?: boolean;
    maskWithFormat?: boolean;
    valueError?: boolean;
    valueSuccess?: boolean;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    onChangeValue?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
    onCommitDate?: (value: Date | string, error?: boolean, success?: boolean) => void;
};
