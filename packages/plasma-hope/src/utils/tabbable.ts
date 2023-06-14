const tabbableNode = /input|select|textarea|button|object/;

export const focusSelector = [
    'input',
    'select',
    'textarea',
    'a',
    'button',
    'object',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])',
].join(',');

const isHidden = (el: HTMLElement) => {
    return (el.offsetWidth <= 0 && el.offsetHeight <= 0) || el.style.display === 'none';
};

export const isVisible = (element: HTMLElement): boolean => {
    let parentElement: HTMLElement = element;

    while (parentElement) {
        if (parentElement === document.body) {
            break;
        }

        if (isHidden(parentElement)) {
            return false;
        }

        parentElement = parentElement.parentNode as HTMLElement;
    }

    return true;
};

const getElementTabIndex = (element: HTMLElement): number => {
    const tabIndex = element.getAttribute('tabindex');

    return tabIndex === null ? NaN : parseInt(tabIndex as string, 10);
};

export const isFocusable = (element: HTMLElement): boolean => {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res =
        (tabbableNode.test(nodeName) && !(element as HTMLSelectElement).disabled) ||
        (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);

    return Boolean(res) && isVisible(element);
};

export const isTabble = (element: HTMLElement): boolean => {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && isFocusable(element);
};

export const findTabbableDescendants = (element: HTMLElement): Array<HTMLElement> => {
    return Array.from(element.querySelectorAll<HTMLElement>(focusSelector)).filter(isTabble);
};
