import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { ItemErrorBehavior } from '../CodeField.types';
import { classes } from '../CodeField.tokens';

import { ANIMATION_TIMEOUT } from './constants';

type ValidateSymbolsArgs = {
    currentSymbol: string;
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    setInnerValue: Dispatch<SetStateAction<Array<string>>>;
    codeSetter: (newCode: Array<string>) => void;
    onChange?: (value: string) => void;
};

export const handleItemError = ({
    currentSymbol,
    itemErrorBehavior,
    index,
    newCode,
    inputRefs,
    setInnerValue,
    codeSetter,
    onChange,
}: ValidateSymbolsArgs) => {
    if (!inputRefs.current[index] || currentSymbol === ' ') {
        return;
    }

    switch (itemErrorBehavior) {
        case 'keep':
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            inputRefs.current[index]?.classList.add(classes.itemError, classes.itemErrorAnimation);

            setTimeout(() => {
                inputRefs.current[index]?.classList.remove(classes.itemErrorAnimation);

                setTimeout(() => inputRefs.current[index]?.setSelectionRange(0, 1), 0);
            }, ANIMATION_TIMEOUT);

            break;
        case 'forbid-enter':
            newCode[index] = '';
            codeSetter(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            break;
        case 'remove-symbol':
        default:
            setInnerValue(newCode);
            if (onChange) {
                onChange(newCode.join(''));
            }

            inputRefs.current[index]?.classList.add(
                classes.itemError,
                classes.itemErrorFade,
                classes.itemErrorAnimation,
            );

            setTimeout(() => {
                const updatedCode = [...newCode];
                updatedCode[index] = '';

                codeSetter(updatedCode);

                inputRefs.current[index]?.classList.remove(
                    classes.itemError,
                    classes.itemErrorFade,
                    classes.itemErrorAnimation,
                );
            }, ANIMATION_TIMEOUT);
    }
};
