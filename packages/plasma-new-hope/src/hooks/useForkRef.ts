import React, { useMemo } from 'react';
import type { MutableRefObject, Ref } from 'react';

interface SetRef {
    <T>(ref: MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined, value: T | null): void;
}

const setRef: SetRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
};

export interface UseForkRefHook {
    <T>(refOne: Ref<T>, refTwo: Ref<T>): Ref<T>;
}

/**
 * Позволяет переиспользовать объект `ref` внутри forwardRef.
 * @param {React.Ref<T>} refOne
 * @param {React.Ref<T>} refTwo
 * @return {Function React.Ref}
 */
export const useForkRef: UseForkRefHook = (refOne, refTwo) => {
    return useMemo(() => {
        if (refOne == null && refTwo === null) {
            return null;
        }

        return (refOb) => {
            setRef(refOne, refOb);
            setRef(refTwo, refOb);
        };
    }, [refOne, refTwo]);
};
