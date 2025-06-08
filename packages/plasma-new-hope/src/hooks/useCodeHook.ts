import { MutableRefObject, useEffect } from 'react';

import { useDidMountEffect } from '.';

type useCodeHookTypes = {
    codeLength: number;
    inputRefs: MutableRefObject<Array<HTMLInputElement | null>>;
    originalValue: string;
    getLastActiveIndex: () => number;
    handleFullCodeEnter: (fullCode: string) => void;
    autoFocus?: boolean;
    disabled?: boolean;
};

export const useCodeHook = ({
    inputRefs,
    codeLength,
    disabled,
    autoFocus,
    originalValue,
    getLastActiveIndex,
    handleFullCodeEnter,
}: useCodeHookTypes) => {
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, codeLength);
    }, [codeLength]);

    useEffect(() => {
        if (autoFocus && !disabled) {
            const lastActiveIndex = getLastActiveIndex();

            if (inputRefs?.current[lastActiveIndex]) {
                inputRefs.current[lastActiveIndex]?.focus();
            }
        }
    }, [autoFocus]);

    useDidMountEffect(() => {
        if (handleFullCodeEnter && originalValue.length === codeLength) {
            handleFullCodeEnter(originalValue);
        }
    }, [originalValue, handleFullCodeEnter]);
};
