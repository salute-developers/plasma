export const getHTMLElement = (target: string | React.RefObject<HTMLElement> | HTMLElement): HTMLElement | null => {
    if (!target) {
        return null;
    }
    if (typeof target === 'string') {
        return document.querySelector<HTMLElement>(target);
    }
    if ('current' in target) {
        return target.current;
    }
    return target;
};
