import { RefObject } from 'react';

import { CarouselNewProps } from '../Carousel.types';

// Возвращает DOM-элемент слайда по индексу, учитывая виртуализованные элементы с data-атрибутом.
export const getItemElementByIndex = ({
    trackRef,
    itemsCollection,
    index,
    itemAttribute,
}: {
    trackRef: RefObject<HTMLDivElement>;
    itemsCollection: HTMLCollection;
    index: number;
    itemAttribute: string;
}) => {
    const indexedItem = trackRef.current?.querySelector<HTMLElement>(`[${itemAttribute}="${index}"]`);

    if (indexedItem) {
        return indexedItem;
    }

    return itemsCollection.item(index) as HTMLElement | null;
};

// Подсчет отступа для скролла до переданного индекса.
export const getCalculatedPos = ({
    scrollRef,
    trackRef,
    itemsCollection,
    index,
    scrollAlign,
    itemAttribute,
}: {
    scrollRef: RefObject<HTMLDivElement>;
    trackRef: RefObject<HTMLDivElement>;
    itemsCollection: HTMLCollection;
    index: number;
    scrollAlign: CarouselNewProps['scrollAlign'];
    itemAttribute: string;
}): number => {
    const item = getItemElementByIndex({
        trackRef,
        itemsCollection,
        index,
        itemAttribute,
    });

    if (!item || !trackRef.current || !scrollRef.current) {
        return 0;
    }

    const itemRect = item.getBoundingClientRect();
    const trackRect = trackRef.current.getBoundingClientRect();
    const scrollRect = scrollRef.current.getBoundingClientRect();

    const left = itemRect.left - trackRect.left + trackRef.current.scrollLeft;

    switch (scrollAlign) {
        case 'start': {
            return left;
        }
        case 'center': {
            return left - scrollRect.width / 2 + itemRect.width / 2;
        }
        case 'end': {
            return left - scrollRect.width + itemRect.width;
        }
        default: {
            return 0;
        }
    }
};
