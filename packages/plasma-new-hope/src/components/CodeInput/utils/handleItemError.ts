import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { ItemErrorBehavior } from '../CodeInput.types';
import { classes } from '../CodeInput.tokens';

import { ANIMATION_TIMEOUT } from './constants';

type ValidateSymbolsArgs = {
    currentSymbol: string;
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    inputContainerRef: MutableRefObject<HTMLDivElement | null>;
    setCode: Dispatch<SetStateAction<Array<string>>>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleItemError = ({
    currentSymbol,
    itemErrorBehavior,
    index,
    newCode,
    inputRefs,
    inputContainerRef,
    setCode,
    codeSetter,
}: ValidateSymbolsArgs) => {
    if (!inputRefs.current[index] || currentSymbol === ' ') {
        return;
    }

    const circleElement = inputContainerRef.current?.querySelector(`.${classes.itemCircle}-${index}`);

    switch (itemErrorBehavior) {
        case 'keep':
            setCode(newCode);
            inputRefs.current[index]?.classList.add(classes.itemError, classes.itemErrorAnimation);

            if (circleElement) {
                setTimeout(() => {
                    circleElement.classList.add(classes.itemCircleError, classes.itemCircleErrorAnimation);
                }, 0);
            }

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

            if (circleElement) {
                setTimeout(() => {
                    circleElement.classList.add(classes.itemCircleError, classes.itemCircleErrorAnimation);
                }, 0);
            }

            setTimeout(() => {
                const updatedCode = [...newCode];
                updatedCode[index] = '';

                codeSetter(updatedCode);
                inputRefs.current[index]?.classList.remove(
                    classes.itemError,
                    classes.itemErrorFade,
                    classes.itemErrorAnimation,
                );

                if (circleElement) {
                    setTimeout(() => {
                        circleElement.classList.remove(classes.itemCircleError, classes.itemCircleErrorAnimation);
                    }, 0);
                }
            }, ANIMATION_TIMEOUT);
    }
};
