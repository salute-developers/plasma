import { useCallback, useEffect, useRef } from 'react';

import { markForFocusLater, returnFocus, setupScopedFocus, teardownScopedFocus } from '../utils/focusManager';
import { focusSelector, isFocusable, isTabble } from '../utils/tabbable';
import { scopeTab } from '../utils/scopeTab';
import { createAriaHider } from '../utils/ariaHider';

export type FocusTrapOptions = {
    focusSelector?: string | HTMLElement;
    disableAriaHider?: boolean;
};

/**
 *  Захватывает фокус внутри DOM node.
 * */
export const useFocusTrap = (
    active = true,
    options: FocusTrapOptions = {},
): ((instance: HTMLElement | null) => void) => {
    const ref = useRef<HTMLElement | null>();
    const restoreAria = useRef<(() => void) | null>(null);

    const setRef = useCallback(
        (node: HTMLElement | null) => {
            if (restoreAria.current) {
                restoreAria.current();
            }

            if (ref.current) {
                teardownScopedFocus();
                returnFocus();
            }

            if (active && node) {
                setupScopedFocus(node);
                markForFocusLater();

                const processNode = (node: HTMLElement) => {
                    restoreAria.current = !options.disableAriaHider ? createAriaHider(node) : null;

                    // Находим первый элемент для фокуса
                    let focusElement: HTMLElement | null = null;
                    if (options.focusSelector) {
                        focusElement =
                            typeof options.focusSelector === 'string'
                                ? node.querySelector(options.focusSelector)
                                : options.focusSelector;
                    }

                    if (!focusElement) {
                        const children = Array.from<HTMLElement>(node.querySelectorAll(focusSelector));
                        focusElement =
                            // tabbable предпочтительнее focusable
                            children.find(isTabble) || children.find(isFocusable) || null;

                        // Если ничего не нашлось, то может ли сама нода быть под фокусом
                        if (!focusElement && isFocusable(node)) {
                            focusElement = node;
                        }
                    }

                    if (focusElement) {
                        // Фокус на первый элемент внутри
                        focusElement.focus();
                    }
                };

                // Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
                setTimeout(() => {
                    if (node.ownerDocument) {
                        processNode(node);
                    }
                });

                ref.current = node;
            } else {
                ref.current = null;
            }
        },
        [active, options.focusSelector, options.disableAriaHider],
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
