import React from 'react';

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {boolean} cleanUp
 * https://habr.com/ru/company/domclick/blog/510616/
 */
export function useDebouncedFunction<T extends (...args: any[]) => any>(
    callback: T,
    delay: number,
): (...args: Parameters<T>) => void {
    const callbackRef = React.useRef(callback);
    const delayRef = React.useRef(delay);
    const timeoutRef = React.useRef(-1);
    const debouncedCallbackRef = React.useRef((...args: any[]) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(callbackRef.current, delayRef.current, ...args);
    });

    /**
     * Очищаем таймер при анмаунте компонента.
     * При изменении callback и delay обновляем соответствующие ref
     */
    React.useEffect(() => {
        callbackRef.current = callback;
        delayRef.current = delay;

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [callback, delay]);

    return debouncedCallbackRef.current;
}
