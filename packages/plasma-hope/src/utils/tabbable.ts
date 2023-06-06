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

const hidden = (el: HTMLElement) => {
    return (el.offsetWidth <= 0 && el.offsetHeight <= 0) || el.style.display === 'none';
};

export const visible = (element: HTMLElement) => {
    let parentElement: HTMLElement = element;

    while (parentElement) {
        if (parentElement === document.body) {
            break;
        }

        if (hidden(parentElement)) {
            return false;
        }

        parentElement = parentElement.parentNode as HTMLElement;
    }

    return true;
};

const getElementTabIndex = (element: HTMLElement) => {
    const tabIndex = element.getAttribute('tabindex');

    return tabIndex === null ? NaN : parseInt(tabIndex as string, 10);
};

export const focusable = (element: HTMLElement) => {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res =
        (tabbableNode.test(nodeName) && !(element as HTMLSelectElement).disabled) ||
        (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);

    return res && visible(element);
};

export const tabbable = (element: HTMLElement) => {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
};

export const findTabbableDescendants = (element: HTMLElement): Array<HTMLElement> => {
    return Array.from(element.querySelectorAll<HTMLElement>(focusSelector)).filter(tabbable);
};
