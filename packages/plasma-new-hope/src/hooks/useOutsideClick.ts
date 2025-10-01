import { useEffect } from 'react';
import type { RefObject } from 'react';

export function useOutsideClick(callback: (event: MouseEvent | TouchEvent) => void, refs: RefObject<HTMLElement>[]) {
    useEffect(() => {
        function handleClick(event: MouseEvent | TouchEvent) {
            const isInside = refs.some((ref) => {
                const el = ref.current;
                return el && el.contains(event.target as Node);
            });

            if (!isInside) {
                callback(event);
            }
        }

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    }, [callback]);
}
