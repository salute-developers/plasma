import { findTabbableDescendants, isTabble } from './tabbable';

export type FocusTrapSelectors = readonly string[];

const getAdditionalFocusScopeElements = (root: HTMLElement, focusTrapSelectors?: FocusTrapSelectors): HTMLElement[] => {
    if (!focusTrapSelectors?.length) {
        return [];
    }

    const elements = focusTrapSelectors.flatMap((selector) =>
        Array.from(root.ownerDocument.querySelectorAll<HTMLElement>(selector)),
    );

    return Array.from(new Set(elements)).filter((element) => element !== root);
};

export const isElementInFocusScope = (
    root: HTMLElement,
    element: Element | null,
    focusTrapSelectors?: FocusTrapSelectors,
): boolean => {
    if (!element) {
        return false;
    }

    return [root, ...getAdditionalFocusScopeElements(root, focusTrapSelectors)].some((scopeElement) =>
        scopeElement.contains(element),
    );
};

export const findTabbableInFocusScope = (root: HTMLElement, focusTrapSelectors?: FocusTrapSelectors): HTMLElement[] => {
    const additionalScopeElements = getAdditionalFocusScopeElements(root, focusTrapSelectors);
    const tabbable = [
        ...findTabbableDescendants(root),
        ...additionalScopeElements.flatMap((element) => [
            ...(isTabble(element) ? [element] : []),
            ...findTabbableDescendants(element),
        ]),
    ];

    return Array.from(new Set(tabbable));
};
