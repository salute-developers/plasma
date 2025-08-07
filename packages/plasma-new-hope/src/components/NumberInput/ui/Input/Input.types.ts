import type { SyntheticEvent, InputHTMLAttributes, Dispatch, SetStateAction, ReactNode } from 'react';

export type InputProps = {
    value: number | string | undefined;
    isInputFocused: boolean;
    setIsInputFocused: Dispatch<SetStateAction<boolean>>;
    setIsAnimationRun: Dispatch<SetStateAction<boolean>>;
    setInnerValue: Dispatch<SetStateAction<number | string | undefined>>;

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

    onChange?: (event: SyntheticEvent<HTMLInputElement> | null, value: number | string | undefined) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
