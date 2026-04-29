import type { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { isNumber } from 'src/utils';

export type UseDoubleTextFieldHandlersParams = {
    isControlled: boolean;
    firstValue: number;
    secondValue: number;
    name?: string;
    setDragValue: (updater: number[] | ((prev: number[]) => number[])) => void;
    sortValues: (values: number[]) => number[];
    emitChange: (values: number[]) => void;
    onChangeTextField?: (values: number[], event: ChangeEvent<HTMLInputElement>) => void;
    onBlurTextField?: (values: number[], event: FocusEvent<HTMLInputElement>) => void;
    onKeyDownTextField?: (values: number[], event: KeyboardEvent<HTMLInputElement>) => void;
    setFirstInputFocused: (focused: boolean) => void;
    setFirstInputHovered: (hovered: boolean) => void;
    setSecondInputFocused: (focused: boolean) => void;
    setSecondInputHovered: (hovered: boolean) => void;
};

/**
 * Инкапсулирует все обработчики текстовых полей двойного слайдера:
 * change / blur для каждого поля и общий keydown.
 */
export const useDoubleTextFieldHandlers = ({
    isControlled,
    firstValue,
    secondValue,
    setDragValue,
    sortValues,
    emitChange,
    onChangeTextField,
    onBlurTextField,
    onKeyDownTextField,
    name,
    setFirstInputFocused,
    setFirstInputHovered,
    setSecondInputFocused,
    setSecondInputHovered,
}: UseDoubleTextFieldHandlersParams) => {
    const onFirstTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);
        if (!isControlled) {
            setDragValue((prev) => [handleValue, prev[1]]);
        }

        if (onChangeTextField) {
            onChangeTextField([handleValue, secondValue], event);
        }

        emitChange([handleValue, secondValue]);
    };

    const onFirstTextfieldBlur = (event: FocusEvent<HTMLInputElement>) => {
        setFirstInputFocused(false);
        setFirstInputHovered(false);
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);
        const sortedValues = sortValues([handleValue, secondValue]);
        if (!isControlled) {
            setDragValue(sortedValues);
            emitChange(sortedValues);
        }

        if (onBlurTextField) {
            onBlurTextField(sortedValues, event);
        }
    };

    const onSecondTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNumber(event.target.value)) return;
        const handleValue = Number(event.target.value);
        if (!isControlled) {
            setDragValue((prev) => [prev[0], handleValue]);
        }

        if (onChangeTextField) {
            onChangeTextField([firstValue, handleValue], event);
        }

        emitChange([firstValue, handleValue]);
    };

    const onSecondTextfieldBlur = (event: FocusEvent<HTMLInputElement>) => {
        setSecondInputFocused(false);
        setSecondInputHovered(false);
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = Number(event.target.value);
        const sortedValues = sortValues([firstValue, handleValue]);
        if (!isControlled) {
            setDragValue(sortedValues);
            emitChange(sortedValues);
        }

        if (onBlurTextField) {
            onBlurTextField(sortedValues, event);
        }
    };

    const onTextfieldKeyDown = (event: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDownTextField) {
            onKeyDownTextField([firstValue, secondValue], event);
        }

        if (!isControlled && name && event.key === 'Enter') {
            emitChange(sortValues([firstValue, secondValue]));
        }
    };

    return {
        onFirstTextfieldChange,
        onFirstTextfieldBlur,
        onSecondTextfieldChange,
        onSecondTextfieldBlur,
        onTextfieldKeyDown,
    };
};
