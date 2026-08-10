import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { ItemErrorBehavior } from '../CodeField.types';
import { classes } from '../CodeField.tokens';

import { ANIMATION_TIMEOUT } from './constants';

type ValidateSymbolsArgs = {
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    itemRefs: MutableRefObject<Array<HTMLDivElement | null>>;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    setInnerValue: Dispatch<SetStateAction<Array<string>>>;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
    setSelectedIndex: Dispatch<SetStateAction<number | null>>;
    codeSetter: (newCode: Array<string>) => void;
    onChange?: (value: string) => void;
};

export const handleItemError = ({
    itemErrorBehavior,
    index,
    newCode,
    itemRefs,
    inputRef,
    setInnerValue,
    setActiveIndex,
    setSelectedIndex,
    codeSetter,
    onChange,
}: ValidateSymbolsArgs) => {
    if (!itemRefs.current[index]) {
        return;
    }

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
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            itemRefs.current[index]?.classList.add(classes.itemError, classes.itemErrorAnimation);

            setTimeout(() => {
                itemRefs.current[index]?.classList.remove(classes.itemErrorAnimation);
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
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            itemRefs.current[index]?.classList.add(
                classes.itemError,
                classes.itemErrorFade,
                classes.itemErrorAnimation,
            );

            setTimeout(() => {
                const updatedCode = [...newCode];
                updatedCode.splice(index, 1);

                codeSetter(updatedCode);

                itemRefs.current[index]?.classList.remove(
                    classes.itemError,
                    classes.itemErrorFade,
                    classes.itemErrorAnimation,
                );
                setTimeout(() => selectItem(index), 0);
            }, ANIMATION_TIMEOUT);
    }
};
