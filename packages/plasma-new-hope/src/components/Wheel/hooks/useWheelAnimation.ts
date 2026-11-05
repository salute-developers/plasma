import { useCallback, useEffect, useRef } from 'react';
import type { MutableRefObject, RefObject } from 'react';

import { useIsomorphicLayoutEffect } from '../../../hooks';
import type { WheelItem, WheelItemValue } from '../Wheel.types';
import { tokens } from '../Wheel.tokens';
import { normalizeIndex } from '../utils';

import type { SelectionIntent } from './useWheelInteraction';

type Position = { x: number; y: number; fontSize: number; opacity: number };
type Selection = {
    index: number;
    virtualIndex: number;
    values: WheelItemValue[];
    loop: boolean;
    value: WheelItemValue;
    alignment: string;
    width: number;
    visibleItemsCount: 3 | 5;
};
type Options = {
    viewportRef: RefObject<HTMLDivElement>;
    intentRef: MutableRefObject<SelectionIntent | undefined>;
    items: readonly WheelItem[];
    value: WheelItemValue;
    index: number;
    loop: boolean;
    animated: boolean;
    visibleItemsCount: 3 | 5;
};

const measure = (element: HTMLElement): Position => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);

    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        fontSize: parseFloat(style.fontSize),
        opacity: Number(style.opacity),
    };
};

const measureItems = (elements: Map<string, HTMLDivElement>) => {
    const positions = new Map<string, Position>();
    elements.forEach((element, key) => positions.set(key, measure(element)));

    return positions;
};

const getCurrentPosition = (element: HTMLElement, position: Position): Position => {
    const style = getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform === 'none' ? undefined : style.transform);

    return {
        x: position.x + matrix.m41,
        y: position.y + matrix.m42,
        fontSize: position.fontSize * matrix.a,
        opacity: Number(style.opacity),
    };
};

const getIndexDelta = (previous: Selection, index: number, count: number, intent?: SelectionIntent) => {
    const delta = index - previous.index;
    if (!previous.loop || count < 2) {
        return delta;
    }

    if (intent) {
        return intent.direction < 0 ? -normalizeIndex(-delta, count) : normalizeIndex(delta, count);
    }

    return Math.abs(delta) > count / 2 ? delta - Math.sign(delta) * count : delta;
};

const getAnimationOptions = (viewport: HTMLElement) => {
    const style = getComputedStyle(viewport);
    const duration = style.getPropertyValue(tokens.animationDuration).trim() || '200ms';

    return {
        duration: parseFloat(duration) * (duration.endsWith('ms') ? 1 : 1000),
        easing: style.getPropertyValue(tokens.animationEasing).trim() || 'ease-out',
    };
};

export const useWheelAnimation = ({
    viewportRef,
    intentRef,
    items,
    value,
    index,
    loop,
    animated,
    visibleItemsCount,
}: Options) => {
    const previousRef = useRef<Selection>();
    const elementsRef = useRef(new Map<string, HTMLDivElement>());
    const positionsRef = useRef(new Map<string, Position>());
    const animationsRef = useRef(new Map<string, Animation>());

    const previous = previousRef.current;
    const sameItems =
        previous?.values.length === items.length && items.every((item, i) => item.value === previous.values[i]);
    const sameSequence = sameItems && previous?.loop === loop && previous.index >= 0 && index >= 0;
    const intent = intentRef.current?.value === value ? intentRef.current : undefined;
    const delta = sameSequence ? getIndexDelta(previous, index, items.length, intent) : 0;
    const virtualIndex = sameSequence ? previous.virtualIndex + delta : index;

    const registerItem = useCallback((key: string, element: HTMLDivElement | null) => {
        if (element) {
            elementsRef.current.set(key, element);
        } else {
            elementsRef.current.delete(key);
        }
    }, []);

    const stopAnimations = useCallback(() => {
        animationsRef.current.forEach((animation) => animation.cancel());
        animationsRef.current.clear();
        viewportRef.current?.removeAttribute('data-animating');
    }, [viewportRef]);

    useIsomorphicLayoutEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) {
            return;
        }

        const changed = previous?.value !== value;
        const alignment = getComputedStyle(viewport).justifyItems;
        const { width } = viewport.getBoundingClientRect();
        const sameLayout =
            previous?.alignment === alignment &&
            previous.visibleItemsCount === visibleItemsCount &&
            previous.width === width;
        if (!changed && sameSequence && sameLayout && previous.index === index && animated) {
            if (!animationsRef.current.size) {
                positionsRef.current = measureItems(elementsRef.current);
            }

            return;
        }

        const shouldAnimate =
            changed &&
            sameSequence &&
            sameLayout &&
            animated &&
            !matchMedia('(prefers-reduced-motion: reduce)').matches;
        const origins = new Map<string, Position>();

        // При повторном переключении продолжаем с текущего кадра незавершённой анимации.
        if (shouldAnimate) {
            elementsRef.current.forEach((element, key) => {
                const position = positionsRef.current.get(key);
                if (position) {
                    origins.set(key, animationsRef.current.has(key) ? getCurrentPosition(element, position) : position);
                }
            });
        }

        stopAnimations();
        const targets = measureItems(elementsRef.current);
        positionsRef.current = targets;
        previousRef.current = {
            index,
            virtualIndex,
            values: items.map((item) => item.value),
            loop,
            value,
            alignment,
            width,
            visibleItemsCount,
        };
        intentRef.current = undefined;

        if (!shouldAnimate) {
            return;
        }

        const options = getAnimationOptions(viewport);
        if (!Number.isFinite(options.duration) || options.duration <= 0) {
            return;
        }

        targets.forEach((target, key) => {
            const element = elementsRef.current.get(key);
            if (!element || typeof element.animate !== 'function') {
                return;
            }

            const origin = origins.get(key) ?? {
                ...target,
                y: target.y + (Math.sign(delta) * viewport.clientHeight) / visibleItemsCount,
                opacity: 0,
            };
            const animation = element.animate(
                [
                    {
                        transform: `translate(${origin.x - target.x}px, ${origin.y - target.y}px) scale(${
                            origin.fontSize / target.fontSize
                        })`,
                        opacity: origin.opacity,
                    },
                    { transform: 'translate(0, 0) scale(1)', opacity: target.opacity },
                ],
                options,
            );

            animationsRef.current.set(key, animation);
            viewport.setAttribute('data-animating', 'true');
            animation.finished
                .then(() => {
                    if (animationsRef.current.get(key) !== animation) {
                        return;
                    }

                    animationsRef.current.delete(key);
                    if (!animationsRef.current.size) {
                        viewport.removeAttribute('data-animating');
                        positionsRef.current = measureItems(elementsRef.current);
                    }
                })
                .catch(() => undefined);
        });
    });

    useEffect(() => {
        const refreshPositions = () => {
            if (!animationsRef.current.size) {
                positionsRef.current = measureItems(elementsRef.current);
            }
        };

        const query = matchMedia('(prefers-reduced-motion: reduce)');
        const onPreferenceChange = () => {
            if (query.matches) {
                stopAnimations();
                refreshPositions();
            }
        };

        const onResize = () => {
            const previousSelection = previousRef.current;
            const width = viewportRef.current?.getBoundingClientRect().width;
            if (previousSelection && width != null && previousSelection.width !== width) {
                stopAnimations();
                previousRef.current = { ...previousSelection, width };
            }
            refreshPositions();
        };
        const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(onResize);

        if (viewportRef.current) {
            observer?.observe(viewportRef.current);
        }
        query.addEventListener('change', onPreferenceChange);

        return () => {
            query.removeEventListener('change', onPreferenceChange);
            observer?.disconnect();
            stopAnimations();
        };
    }, [viewportRef, stopAnimations]);

    return { virtualIndex, registerItem };
};
