import type { MutableRefObject, RefCallback } from 'react';

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>;

export function mergeRefs<T>(...refs: MutableRefList<T>): RefCallback<T> {
    return (val: T) => {
        setRefList(val, ...refs);
    };
}

export function setRefList<T>(val: T, ...refs: MutableRefList<T>): void {
    refs.forEach((ref) => {
        if (typeof ref === 'function') {
            ref(val);
        } else if (ref != null) {
            ref.current = val;
        }
    });
}
