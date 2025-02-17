import { MutableRefObject } from 'react';

export const getFirstOverflowingTab = (items: MutableRefObject<HTMLElement | null>[], maxScroll: number) => {
    return items.find((item: MutableRefObject<HTMLElement | null>) => {
        if (!item.current || item.current.offsetLeft === undefined) {
            return;
        }
        const tabStartX = item.current.offsetLeft;

        return tabStartX < maxScroll;
    });
};

export const getLastOverflowingTab = (items: MutableRefObject<HTMLElement | null>[], minScroll: number) => {
    return items.find((item: MutableRefObject<HTMLElement | null>) => {
        if (!item.current || item.current.offsetLeft === undefined) {
            return;
        }
        const tabEndX = item.current.offsetLeft + item.current.offsetWidth;

        return tabEndX > minScroll;
    });
};
