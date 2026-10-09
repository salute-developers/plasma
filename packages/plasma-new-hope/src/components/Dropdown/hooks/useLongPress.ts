import { useCallback, useEffect, useRef } from 'react';
import type { PointerEvent, MouseEvent } from 'react';

/**
 * Время удержания по умолчанию (мс).
 */
export const LONG_PRESS_DEFAULT_DELAY = 500;

/**
 * Допустимое смещение указателя (px).
 */
const MOVE_TOLERANCE = 10;

type Props = {
    enabled: boolean;
    delay?: number;
    onLongPress: (event: Event) => void;
    /** Открыт ли список: обычный клик по target в этом случае вызывает onClickWhenOpened. */
    opened?: boolean;
    onClickWhenOpened?: (event: Event) => void;
};

/**
 * Хук для определения долгого нажатия.
 * Возвращает пропсы для reference-элемента.
 */
export const useLongPress = ({
    enabled,
    delay = LONG_PRESS_DEFAULT_DELAY,
    onLongPress,
    opened,
    onClickWhenOpened,
}: Props) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startRef = useRef({ x: 0, y: 0 });
    const isTouchRef = useRef(false);
    const firedRef = useRef(false);
    const onLongPressRef = useRef(onLongPress);

    onLongPressRef.current = onLongPress;

    const clear = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    useEffect(() => clear, [clear]);

    useEffect(() => {
        if (!enabled) {
            clear();
        }
    }, [enabled, clear]);

    if (!enabled) {
        return {};
    }

    const onPointerDown = (event: PointerEvent) => {
        // Только основная кнопка мыши.
        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        clear();
        firedRef.current = false;
        isTouchRef.current = event.pointerType !== 'mouse';
        startRef.current = { x: event.clientX, y: event.clientY };

        const { nativeEvent } = event;

        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            firedRef.current = true;
            onLongPressRef.current(nativeEvent);
        }, delay);
    };

    const onPointerMove = (event: PointerEvent) => {
        if (!timerRef.current) {
            return;
        }

        const { x, y } = startRef.current;

        if (Math.hypot(event.clientX - x, event.clientY - y) > MOVE_TOLERANCE) {
            clear();
        }
    };

    // Подавляем click после срабатывания долгого нажатия, чтобы не вызвать onClick у target.
    const onClickCapture = (event: MouseEvent) => {
        if (firedRef.current) {
            firedRef.current = false;
            event.preventDefault();
            event.stopPropagation();

            return;
        }

        // Обычный клик по target при открытом списке закрывает его.
        if (opened && onClickWhenOpened) {
            onClickWhenOpened(event.nativeEvent);
        }
    };

    // На touch-устройствах долгое нажатие вызывает нативное контекстное меню.
    const onContextMenu = (event: MouseEvent) => {
        if (isTouchRef.current && (timerRef.current || firedRef.current)) {
            event.preventDefault();
        }
    };

    return {
        onPointerDown,
        onPointerMove,
        onPointerUp: clear,
        onPointerCancel: clear,
        onPointerLeave: clear,
        onClickCapture,
        onContextMenu,
    };
};
