import { useMemo } from 'react';
import type { MutableRefObject, Ref } from 'react';

type RefArg<T> = MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined;

/** Присваивает значение в ref-объект или вызывает ref-callback. */
const setRef = <T>(ref: RefArg<T>, value: T | null): void => {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
};

/**
 * Объединяет два ref в один callback-ref.
 * Позволяет использовать внутренний ref вместе с переданным через forwardRef.
 */
export const useForkRef = <T>(refOne: Ref<T>, refTwo: Ref<T>): Ref<T> => {
    return useMemo(() => {
        if (refOne == null && refTwo == null) {
            return null;
        }

        return (value: T | null) => {
            setRef(refOne, value);
            setRef(refTwo, value);
        };
    }, [refOne, refTwo]);
};
