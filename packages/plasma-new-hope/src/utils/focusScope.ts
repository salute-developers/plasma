import { findTabbableDescendants, isTabble } from './tabbable';

export type FocusTrapSelectors = readonly string[];

/**
 * Дополнительные элементы области фокуса, например дочерние слои Overlay в других порталах.
 */
export type GetFocusScopeElements = () => HTMLElement[];

const getAdditionalFocusScopeElements = (
    root: HTMLElement,
    focusTrapSelectors?: FocusTrapSelectors,
    extraElements: HTMLElement[] = [],
): HTMLElement[] => {
    const selected = focusTrapSelectors?.length
        ? focusTrapSelectors.flatMap((selector) =>
              Array.from(root.ownerDocument.querySelectorAll<HTMLElement>(selector)),
          )
        : [];

    return Array.from(new Set([...selected, ...extraElements])).filter(
        (element) => element !== root && !root.contains(element),
    );
};

export const isElementInFocusScope = (
    root: HTMLElement,
    element: Element | null,
    focusTrapSelectors?: FocusTrapSelectors,
    extraElements?: HTMLElement[],
): boolean => {
    if (!element) {
        return false;
    }

    return [root, ...getAdditionalFocusScopeElements(root, focusTrapSelectors, extraElements)].some((scopeElement) =>
        scopeElement.contains(element),
    );
};

export const findTabbableInFocusScope = (
    root: HTMLElement,
    focusTrapSelectors?: FocusTrapSelectors,
    extraElements?: HTMLElement[],
): HTMLElement[] => {
    const additionalScopeElements = getAdditionalFocusScopeElements(root, focusTrapSelectors, extraElements);
    const tabbable = [
        ...findTabbableDescendants(root),
        ...additionalScopeElements.flatMap((element) => [
            ...(isTabble(element) ? [element] : []),
            ...findTabbableDescendants(element),
        ]),
    ];

    return Array.from(new Set(tabbable));
};
