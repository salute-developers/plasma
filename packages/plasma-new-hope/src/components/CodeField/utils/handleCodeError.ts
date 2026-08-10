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
    inputRef: MutableRefObject<HTMLInputElement | null>;
    captionRef: MutableRefObject<HTMLDivElement | null>;
    setInnerValue: Dispatch<SetStateAction<Array<string>>>;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
    setSelectedIndex: Dispatch<SetStateAction<number | null>>;
    codeSetter: (newCode: Array<string>) => void;
};

export const handleCodeError = ({
    codeLength,
    codeErrorBehavior,
    currentCode,
    inputRef,
    inputContainerRef,
    captionRef,
    setInnerValue,
    setActiveIndex,
    setSelectedIndex,
    codeSetter,
}: ValidateSymbolsArgs) => {
    if (!inputContainerRef.current) {
        return;
    }

    const selectItem = (start: number, end: number) => {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        input.focus();
        input.setSelectionRange(start, end);
        setActiveIndex(start);
        setSelectedIndex(start < end ? start : null);
    };

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
                    selectItem(codeLength - 1, codeLength);
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

                selectItem(0, 0);
                inputContainerRef.current?.classList.remove(
                    classes.codeError,
                    classes.codeErrorAnimation,
                    classes.codeErrorFade,
                );
            }, ANIMATION_TIMEOUT);
    }
};
