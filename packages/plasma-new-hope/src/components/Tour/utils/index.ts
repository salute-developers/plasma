import { canUseDOM } from '../../../utils/canUseDOM';

/* Ширина хвостика */
export const ARROW_WIDTH = 20;
/* Высота хвостика */
export const ARROW_HEIGHT = 8;
/* SVG хвостика */
export const ARROW_POLYGON = 'M20 20L0 20C8.88889 20.0001 10 12.5714 10 12C10 12.5714 11.3273 20.006 20 20Z';
/* Отступ хвостика по краям (чтобы избежать коллизии со скругленными углами) */
export const ARROW_PADDING = 16;

export const getHTMLElement = (
    target: string | React.RefObject<HTMLElement | null> | HTMLElement,
): HTMLElement | null => {
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
