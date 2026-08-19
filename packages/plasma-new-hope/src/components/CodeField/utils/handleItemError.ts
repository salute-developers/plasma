import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { ItemErrorBehavior } from '../CodeField.types';

import { ANIMATION_TIMEOUT } from './constants';

type ValidateSymbolsArgs = {
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    setInnerValue: Dispatch<SetStateAction<Array<string>>>;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
    setSelectedIndex: Dispatch<SetStateAction<number | null>>;
    codeSetter: (newCode: Array<string>) => void;
    onChange?: (value: string) => void;
    onAnimationStart: (index: number) => void;
    onAnimationEnd: () => void;
};

export const handleItemError = ({
    itemErrorBehavior,
    index,
    newCode,
    inputRef,
    setInnerValue,
    setActiveIndex,
    setSelectedIndex,
    codeSetter,
    onChange,
    onAnimationStart,
    onAnimationEnd,
}: ValidateSymbolsArgs) => {
    const selectItem = (selectionEnd: number) => {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        input.focus();
        input.setSelectionRange(index, selectionEnd);
        setActiveIndex(index);
        setSelectedIndex(index < selectionEnd ? index : null);
    };

    switch (itemErrorBehavior) {
        case 'keep':
            onAnimationStart(index);
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            setTimeout(() => {
                onAnimationEnd();
                setTimeout(() => selectItem(index + 1), 0);
            }, ANIMATION_TIMEOUT);

            break;
        case 'forbid-enter':
            newCode.splice(index, 1);
            codeSetter(newCode);
            setTimeout(() => selectItem(index), 0);

            break;
        case 'remove-symbol':
        default:
            onAnimationStart(index);
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            setTimeout(() => {
                const updatedCode = [...newCode];
                updatedCode.splice(index, 1);

                codeSetter(updatedCode);
                onAnimationEnd();
                setTimeout(() => selectItem(index), 0);
            }, ANIMATION_TIMEOUT);
    }
};
