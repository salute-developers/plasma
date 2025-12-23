import type { SyntheticEvent } from 'react';

/* Утилита для объединения обработчиков */
export const mergeHandlers = <E extends SyntheticEvent>(
    userHandler: (e: E) => void,
    injectedHandler: (e: E) => void,
) => {
    return (event: E) => {
        try {
            if (userHandler) {
                userHandler(event);
            }
        } catch (e) {
            console.error(e);
            throw e;
        } finally {
            if (!event.defaultPrevented && injectedHandler) {
                injectedHandler(event);
            }
        }
    };
};
