import { animatedScrollToX, animatedScrollToY, TimingFunction } from '../../utils';

import { ScrollAxis, ScrollAlign } from './types';

const positionModByScrollAlign = ({
    scrollAlign,
    position,
    carouselSize,
    itemSize,
    offset,
    scrollStart,
    axis,
}: {
    scrollAlign: ScrollAlign;
    position: number;
    carouselSize: number;
    itemSize: number;
    offset: number;
    scrollStart: number;
    axis: ScrollAxis;
}) => {
    if (scrollAlign === 'start') {
        const inaccuracy = 1;
        const paddingOffset = axis === 'y' ? offset - itemSize / 2 + inaccuracy : 0;
        return position + paddingOffset;
    }
    if (scrollAlign === 'center') {
        return position - carouselSize / 2 + itemSize / 2;
    }
    if (scrollAlign === 'end') {
        return position - carouselSize + itemSize + offset;
    }
    if (scrollAlign === 'activeDirection') {
        if (position >= scrollStart + carouselSize - itemSize) {
            return position - carouselSize + itemSize + offset;
        }
        if (position > scrollStart) {
            return scrollStart;
        }
    }
    return position;
};

/**
 * Подсчет скролла до переданного индекса.
 */
export const getCalculatedPos = ({
    scrollEl,
    items,
    axis,
    index,
    offset,
    scrollAlign,
}: {
    scrollEl: HTMLElement;
    items: HTMLCollectionOf<HTMLElement>;
    axis: ScrollAxis;
    index: number;
    offset: number;
    scrollAlign: ScrollAlign;
}) => {
    let position = scrollAlign === 'center' ? offset : 0;
    let carouselSize;
    let itemSize;
    let scrollStart;

    if (items.item(index) === null) {
        return position;
    }

    for (let i = 0; i < index; i++) {
        if (axis === 'x') {
            position += items.item(i)?.offsetWidth ?? 0;
        } else {
            position += items.item(i)?.offsetHeight ?? 0;
        }
    }

    if (axis === 'x') {
        carouselSize = scrollEl.offsetWidth;
        itemSize = items.item(index)?.offsetWidth ?? 0;
        scrollStart = scrollEl.scrollLeft;
    } else {
        carouselSize = scrollEl.offsetHeight;
        itemSize = items.item(index)?.offsetHeight ?? 0;
        scrollStart = scrollEl.scrollTop;
    }

    return positionModByScrollAlign({
        scrollAlign,
        position,
        carouselSize,
        itemSize,
        offset,
        scrollStart,
        axis,
    });
};

/**
 * Подсчет смещения из-за паддингов.
 */
export const getCalculatedOffset = (scrollEl: Element, trackEl: Element, axis: ScrollAxis) => {
    const paddingProp = axis === 'x' ? 'paddingLeft' : 'paddingTop';
    return parseInt(getComputedStyle(scrollEl)[paddingProp], 10) + parseInt(getComputedStyle(trackEl)[paddingProp], 10);
};

/**
 * Прокрутка к указанной позиции с анимацией или без.
 */
export const scrollToPos = ({
    scrollEl,
    pos,
    axis,
    animated,
    duration,
    timingFunction,
}: {
    scrollEl: HTMLElement;
    pos: number;
    axis: ScrollAxis;
    animated?: boolean;
    duration?: number;
    timingFunction?: TimingFunction;
}) => {
    if (axis === 'x' && Math.abs(pos - scrollEl.scrollLeft) > 1) {
        if (animated) {
            animatedScrollToX(scrollEl, pos, duration, timingFunction);
        } else {
            scrollEl.scrollTo({ left: pos });
        }
    }
    if (axis === 'y' && Math.abs(pos - scrollEl.scrollTop) > 1) {
        if (animated) {
            animatedScrollToY(scrollEl, pos, duration, timingFunction);
        } else {
            scrollEl.scrollTo({ top: pos });
        }
    }
};

const round = (n: number) => Math.round(n * 100) / 100;

function calculateCenterSlot(itemCenter: number, scrollCenter: number, itemSize: number) {
    return round((itemCenter - scrollCenter) / itemSize);
}

function calculateStartSlot(itemEnd: number, itemSize: number, scrollStart: number) {
    return round((itemEnd - itemSize - scrollStart) / itemSize);
}

function calculateEndSlot(itemEnd: number, scrollSize: number, scrollStart: number, itemSize: number) {
    return round((itemEnd - (scrollSize + scrollStart)) / itemSize);
}

/**
 * Получить позицию (слот) айтема в каруселе.
 * Каждый айтем имеет свой слот относительно вьюпорта карусели.
 */
export function getItemSlot(
    itemIndex: number,
    itemEnd: number,
    itemSize: number,
    scrollStart: number,
    scrollSize: number,
    scrollAlign: ScrollAlign,
    prevIndex = 0,
    offset = 0,
): number {
    /**
     * Граница и центр скролла (видимой части).
     * Смещение + размер.
     */
    const scrollEnd = scrollStart + scrollSize;
    const scrollCenter = scrollStart + scrollSize / 2;
    const itemCenter = itemEnd - itemSize / 2;

    switch (scrollAlign) {
        case 'center': {
            return calculateCenterSlot(itemCenter, scrollCenter, itemSize);
        }
        case 'start': {
            return calculateStartSlot(itemEnd, itemSize, scrollStart);
        }
        case 'end': {
            return calculateEndSlot(itemEnd, scrollSize, scrollStart, itemSize);
        }
        case 'activeDirection': {
            const prevStart = offset + itemSize * prevIndex;
            const prevEnd = prevStart + itemSize;
            const prevVisible = prevEnd > scrollStart && prevStart < scrollEnd;

            if (prevVisible === false) {
                if (prevIndex < itemIndex) {
                    return calculateEndSlot(itemEnd, scrollSize, scrollStart, itemSize);
                }
                return calculateStartSlot(itemEnd, itemSize, scrollStart);
            }

            return calculateCenterSlot(itemCenter, scrollCenter, itemSize);
        }
        default: {
            return calculateCenterSlot(itemCenter, scrollCenter, itemSize);
        }
    }
}

export function getCarouselItems(track: HTMLElement): HTMLCollectionOf<HTMLElement> {
    return track.children as HTMLCollectionOf<HTMLElement>;
}
