import { useCallback, useEffect, useRef } from 'react';

import { FocusManager } from '../utils/focusManager';
import { focusSelector, isFocusable, isTabble } from '../utils/tabbable';
import { scopeTab } from '../utils/scopeTab';

// Находим элемент для фокуса
const getFocusElement = (
    node: HTMLElement,
    firstFocusSelector?: string | React.RefObject<HTMLElement>,
): HTMLElement | null => {
    let focusElement: HTMLElement | null = null;
    if (firstFocusSelector) {
        if (typeof firstFocusSelector === 'string') {
            focusElement = node.querySelector(firstFocusSelector);
        } else if (firstFocusSelector.current) {
            focusElement = firstFocusSelector.current;
        }
    }

    if (!focusElement) {
        const children = Array.from<HTMLElement>(node.querySelectorAll(focusSelector));
        focusElement = children.find((el) => isTabble(el)) || null;
    }

    // Если ничего не нашлось, то может ли сама нода быть под фокусом
    if (!focusElement && isFocusable(node)) {
        focusElement = node;
    }

    return focusElement;
};

const processNode = (node: HTMLElement, firstFocusSelector?: string | React.RefObject<HTMLElement>) => {
    const focusElement = getFocusElement(node, firstFocusSelector);

    if (focusElement) {
        focusElement.focus();
    }
};

const focusManager = new FocusManager();

/**
 *  Захватывает фокус внутри DOM node.
 * */
export const useFocusTrap = (
    active = true,
    firstFocusSelector?: string | React.RefObject<HTMLElement>,
    focusAfterNode?: React.RefObject<HTMLElement>,
): ((instance: HTMLElement | null) => void) => {
    const ref = useRef<HTMLElement | null>();

    const setRef = useCallback(
        (node: HTMLElement | null) => {
            if (ref.current) {
                focusManager.teardownScopedFocus();
                focusManager.returnFocus();
            }

            if (active && node) {
                focusManager.setupScopedFocus(node);
                focusManager.markForFocusAfter(focusAfterNode);

                // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
                setTimeout(() => {
                    if (node.ownerDocument) {
                        processNode(node, firstFocusSelector);
                    }
                });

                ref.current = node;
                return;
            }

            ref.current = null;
        },
        [active, firstFocusSelector],
    );

    useEffect(() => {
        if (!active) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab' && ref.current) {
                scopeTab(ref.current, event);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [active]);

    return setRef;
};
