import { useEffect, useRef } from 'react';

const ESCAPE_KEYCODE = 27;
const stack: object[] = [];

export type UseEscKeyDownArgs = {
    onClose: () => void;
    opened?: boolean;
    closeOnEsc?: boolean;
    onEscKeyDown?: (event: KeyboardEvent) => void;
};

/**
 * Закрывает верхний открытый слой по ESC.
 * При нескольких открытых Sheet/BottomSheet реагирует только последний.
 * Если у верхнего слоя closeOnEsc=false, ESC ничего не закрывает.
 */
export const useEscKeyDown = ({ opened, closeOnEsc = true, onEscKeyDown, onClose }: UseEscKeyDownArgs) => {
    const callbackRef = useRef({ closeOnEsc, onEscKeyDown, onClose });
    callbackRef.current = { closeOnEsc, onEscKeyDown, onClose };

    useEffect(() => {
        if (!opened) {
            return undefined;
        }

        const id = {};
        stack.push(id);

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.keyCode !== ESCAPE_KEYCODE || stack[stack.length - 1] !== id || !callbackRef.current.closeOnEsc) {
                return;
            }

            const { onEscKeyDown: onEsc, onClose: close } = callbackRef.current;

            if (onEsc) {
                onEsc(event);
                return;
            }

            close();
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            stack.splice(stack.indexOf(id), 1);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [opened]);
};
