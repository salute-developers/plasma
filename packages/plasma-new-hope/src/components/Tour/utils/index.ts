import { canUseDOM } from 'src/utils';

export const getHTMLElement = (target: string | React.RefObject<HTMLElement> | HTMLElement): HTMLElement | null => {
    if (!target || !canUseDOM) {
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
