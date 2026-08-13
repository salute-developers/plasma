import type { SyntheticEvent, InputHTMLAttributes, Dispatch, SetStateAction, ReactNode } from 'react';

import type { NumberInputProps } from '../../NumberInput.types';

type NumberInputFormatProps = Pick<
    NumberInputProps,
    | 'thousandSeparator'
    | 'decimalSeparator'
    | 'thousandsGroupStyle'
    | 'decimalScale'
    | 'fixedDecimalScale'
    | 'allowNegative'
    | 'allowLeadingZeros'
    | 'isAllowed'
>;

export type InputProps = {
    value: number | string | undefined;
    isInputFocused: boolean;
    setIsInputFocused: Dispatch<SetStateAction<boolean>>;
    setIsAnimationRun: Dispatch<SetStateAction<boolean>>;
    setInnerValue: Dispatch<SetStateAction<number | string | undefined>>;

    defaultValue?: number | string | undefined;
    min?: number;
    max?: number;
    precision?: number;

    isLoading?: boolean;
    loader?: ReactNode;
    disabled?: boolean;

    segmentation?: string;

    textBefore?: string;
    textAfter?: string;
    isManualInput?: boolean;

    onDecrementKey?: () => void;
    onIncrementKey?: () => void;
    shouldFocusInput?: boolean;
    onFocusHandled?: () => void;

    onChange?: (event: SyntheticEvent<HTMLInputElement> | null, value: number | string | undefined) => void;
} & NumberInputFormatProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'defaultValue' | 'type'>;
