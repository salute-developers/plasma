import { useEffect, useRef } from 'react';
import type { KeyboardEvent, PointerEvent, RefObject } from 'react';

import type { WheelItem, WheelItemValue } from '../Wheel.types';
import { findNextIndex, getSelectedIndex } from '../utils';

export type SelectionIntent = { value: WheelItemValue; direction: number };

type Options = {
    viewportRef: RefObject<HTMLDivElement>;
    items: readonly WheelItem[];
    value: WheelItemValue;
    loop: boolean;
    disabled?: boolean;
    visibleItemsCount: 3 | 5;
    onChange: (value: WheelItemValue) => void;
};

const WHEEL_THRESHOLD = 40;
const WHEEL_RESET_DELAY = 200;

export const useWheelInteraction = ({
    viewportRef,
    items,
    value,
    loop,
    disabled,
    visibleItemsCount,
    onChange,
}: Options) => {
    const intentRef = useRef<SelectionIntent>();
    const gestureRef = useRef<{ id: number; y: number; moved: boolean }>();
    const suppressClickRef = useRef(false);
    const wheelRef = useRef({ delta: 0, time: 0 });

    const selectedIndex = getSelectedIndex(items, value);
    const unavailable = Boolean(disabled || selectedIndex < 0 || items.every((item) => item.disabled));
    const previousIndex = findNextIndex(items, selectedIndex, -1, loop);
    const nextIndex = findNextIndex(items, selectedIndex, 1, loop);

    const select = (index: number, direction: number) => {
        const item = items[index];
        if (unavailable || !item || item.disabled || item.value === value) {
            return;
        }

        intentRef.current = { value: item.value, direction };
        onChange(item.value);
    };

    // Нужен native listener: React не позволяет отменить прокрутку в passive wheel event.
    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport || unavailable) {
            return undefined;
        }

        const onWheel = (event: WheelEvent) => {
            if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) {
                return;
            }

            const direction = Math.sign(event.deltaY);
            const index = findNextIndex(items, selectedIndex, direction, loop);
            if (index === selectedIndex) {
                return;
            }

            event.preventDefault();

            const wheel = wheelRef.current;
            const now = Date.now();
            if (now - wheel.time > WHEEL_RESET_DELAY || Math.sign(wheel.delta) !== direction) {
                wheel.delta = 0;
            }
            wheel.time = now;

            let multiplier = 1;
            if (event.deltaMode === 1) {
                multiplier = 16;
            } else if (event.deltaMode === 2) {
                multiplier = viewport.clientHeight;
            }

            wheel.delta += event.deltaY * multiplier;
            if (Math.abs(wheel.delta) >= WHEEL_THRESHOLD) {
                wheel.delta = 0;
                select(index, direction);
            }
        };

        viewport.addEventListener('wheel', onWheel, { passive: false });
        return () => viewport.removeEventListener('wheel', onWheel);
    });

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (unavailable) {
            return;
        }

        switch (event.key) {
            case 'ArrowUp':
                select(previousIndex, -1);
                break;
            case 'ArrowDown':
                select(nextIndex, 1);
                break;
            case 'Home':
                select(
                    items.findIndex((item) => !item.disabled),
                    -1,
                );
                break;
            case 'End':
                select(findNextIndex(items, items.length, -1, false), 1);
                break;
            default:
                return;
        }

        event.preventDefault();
    };

    const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
        if (unavailable || !event.isPrimary || event.button !== 0) {
            return;
        }

        suppressClickRef.current = false;
        gestureRef.current = { id: event.pointerId, y: event.clientY, moved: false };
        event.currentTarget.focus();
    };

    const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
        const gesture = gestureRef.current;
        if (!gesture || gesture.id !== event.pointerId || unavailable) {
            return;
        }

        const delta = gesture.y - event.clientY;
        const threshold = Math.max(16, event.currentTarget.clientHeight / visibleItemsCount);
        if (Math.abs(delta) < threshold) {
            return;
        }

        if (!gesture.moved) {
            event.currentTarget.setPointerCapture(event.pointerId);
        }
        gesture.y = event.clientY;
        gesture.moved = true;
        select(delta > 0 ? nextIndex : previousIndex, Math.sign(delta));
    };

    const endGesture = (event: PointerEvent<HTMLDivElement>) => {
        if (gestureRef.current?.id === event.pointerId) {
            suppressClickRef.current = gestureRef.current.moved;
            gestureRef.current = undefined;
        }
    };

    const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
            endGesture(event);
        }
    };

    const onItemClick = (index: number, direction: number) => {
        if (suppressClickRef.current) {
            suppressClickRef.current = false;
            return;
        }

        viewportRef.current?.focus();
        select(index, direction);
    };

    return {
        selectedIndex,
        previousIndex,
        nextIndex,
        unavailable,
        intentRef,
        select,
        onItemClick,
        viewportHandlers: {
            onKeyDown,
            onPointerDown,
            onPointerMove,
            onPointerUp: endGesture,
            onPointerCancel: endGesture,
            onLostPointerCapture: endGesture,
            onPointerLeave,
        },
    };
};
