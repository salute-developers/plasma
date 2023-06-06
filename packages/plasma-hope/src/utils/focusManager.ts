import { findTabbableDescendants } from './tabbable';

const focusLaterElements: Array<HTMLElement> = [];
let focusElement: HTMLElement | null = null;
let needToFocus = false;

const handleBlur = () => {
    needToFocus = true;
};

const handleFocus = () => {
    if (needToFocus) {
        needToFocus = false;
        if (!focusElement || focusElement.contains(document.activeElement)) {
            return;
        }

        const el = findTabbableDescendants(focusElement)[0] || focusElement;
        el.focus();
    }
};

export const markForFocusLater = () => {
    focusLaterElements.push(document.activeElement as HTMLElement);
};

export const returnFocus = () => {
    const toFocus = focusLaterElements.pop() ?? null;
    if (toFocus) {
        toFocus.focus();
    }
};

export const setupScopedFocus = (element: HTMLElement) => {
    focusElement = element;
    document.addEventListener('focusout', handleBlur, false);
    document.addEventListener('focusin', handleFocus, true);
};

export const teardownScopedFocus = () => {
    focusElement = null;
    document.removeEventListener('focusout', handleBlur);
    document.removeEventListener('focusin', handleFocus);
};
