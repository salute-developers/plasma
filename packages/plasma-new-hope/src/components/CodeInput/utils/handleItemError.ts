import { MutableRefObject } from 'react';

import type { ItemErrorBehavior } from '../CodeInput.types';
import { classes } from '../CodeInput.tokens';
import { ANIMATION_TIMEOUT } from '../../../utils/constants';

type ValidateSymbolsArgs = {
    currentSymbol: string;
    itemErrorBehavior: ItemErrorBehavior;
    index: number;
    newCode: Array<string>;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    inputContainerRef: MutableRefObject<HTMLDivElement | null>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleItemError = ({
    currentSymbol,
    itemErrorBehavior,
    index,
    newCode,
    inputRefs,
    inputContainerRef,
    codeSetter,
}: ValidateSymbolsArgs) => {
    if (!inputRefs.current[index] || currentSymbol === ' ') {
        return;
    }

    const circleElement = inputContainerRef.current?.querySelector(`.${classes.itemCircle}-${index}`);

    switch (itemErrorBehavior) {
        case 'forbid-enter':
            newCode[index] = '';
            codeSetter(newCode);

            break;
        case 'remove-symbol':
        default:
            newCode[index] = '';
            codeSetter(newCode);

            if (circleElement) {
                circleElement.classList.add(classes.itemCircleError, classes.itemCircleErrorAnimation);
            }

            setTimeout(() => {
                if (circleElement) {
                    circleElement.classList.remove(classes.itemCircleError, classes.itemCircleErrorAnimation);
                }
            }, ANIMATION_TIMEOUT);
    }
};
