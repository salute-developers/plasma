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
    setCode: Dispatch<SetStateAction<Array<string>>>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleItemError = ({
    currentSymbol,
    itemErrorBehavior,
    index,
    newCode,
    inputRefs,
    setCode,
    codeSetter,
}: ValidateSymbolsArgs) => {
    if (!inputRefs.current[index] || currentSymbol === ' ') {
        return;
    }

    switch (itemErrorBehavior) {
        case 'keep':
            setCode(newCode);
            inputRefs.current[index]?.classList.add(classes.itemError, classes.itemErrorAnimation);

            setTimeout(() => {
                inputRefs.current[index]?.classList.remove(classes.itemErrorAnimation);

                setTimeout(() => inputRefs.current[index]?.setSelectionRange(0, 1), 0);
            }, ANIMATION_TIMEOUT);

            break;
        case 'forbid-enter':
            newCode[index] = '';
            codeSetter(newCode);

            break;
        case 'remove-symbol':
        default:
            setCode(newCode);
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
