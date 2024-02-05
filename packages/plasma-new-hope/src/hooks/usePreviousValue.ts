import { useEffect, useRef } from 'react';

/**
 * Хук для сохранения предыдущего значения
 */
export const usePreviousValue = <T extends any>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};
