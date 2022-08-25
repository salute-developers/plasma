import { TimingFunction } from '../../utils';

import { ScrollAxis, ScrollAlign, UseCarouselLiteOptions } from './types';

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
}: {
    scrollEl: HTMLElement;
    pos: number;
    axis: ScrollAxis;
    animated?: boolean;
    duration?: number;
    timingFunction?: TimingFunction;
}) => {
    if (axis === 'x' && Math.abs(pos - scrollEl.scrollLeft) > 1) {
        scrollEl.scrollTo({ left: pos });
    }
    if (axis === 'y' && Math.abs(pos - scrollEl.scrollTop) > 1) {
        scrollEl.scrollTo({ top: pos });
    }
};

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * Получить позицию (слот) айтема в каруселе.
 * Каждый айтем имеет свой слот относительно вьюпорта карусели.
 */
export const getItemSlot = (
    itemIndex: number,
    itemEnd: number,
    itemSize: number,
    scrollStart: number,
    scrollSize: number,
    scrollAlign: ScrollAlign,
    prevIndex = 0,
    offset = 0,
) => {
    /**
     * Граница и центр скролла (видимой части).
     * Смещение + размер.
     */
    const scrollEnd = scrollStart + scrollSize;
    const scrollCenter = scrollStart + scrollSize / 2;
    const itemCenter = itemEnd - itemSize / 2;

    if (scrollAlign === 'center') {
        return round((itemCenter - scrollCenter) / itemSize);
    }
    if (scrollAlign === 'start') {
        return round((itemEnd - itemSize - scrollStart) / itemSize);
    }
    if (scrollAlign === 'end') {
        return round((itemEnd - (scrollSize + scrollStart)) / itemSize);
    }
    if (scrollAlign === 'activeDirection') {
        const prevStart = offset + itemSize * prevIndex;
        const prevEnd = prevStart + itemSize;
        const prevVisible = prevEnd > scrollStart && prevStart < scrollEnd;

        if (!prevVisible) {
            if (prevIndex < itemIndex) {
                return round((itemEnd - (scrollSize + scrollStart)) / itemSize);
            }
            return round((itemEnd - itemSize - scrollStart) / itemSize);
        }
    }
    return null;
};

export function getCarouselItems(track: HTMLElement): HTMLCollectionOf<HTMLElement> {
    return track.children as HTMLCollectionOf<HTMLElement>;
}

const axisToTranslateMap: Record<UseCarouselLiteOptions['axis'], (position: number) => string> = {
    x(position) {
        return `translateX(${-position}px)`;
    },
    y(position) {
        return `translateY(${-position}px)`;
    },
};
const axisToOffsetKeyMap: Record<UseCarouselLiteOptions['axis'], 'offsetLeft' | 'offsetTop'> = {
    x: 'offsetLeft',
    y: 'offsetTop',
};

const axisToSizeKeyMap: Record<UseCarouselLiteOptions['axis'], 'offsetWidth' | 'offsetHeight'> = {
    x: 'offsetWidth',
    y: 'offsetHeight',
};

function getCenterPosition(itemSize: number, itemStart: number, carouselSize: number, trackOffset: number) {
    const relativeMiddle = itemStart + trackOffset + itemSize / 2;

    return relativeMiddle - carouselSize / 2;
}

function getEndPosition(itemSize: number, itemStart: number, carouselSize: number, trackOffset: number) {
    return 2 * trackOffset + itemStart + itemSize - carouselSize;
}

function getTranslatePosition(
    itemSize: number,
    itemStart: number,
    carouselSize: number,
    trackOffset: number,
    scrollAlign: UseCarouselLiteOptions['scrollAlign'],
): number {
    switch (scrollAlign) {
        case 'start': {
            return itemStart;
        }
        case 'end': {
            return getEndPosition(itemSize, itemStart, carouselSize, trackOffset);
        }
        case 'center':
        case 'activeDirection': // TODO: activeDirection сделать позже, мало кто использует. Fallback на 'center'
        default:
            return getCenterPosition(itemSize, itemStart, carouselSize, trackOffset);
    }
}

function boundPosition(position: number, trackEnd: number): number {
    if (position < 0) {
        return 0;
    }

    if (position > trackEnd) {
        return trackEnd;
    }

    return position;
}

function isMaximumDistance(currentIndex: number, nextIndex: number, length: number) {
    return Math.abs(nextIndex - currentIndex) === length - 1;
}

function setTimingFunction(element: HTMLElement | null, timingFunction: 'step-start' | '') {
    if (element) {
        element.style.transitionTimingFunction = timingFunction;
    }
}

function translateToPosition(element: HTMLElement, axis: UseCarouselLiteOptions['axis'], position: number): void {
    const translate = axisToTranslateMap[axis];

    element.style.transform = translate(position);
}

/**
 * Делает расчет следующей позиции карусели исходя из параметров
 * index, align и размеров элементов track и carousel.
 * После применяет стиль к элементу track.
 * Анимирование происходит из-за CSS свойства `transition-property: transform`, применённому к элементу track
 *
 * @param index индекс элемента к которому нужно сделать transform
 * @param prevIndex индекс предыдущего активного элемента для расчёта дистанции между индексами
 * @param axis ось вдоль которой будет происходить transform
 * @param align определяет позицию активного элемента относительно элемента carousel
 * @param track элемент к которому применяется transform
 * @param carousel элемент содержащий track
 * @param disableAnimation флаг для отключения анимирования transform
 */
export function translateToIndex(
    index: number,
    prevIndex: number,
    axis: UseCarouselLiteOptions['axis'],
    align: UseCarouselLiteOptions['scrollAlign'],
    track: HTMLElement | null,
    carousel: HTMLElement | null,
    disableAnimation: boolean,
): void {
    if (track === null || carousel === null) {
        return;
    }

    const itemToTranslateTo = track.children.item(index) as HTMLElement | null;

    if (itemToTranslateTo === null) {
        return;
    }

    const itemsNumber = track.children.length;

    const offsetKey = axisToOffsetKeyMap[axis];
    const sizeKey = axisToSizeKeyMap[axis];

    const carouselSize = carousel[sizeKey];
    const trackSize = track[sizeKey];
    const trackOffset = track[offsetKey];
    const trackEnd = trackSize - carouselSize + trackOffset;
    const itemSize = itemToTranslateTo[sizeKey];
    const itemStart = itemToTranslateTo[offsetKey];

    const translatePosition = getTranslatePosition(itemSize, itemStart, carouselSize, trackOffset, align);

    const position = boundPosition(translatePosition, trackEnd);

    if (disableAnimation === true || isMaximumDistance(prevIndex, index, itemsNumber) === true) {
        // Выключаем стандартный easing, переключая его на step-start
        setTimingFunction(track, 'step-start');

        translateToPosition(track, axis, position);

        /**
         * Включаем стандартный easing.
         * нужно делать через setTimeout, чтобы transform успел произойти до изменения transitionTimingFunction
         */
        setTimeout(setTimingFunction, 0, track, '');

        return;
    }

    translateToPosition(track, axis, position);
}
