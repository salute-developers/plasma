import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { ItemErrorBehavior } from '../CodeField.types';
import { classes } from '../CodeField.tokens';

import { ANIMATION_TIMEOUT } from './constants';
import { getCodeValue } from './initialValuesHelper';

type ValidateSymbolsArgs = {
    codeLength: number;
    currentSymbol: string;
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    setCode: Dispatch<SetStateAction<Array<string>>>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleItemError = ({
    codeLength,
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
            inputRefs.current[index]?.classList.add(classes.itemError);

            setTimeout(() => {
                inputRefs.current[index]?.classList.remove(classes.itemError);

                setTimeout(() => inputRefs.current[index]?.setSelectionRange(0, 1), 0);
            }, ANIMATION_TIMEOUT);

            break;
        case 'remove-code':
            setCode(newCode);
            inputRefs.current[index]?.classList.add(classes.itemError);

            setTimeout(() => {
                codeSetter(getCodeValue(codeLength, ''));

                inputRefs.current[index]?.classList.remove(classes.itemError);
                inputRefs.current[0]?.focus();
            }, ANIMATION_TIMEOUT);

            break;
        case 'forbid-enter':
            newCode[index] = '';
            codeSetter(newCode);

            break;
        case 'remove-symbol':
        default:
            setCode(newCode);
            inputRefs.current[index]?.classList.add(classes.itemError, classes.itemErrorFade);

            setTimeout(() => {
                const updatedCode = [...newCode];
                updatedCode[index] = '';

                codeSetter(updatedCode);

                inputRefs.current[index]?.classList.remove(classes.itemError, classes.itemErrorFade);
            }, ANIMATION_TIMEOUT);
    }
};
