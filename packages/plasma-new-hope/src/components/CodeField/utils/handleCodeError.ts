import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { CodeErrorBehavior } from '../CodeField.types';
import { classes } from '../CodeField.tokens';

import { ANIMATION_TIMEOUT } from './constants';
import { getCodeValue } from './initialValuesHelper';

type ValidateSymbolsArgs = {
    codeLength: number;
    codeErrorBehavior: CodeErrorBehavior;
    currentCode: Array<string>;
    inputContainerRef: MutableRefObject<HTMLDivElement | null>;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    captionRef: MutableRefObject<HTMLDivElement | null>;
    setInnerValue: Dispatch<SetStateAction<Array<string>>>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleCodeError = ({
    codeLength,
    codeErrorBehavior,
    currentCode,
    inputRefs,
    inputContainerRef,
    captionRef,
    setInnerValue,
    codeSetter,
}: ValidateSymbolsArgs) => {
    if (!inputContainerRef.current) {
        return;
    }

    switch (codeErrorBehavior) {
        case 'keep':
            inputContainerRef.current.classList.add(classes.codeError, classes.codeErrorAnimation);
            captionRef.current?.classList.add(classes.captionError);

            setTimeout(() => {
                const newCode = [...currentCode];

                newCode.pop();
                codeSetter(newCode);
                setInnerValue(currentCode);

                inputContainerRef.current?.classList.remove(classes.codeErrorAnimation);

                setTimeout(() => {
                    inputRefs.current[inputRefs.current.length - 1]?.setSelectionRange(0, 1);
                    inputRefs.current[inputRefs.current.length - 1]?.focus();
                }, 0);
            }, ANIMATION_TIMEOUT);

            break;
        case 'remove-code':
        default:
            inputContainerRef.current.classList.add(
                classes.codeError,
                classes.codeErrorAnimation,
                classes.codeErrorFade,
            );
            captionRef.current?.classList.add(classes.captionError);

            setTimeout(() => {
                codeSetter(getCodeValue(codeLength, ''));

                inputRefs.current[0]?.focus();
                inputContainerRef.current?.classList.remove(
                    classes.codeError,
                    classes.codeErrorAnimation,
                    classes.codeErrorFade,
                );
            }, ANIMATION_TIMEOUT);
    }
};
