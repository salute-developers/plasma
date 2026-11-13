import { useRef } from 'react';
import type { RefObject } from 'react';

import { useIsomorphicLayoutEffect } from '../../../../hooks/useIsomorphicLayoutEffect';

export const useInputSizing = (inputRef: RefObject<HTMLInputElement>) => {
    const sizerRef = useRef<HTMLSpanElement>(null);

    // CSS определяет ширину группы ввода по скрытой копии значения; геометрию и каретку не измеряем.
    const syncValue = () => {
        const input = inputRef.current;
        const sizer = sizerRef.current;

        if (!input || !sizer) {
            return;
        }

        const value = (input.type === 'password' ? '•'.repeat(input.value.length) : input.value) || '\u200b';

        if (sizer.textContent !== value) {
            sizer.textContent = value;
        }
    };

    // Ждём обработчиков потребителя и восстановления controlled-значения самим React.
    const scheduleSync = () => queueMicrotask(syncValue);

    useIsomorphicLayoutEffect(() => {
        syncValue();

        // При нативном reset значение меняется после события и не вызывает input/change.
        const form = inputRef.current?.form;
        const handleReset = () => setTimeout(syncValue, 0);
        form?.addEventListener('reset', handleReset);

        return () => form?.removeEventListener('reset', handleReset);
    });

    return { sizerRef, scheduleSync };
};
