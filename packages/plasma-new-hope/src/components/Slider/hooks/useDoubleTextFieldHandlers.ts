import { useState } from 'react';
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
    normalizeValue?: (value: number) => number;
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
    normalizeValue,
    onChangeTextField,
    onBlurTextField,
    onKeyDownTextField,
    name,
    setFirstInputFocused,
    setFirstInputHovered,
    setSecondInputFocused,
    setSecondInputHovered,
}: UseDoubleTextFieldHandlersParams) => {
    const [firstDraft, setFirstDraft] = useState<string>();
    const [secondDraft, setSecondDraft] = useState<string>();
    const getValue = (value: string) => (normalizeValue ? normalizeValue(Number(value)) : Number(value));

    const onFirstTextfieldFocus = (event: FocusEvent<HTMLInputElement>) => {
        setFirstInputFocused(true);
        if (normalizeValue) {
            setFirstDraft(event.target.value);
        }
    };

    const onSecondTextfieldFocus = (event: FocusEvent<HTMLInputElement>) => {
        setSecondInputFocused(true);
        if (normalizeValue) {
            setSecondDraft(event.target.value);
        }
    };

    const onFirstTextfieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (normalizeValue) {
            setFirstDraft(event.target.value);
        }
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = getValue(event.target.value);
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
        setFirstDraft(undefined);
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = getValue(event.target.value);
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
        if (normalizeValue) {
            setSecondDraft(event.target.value);
        }
        if (!isNumber(event.target.value)) return;
        const handleValue = getValue(event.target.value);
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
        setSecondDraft(undefined);
        if (!isNumber(event.target.value)) {
            return;
        }

        const handleValue = getValue(event.target.value);
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

        if (normalizeValue && event.key === 'Enter') {
            setFirstDraft(undefined);
            setSecondDraft(undefined);
            if (!isControlled) {
                const sortedValues = sortValues([firstValue, secondValue]);
                setDragValue(sortedValues);
                emitChange(sortedValues);
            }
            return;
        }

        if (!isControlled && name && event.key === 'Enter') {
            emitChange(sortValues([firstValue, secondValue]));
        }
    };

    return {
        firstTextFieldValue: normalizeValue ? firstDraft ?? firstValue : firstValue,
        secondTextFieldValue: normalizeValue ? secondDraft ?? secondValue : secondValue,
        onFirstTextfieldFocus,
        onSecondTextfieldFocus,
        onFirstTextfieldChange,
        onFirstTextfieldBlur,
        onSecondTextfieldChange,
        onSecondTextfieldBlur,
        onTextfieldKeyDown,
    };
};
