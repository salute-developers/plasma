import { useLayoutEffect, useRef } from 'react';

export const useDidMountLayoutEffect = (fn: () => any, inputs: Array<any>) => {
    const didMountRef = useRef(false);

    useLayoutEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, inputs);
};
