import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
    callback: () => void,
    secondaryRef?: RefObject<HTMLElement | null> | null,
) => {
    const ref = useRef<T | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (
                    !secondaryRef?.current ||
                    (secondaryRef.current && !secondaryRef.current.contains(event.target as Node))
                ) {
                    callback();
                }
            }
        };

        document.addEventListener('mouseup', handleClickOutside);
        document.addEventListener('touchend', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
            document.removeEventListener('touchend', handleClickOutside);
        };
    }, [callback]);

    return ref;
};
