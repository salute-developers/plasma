import { animatedScrollToX, animatedScrollToY, TimingFunction } from '../../utils';

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

const axisToScrollKeyMap: Record<UseCarouselLiteOptions['axis'], 'scrollLeft' | 'scrollTop'> = {
    x: 'scrollLeft',
    y: 'scrollTop',
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

function boundPosition(position: number, trackSize: number, carouselSize: number, trackOffset: number): number {
    if (position < 0) {
        return 0;
    }

    // если все элементы помещаются в ширину карусели, то считаем trackEnd по-другому
    if (trackSize < carouselSize) {
        const trackEnd = Math.abs(carouselSize - trackSize - trackOffset);

        return position < trackEnd ? position : trackEnd;
    }

    const trackEnd = trackSize - carouselSize + trackOffset;

    if (position > trackEnd) {
        return trackEnd;
    }

    return position;
}

/**
 * Функция решает являются ли переданные индексы крайними с начала и конца.
 * Например в такой карусели `([1][2][3][4])` — при изменении индекса с 4 на 1 или наоборот функция вернёт `true`,
 * так как это переход между крайними элементами.
 *
 * Есть исключение, для карусели длинной в 2 элемента `([1][2])`.
 * В этом случае переход с индекса 1 на 2 и наоборот не должен считаться переходом с одного края на другой.
 *
 * @param prevIndex
 * @param index
 * @param numberOfItems количество элементов в карусели
 */
function isMaximumDistance(prevIndex: number, index: number, numberOfItems: number) {
    // проверка, что карусель состоит из 2-х элементов
    if (numberOfItems === 2) {
        return false;
    }

    return Math.abs(index - prevIndex) === numberOfItems - 1;
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

const scrollOptions: ScrollToOptions = { behavior: 'auto', left: 0, top: 0 };

/**
 * Делает расчет следующей позиции карусели исходя из параметров
 * index, align и размеров элементов track и carousel.
 * После применяет transform к элементу track или вызывает scrollTo на элементе carousel.
 * При scrollMode равном translate Анимирование происходит из-за CSS свойства `transition-property: transform`,
 * применённому к элементу track
 *
 * @param index индекс элемента к которому нужно сделать transform
 * @param prevIndex индекс предыдущего активного элемента для расчёта дистанции между индексами
 * @param axis ось вдоль которой будет происходить transform
 * @param align определяет позицию активного элемента относительно элемента carousel
 * @param track элемент к которому применяется transform
 * @param carousel элемент содержащий track
 * @param disableAnimation флаг для отключения анимирования прокрутки
 * @param scrollMode прокрутка через scrollTo или через translate
 */
export function translateToIndex(
    index: number,
    prevIndex: number,
    axis: UseCarouselLiteOptions['axis'],
    align: NonNullable<UseCarouselLiteOptions['scrollAlign']>,
    track: HTMLElement | null,
    carousel: HTMLElement | null,
    disableAnimation: boolean,
    scrollMode: NonNullable<UseCarouselLiteOptions['scrollMode']>,
): void {
    if (track === null || carousel === null) {
        return;
    }

    const scrollKey = axisToScrollKeyMap[axis];

    if (disableAnimation === false && scrollMode === 'translate' && carousel[scrollKey] !== 0) {
        carousel.scrollTo(scrollOptions);
    }

    const itemToTranslateTo = track.children.item(index) as HTMLElement | null;

    if (itemToTranslateTo === null) {
        return;
    }

    const numberOfItems = track.children.length;

    const offsetKey = axisToOffsetKeyMap[axis];
    const sizeKey = axisToSizeKeyMap[axis];

    const carouselSize = carousel[sizeKey];
    const trackSize = track[sizeKey];
    const trackOffset = track[offsetKey];
    const itemSize = itemToTranslateTo[sizeKey];
    const itemStart = itemToTranslateTo[offsetKey];

    const translatePosition = getTranslatePosition(itemSize, itemStart, carouselSize, trackOffset, align);

    const position = boundPosition(translatePosition, trackSize, carouselSize, trackOffset);

    if (scrollMode === 'scroll') {
        carousel.scrollTo({
            behavior: disableAnimation ? 'auto' : 'smooth',
            left: axis === 'x' ? position : 0,
            top: axis === 'y' ? position : 0,
        });

        return;
    }

    if (disableAnimation === true || isMaximumDistance(prevIndex, index, numberOfItems) === true) {
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
